import { questions } from "./question-bank.js";
import { QUIZ_CONFIG } from "./config.js";
import { normalizeStudentId, hash32, seededRandom, shuffle } from "./common.js";

export const questionMap = new Map(questions.map((question) => [question.id, question]));

function chooseDiverse(pool, count, random) {
  const byTopic = new Map();
  shuffle(pool, random).forEach((question) => {
    if (!byTopic.has(question.topic)) byTopic.set(question.topic, []);
    byTopic.get(question.topic).push(question);
  });
  const topics = shuffle([...byTopic.keys()], random);
  const selected = [];
  while (selected.length < count && topics.some((topic) => byTopic.get(topic).length)) {
    for (const topic of topics) {
      if (selected.length >= count) break;
      const bucket = byTopic.get(topic);
      if (bucket.length) selected.push(bucket.pop());
    }
  }
  if (selected.length !== count) throw new Error(`Not enough ${pool[0]?.difficulty || "requested"} questions.`);
  return selected;
}

export function createAssignment(studentId) {
  const seed = hash32(`${QUIZ_CONFIG.quizVersion}|${normalizeStudentId(studentId)}`);
  const random = seededRandom(seed);
  const selected = [];
  for (const difficulty of ["basic", "intermediate", "advanced"]) {
    const pool = questions.filter((question) => question.difficulty === difficulty);
    selected.push(...chooseDiverse(pool, QUIZ_CONFIG.difficultyCounts[difficulty], random));
  }
  return shuffle(selected, random).map((question) => ({
    questionId: question.id,
    optionOrder: shuffle([0, 1, 2, 3], random)
  }));
}

export function gradeAssignment(assignment, responses) {
  let correct = 0;
  let incorrect = 0;
  let unanswered = 0;
  const responseRecords = [];
  assignment.forEach(({ questionId, optionOrder }, index) => {
    const question = questionMap.get(questionId);
    const displayedIndex = responses[questionId];
    const originalIndex = displayedIndex == null ? null : optionOrder[displayedIndex];
    const isCorrect = originalIndex === question.correctIndex;
    if (displayedIndex == null) unanswered += 1;
    else if (isCorrect) correct += 1;
    else incorrect += 1;
    responseRecords.push({ number:index+1, questionId, displayedOptionIndex:displayedIndex??null, originalOptionIndex:originalIndex, correct:displayedIndex==null?null:isCorrect });
  });
  const score = correct*QUIZ_CONFIG.marksCorrect + incorrect*QUIZ_CONFIG.marksIncorrect + unanswered*QUIZ_CONFIG.marksUnanswered;
  return { correct, incorrect, unanswered, score, maximumScore:assignment.length*QUIZ_CONFIG.marksCorrect, responseRecords };
}
