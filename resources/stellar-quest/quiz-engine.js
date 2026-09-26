import { questions } from "./question-bank.js";
import { QUIZ_CONFIG } from "./config.js";
import { questionMap, createAssignment, gradeAssignment } from "./quiz-engine.js";
import {
  qs, formatDuration, normalizeStudentId, hash32,
  renderMath, showToast, attemptKey, readJson, writeJson, resultStoreKey,
  downloadJson
} from "./common.js";

const activePointerKey = `${QUIZ_CONFIG.storagePrefix}:active:${QUIZ_CONFIG.quizVersion}`;
const state = { attempt: null, index: 0, timerId: null, submitting: false };

function showView(name) {
  qs("#welcome-view").classList.toggle("hidden", name !== "welcome");
  qs("#quiz-view").classList.toggle("hidden", name !== "quiz");
  qs("#result-view").classList.toggle("hidden", name !== "result");
}

function configureIntro() {
  qs("#intro-question-count").textContent = QUIZ_CONFIG.totalQuestions;
  qs("#intro-duration").textContent = QUIZ_CONFIG.durationMinutes;
  qs("#intro-score").textContent = QUIZ_CONFIG.totalQuestions * QUIZ_CONFIG.marksCorrect;
}

function validateRegistration() {
  const fullName = qs("#full-name").value.trim().replace(/\s+/g, " ");
  const studentId = normalizeStudentId(qs("#student-id").value);
  const email = qs("#email").value.trim().toLowerCase();
  if (fullName.length < 2) return { error: "Enter your full name (at least 2 characters)." };
  if (studentId.length < 2) return { error: "Enter a valid university roll number or student ID." };
  if (email && !qs("#email").validity.valid) return { error: "Enter a valid email address or leave it blank." };
  if (!qs("#honour-code").checked) return { error: "Please accept the independent-work statement." };
  return { fullName, studentId, email };
}

function startOrResume(details) {
  const key = attemptKey(details.studentId);
  const existing = readJson(key, null);
  if (existing?.quizVersion === QUIZ_CONFIG.quizVersion) {
    state.attempt = existing;
    localStorage.setItem(activePointerKey, key);
    if (existing.status === "completed") {
      if (!QUIZ_CONFIG.allowRetry) showResult(existing.result);
      else createNewAttempt(details, key);
    } else {
      launchAttempt();
    }
    return;
  }
  const prior = readJson(resultStoreKey(), []).find((result) => normalizeStudentId(result.student.studentId) === details.studentId);
  if (prior && !QUIZ_CONFIG.allowRetry) {
    qs("#form-error").textContent = "This student ID has already submitted on this browser. Ask the instructor before retrying.";
    return;
  }
  createNewAttempt(details, key);
}

function createNewAttempt(details, key) {
  const now = Date.now();
  state.attempt = {
    schema: "stellar-quest-attempt-v1",
    quizVersion: QUIZ_CONFIG.quizVersion,
    student: details,
    assignment: createAssignment(details.studentId),
    responses: {},
    flaggedQuestionIds: [],
    visibilityEvents: [],
    startedAt: now,
    endAt: now + QUIZ_CONFIG.durationMinutes * 60 * 1000,
    status: "active"
  };
  saveAttempt(key);
  localStorage.setItem(activePointerKey, key);
  launchAttempt();
}

function currentAttemptKey() {
  return attemptKey(state.attempt.student.studentId);
}

function saveAttempt(key = currentAttemptKey()) {
  try {
    writeJson(key, state.attempt);
    qs("#save-status") && (qs("#save-status").textContent = "Saved in this browser");
  } catch (error) {
    showToast("This browser could not save progress. Check storage/privacy settings.", "error");
  }
}

function launchAttempt() {
  showView("quiz");
  const { fullName, studentId } = state.attempt.student;
  qs("#student-display-name").textContent = fullName;
  qs("#student-display-id").textContent = studentId;
  qs("#student-initials").textContent = fullName.split(/\s+/).slice(0, 2).map((part) => part[0]).join("").toUpperCase();
  const firstUnanswered = state.attempt.assignment.findIndex(({ questionId }) => state.attempt.responses[questionId] == null);
  state.index = firstUnanswered >= 0 ? firstUnanswered : 0;
  buildPalette();
  renderQuestion();
  startTimer();
  window.addEventListener("beforeunload", warnBeforeUnload);
}

function buildPalette() {
  const palette = qs("#question-palette");
  palette.replaceChildren();
  state.attempt.assignment.forEach((_, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = String(index + 1);
    button.addEventListener("click", () => goTo(index));
    palette.appendChild(button);
  });
  updatePalette();
}

function updatePalette() {
  const flags = new Set(state.attempt.flaggedQuestionIds);
  [...qs("#question-palette").children].forEach((button, index) => {
    const id = state.attempt.assignment[index].questionId;
    const answered = state.attempt.responses[id] != null;
    button.classList.toggle("is-current", index === state.index);
    button.classList.toggle("is-answered", answered);
    button.classList.toggle("is-flagged", flags.has(id));
    button.setAttribute("aria-label", `Question ${index + 1}: ${index === state.index ? "current, " : ""}${answered ? "answered" : "unanswered"}${flags.has(id) ? ", flagged" : ""}`);
  });
  const answered = Object.values(state.attempt.responses).filter((value) => value != null).length;
  qs("#quiz-progress").style.width = `${answered / state.attempt.assignment.length * 100}%`;
}

function currentQuestion() {
  const assignment = state.attempt.assignment[state.index];
  return { assignment, question: questionMap.get(assignment.questionId) };
}

function renderQuestion() {
  const { assignment, question } = currentQuestion();
  qs("#question-number").textContent = `Question ${state.index + 1} of ${state.attempt.assignment.length}`;
  qs("#question-topic").textContent = question.topic;
  qs("#question-stem").textContent = question.stem;
  const figureHost = qs("#question-figure");
  figureHost.replaceChildren();
  if (question.figure) figureHost.appendChild(renderFigure(question.figure));
  const options = qs("#options-list");
  options.replaceChildren();
  assignment.optionOrder.forEach((originalIndex, displayedIndex) => {
    const label = document.createElement("label"); label.className = "option";
    const input = document.createElement("input"); input.type = "radio"; input.name = `answer-${question.id}`; input.value = displayedIndex; input.checked = state.attempt.responses[question.id] === displayedIndex;
    input.addEventListener("change", () => { state.attempt.responses[question.id] = displayedIndex; saveAttempt(); updatePalette(); });
    const letter = document.createElement("span"); letter.className = "option__letter"; letter.textContent = String.fromCharCode(65 + displayedIndex);
    const text = document.createElement("span"); text.className = "option__text"; text.textContent = question.options[originalIndex];
    label.append(input, letter, text); options.appendChild(label);
  });
  const flagged = state.attempt.flaggedQuestionIds.includes(question.id);
  qs("#flag-button").setAttribute("aria-pressed", String(flagged));
  qs("#flag-button").lastChild.textContent = flagged ? " Flagged for review" : " Mark for review";
  qs("#previous-button").disabled = state.index === 0;
  qs("#next-button").textContent = state.index === state.attempt.assignment.length - 1 ? "Review map" : "Next →";
  renderMath(qs("#question-content"));
  updatePalette();
}

function renderFigure(figure) {
  const ns = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(ns, "svg");
  svg.setAttribute("viewBox", "0 0 560 300"); svg.setAttribute("class", "mini-hr"); svg.setAttribute("role", "img"); svg.setAttribute("aria-label", figure.alt || "Schematic H–R diagram");
  [[60,18,60,250],[60,250,535,250]].forEach(([x1,y1,x2,y2]) => { const line=document.createElementNS(ns,"line"); Object.entries({x1,y1,x2,y2,stroke:"#7386a0","stroke-width":"2"}).forEach(([k,v])=>line.setAttribute(k,v)); svg.appendChild(line); });
  [[12,32,"Luminosity ↑"],[390,286,"Temperature decreases →"]].forEach(([x,y,value]) => { const text=document.createElementNS(ns,"text"); text.setAttribute("x",x); text.setAttribute("y",y); text.setAttribute("fill","#9fb0c8"); text.setAttribute("font-size","13"); text.textContent=value; svg.appendChild(text); });
  const path=document.createElementNS(ns,"path"); path.setAttribute("d",figure.path||"M110 60 C210 105, 340 160, 485 225"); path.setAttribute("fill","none"); path.setAttribute("stroke","#6a8cff"); path.setAttribute("stroke-width","4"); svg.appendChild(path);
  (figure.points||[]).forEach((point)=>{const circle=document.createElementNS(ns,"circle");circle.setAttribute("cx",point.x);circle.setAttribute("cy",point.y);circle.setAttribute("r","8");circle.setAttribute("fill",point.color||"#59ddff");const text=document.createElementNS(ns,"text");text.setAttribute("x",point.x+12);text.setAttribute("y",point.y-8);text.setAttribute("fill","#f2f7ff");text.setAttribute("font-size","14");text.textContent=point.label;svg.append(circle,text);});
  return svg;
}

function goTo(index) {
  state.index = Math.max(0, Math.min(index, state.attempt.assignment.length - 1));
  renderQuestion();
  qs("#question-content").focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startTimer() {
  clearInterval(state.timerId);
  tickTimer();
  state.timerId = setInterval(tickTimer, 1000);
}

function tickTimer() {
  const remaining = Math.max(0, Math.ceil((state.attempt.endAt - Date.now()) / 1000));
  qs("#countdown").textContent = formatDuration(remaining);
  qs("#timer-progress").style.width = `${remaining / (QUIZ_CONFIG.durationMinutes * 60) * 100}%`;
  qs("#countdown").parentElement.classList.toggle("is-urgent", remaining <= 300);
  document.title = `${formatDuration(remaining)} | Stellar Quest`;
  if (remaining <= 0 && !state.submitting) submitQuiz(true);
}

function gradeAttempt(autoSubmitted) {
  const { correct, incorrect, unanswered, score, maximumScore, responseRecords } = gradeAssignment(state.attempt.assignment, state.attempt.responses);
  const submittedAt = Date.now();
  const timeTakenSeconds = Math.min(QUIZ_CONFIG.durationMinutes * 60, Math.max(0, Math.round((submittedAt - state.attempt.startedAt) / 1000)));
  return {
    schema: "stellar-quest-result-v1",
    quizTitle: QUIZ_CONFIG.title,
    quizVersion: QUIZ_CONFIG.quizVersion,
    resultId: `${QUIZ_CONFIG.quizVersion}-${hash32(`${state.attempt.student.studentId}|${state.attempt.startedAt}`).toString(16).padStart(8,"0")}`,
    student: state.attempt.student,
    score, maximumScore, percentage: Number((score / maximumScore * 100).toFixed(1)),
    correct, incorrect, unanswered, timeTakenSeconds,
    startedAt: new Date(state.attempt.startedAt).toISOString(),
    submittedAt: new Date(submittedAt).toISOString(),
    autoSubmitted,
    visibilityChangeCount: state.attempt.visibilityEvents.length,
    responses: responseRecords
  };
}

function submitQuiz(autoSubmitted = false) {
  if (state.submitting || state.attempt.status !== "active") return;
  state.submitting = true;
  clearInterval(state.timerId);
  const result = gradeAttempt(autoSubmitted);
  state.attempt.status = "completed";
  state.attempt.result = result;
  saveAttempt();
  const results = readJson(resultStoreKey(), []).filter((item) => item.resultId !== result.resultId);
  results.push(result);
  writeJson(resultStoreKey(), results);
  window.removeEventListener("beforeunload", warnBeforeUnload);
  showResult(result);
  if (QUIZ_CONFIG.automaticallyDownloadResult) downloadResult(result);
  if (autoSubmitted) showToast("Time expired. The quiz was submitted automatically.");
}

function showResult(result) {
  showView("result");
  document.title = "Results | Stellar Quest";
  qs("#result-score").textContent = result.score;
  qs("#result-maximum").textContent = `/ ${result.maximumScore}`;
  qs("#result-percentage").textContent = `${result.percentage}%`;
  qs("#result-correct").textContent = result.correct;
  qs("#result-incorrect").textContent = result.incorrect;
  qs("#result-unanswered").textContent = result.unanswered;
  qs("#result-time").textContent = formatDuration(result.timeTakenSeconds);
  qs("#result-visibility").textContent = result.visibilityChangeCount;
  qs("#performance-message").textContent = result.percentage >= 85 ? "Outstanding command of stellar physics." : result.percentage >= 70 ? "Strong performance across the stellar lifecycle." : result.percentage >= 50 ? "A solid foundation—review advanced structure topics next." : "Keep exploring; revisit the structure equations and evolutionary pathways.";
  qs("#download-result").onclick = () => downloadResult(result);
  if (QUIZ_CONFIG.showCorrectAnswersAfterSubmission) renderAnswerReview(result);
}

function renderAnswerReview(result) {
  const host = qs("#answer-review"); host.classList.remove("hidden"); host.replaceChildren();
  const heading=document.createElement("h2");heading.textContent="Answer review";host.appendChild(heading);
  result.responses.forEach((record)=>{const question=questionMap.get(record.questionId);const item=document.createElement("article");item.className=`review-item ${record.correct ? "is-correct" : "is-incorrect"}`;const title=document.createElement("strong");title.textContent=`${record.number}. ${record.questionId}`;const answer=document.createElement("p");answer.textContent=`Correct answer: ${question.options[question.correctIndex]}`;const explanation=document.createElement("p");explanation.textContent=question.instructorComment;item.append(title,answer,explanation);host.appendChild(item);});
  renderMath(host);
}

function downloadResult(result) {
  const safeId = normalizeStudentId(result.student.studentId).replace(/[^A-Z0-9_-]/g, "-");
  downloadJson(`stellar-quest-result-${safeId}.json`, result);
  showToast("Result file downloaded. Send it to your instructor.", "success");
}

function warnBeforeUnload(event) {
  if (state.attempt?.status !== "active") return;
  event.preventDefault(); event.returnValue = "";
}

qs("#registration-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const details = validateRegistration();
  qs("#form-error").textContent = details.error || "";
  if (!details.error) startOrResume(details);
});
qs("#previous-button").addEventListener("click", () => goTo(state.index - 1));
qs("#next-button").addEventListener("click", () => goTo(state.index === state.attempt.assignment.length - 1 ? 0 : state.index + 1));
qs("#flag-button").addEventListener("click", () => {
  const id = currentQuestion().question.id;
  const flags = new Set(state.attempt.flaggedQuestionIds);
  flags.has(id) ? flags.delete(id) : flags.add(id);
  state.attempt.flaggedQuestionIds = [...flags]; saveAttempt(); renderQuestion();
});
qs("#palette-toggle").addEventListener("click", (event) => {
  const hidden = qs("#question-palette").classList.toggle("hidden");
  qs(".legend").classList.toggle("hidden", hidden); event.currentTarget.textContent = hidden ? "Show" : "Hide"; event.currentTarget.setAttribute("aria-expanded", String(!hidden));
});
qs("#submit-button").addEventListener("click", () => {
  const answered = Object.values(state.attempt.responses).filter((value) => value != null).length;
  qs("#submit-summary").textContent = `${answered} answered, ${state.attempt.assignment.length - answered} unanswered, and ${state.attempt.flaggedQuestionIds.length} flagged. Answers cannot be changed afterward.`;
  qs("#submit-dialog").showModal();
});
qs("#submit-dialog").addEventListener("close", () => { if (qs("#submit-dialog").returnValue === "confirm") submitQuiz(false); });
qs("#new-student").addEventListener("click", () => { localStorage.removeItem(activePointerKey); location.reload(); });
document.addEventListener("visibilitychange", () => { if (state.attempt?.status === "active") { state.attempt.visibilityEvents.push({ state: document.visibilityState, at: Date.now() }); saveAttempt(); } });
document.addEventListener("keydown", (event) => { if (qs("#quiz-view").classList.contains("hidden") || ["INPUT","TEXTAREA"].includes(document.activeElement?.tagName)) return; if (event.key === "ArrowLeft") goTo(state.index - 1); if (event.key === "ArrowRight") goTo(state.index + 1); });

configureIntro();
const activeKey = localStorage.getItem(activePointerKey);
const activeAttempt = activeKey ? readJson(activeKey, null) : null;
if (activeAttempt?.quizVersion === QUIZ_CONFIG.quizVersion) {
  state.attempt = activeAttempt;
  activeAttempt.status === "completed" ? showResult(activeAttempt.result) : launchAttempt();
} else {
  localStorage.removeItem(activePointerKey);
  showView("welcome");
}
