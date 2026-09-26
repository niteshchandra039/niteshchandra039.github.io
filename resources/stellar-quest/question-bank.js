import { QUIZ_CONFIG } from "./config.js";
import {
  qs, formatDuration, normalizeStudentId, readJson, writeJson,
  resultStoreKey, importedStoreKey, downloadCsv, showToast
} from "./common.js";

let imported = readJson(importedStoreKey(), []);

function validResult(value) {
  return value &&
    value.schema === "stellar-quest-result-v1" &&
    value.quizVersion === QUIZ_CONFIG.quizVersion &&
    typeof value.resultId === "string" &&
    typeof value.student?.fullName === "string" &&
    typeof value.student?.studentId === "string" &&
    Number.isFinite(value.score) &&
    Number.isFinite(value.maximumScore) &&
    Number.isFinite(value.timeTakenSeconds) &&
    Number.isFinite(Date.parse(value.submittedAt));
}

function compiledResults() {
  const candidates = [...readJson(resultStoreKey(), []), ...imported].filter(validResult);
  const byStudent = new Map();
  candidates.sort((a,b) => Date.parse(a.submittedAt) - Date.parse(b.submittedAt)).forEach((result) => {
    const id = normalizeStudentId(result.student.studentId);
    if (!byStudent.has(id)) byStudent.set(id, result);
  });
  return [...byStudent.values()].sort((a,b) =>
    (b.score - a.score) ||
    (a.timeTakenSeconds - b.timeTakenSeconds) ||
    (Date.parse(a.submittedAt) - Date.parse(b.submittedAt))
  );
}

function render() {
  const results = compiledResults();
  qs("#leaderboard-count").textContent = `${results.length} unique student result${results.length === 1 ? "" : "s"}`;
  const podium = qs("#podium"); podium.replaceChildren();
  results.slice(0,3).forEach((result,index) => {
    const card=document.createElement("article");card.className=`podium-card podium-card--${index+1}`;
    const rank=document.createElement("span");rank.className="podium-rank";rank.textContent=`#${index+1}`;
    const name=document.createElement("span");name.className="podium-name";name.textContent=result.student.fullName;
    const score=document.createElement("span");score.className="podium-score";score.textContent=`${result.score} pts`;
    card.append(rank,name,score);podium.appendChild(card);
  });
  const body=qs("#leaderboard-body");body.replaceChildren();
  if(!results.length){const row=body.insertRow();const cell=row.insertCell();cell.colSpan=9;cell.className="empty-state";cell.textContent="Import student result files to begin.";return;}
  results.forEach((result,index)=>{
    const row=body.insertRow();
    const rank=row.insertCell();const badge=document.createElement("span");badge.className="rank-badge";badge.textContent=index+1;rank.appendChild(badge);
    row.insertCell().textContent=result.student.fullName;
    row.insertCell().textContent=result.student.studentId;
    const score=row.insertCell();score.className="score-cell";score.textContent=`${result.score} / ${result.maximumScore}`;
    row.insertCell().textContent=result.correct;
    row.insertCell().textContent=result.incorrect;
    row.insertCell().textContent=result.unanswered;
    row.insertCell().textContent=formatDuration(result.timeTakenSeconds);
    row.insertCell().textContent=new Date(result.submittedAt).toLocaleString([], {dateStyle:"medium",timeStyle:"short"});
  });
}

async function importFiles(fileList) {
  const files=[...fileList];
  if(!files.length)return;
  let accepted=0,invalid=0,duplicates=0;
  const knownIds=new Set([...readJson(resultStoreKey(),[]),...imported].filter(validResult).map((r)=>r.resultId));
  for(const file of files){
    try{
      const result=JSON.parse(await file.text());
      if(!validResult(result)){invalid+=1;continue;}
      if(knownIds.has(result.resultId)){duplicates+=1;continue;}
      imported.push(result);knownIds.add(result.resultId);accepted+=1;
    }catch{invalid+=1;}
  }
  writeJson(importedStoreKey(),imported);
  qs("#import-status").textContent=`Imported ${accepted}; skipped ${duplicates} duplicate result file${duplicates===1?"":"s"} and ${invalid} invalid or wrong-version file${invalid===1?"":"s"}. Repeated student IDs are reduced to their earliest submission.`;
  if(invalid)showToast("Some files were not valid Stellar Quest results for this quiz version.","error");
  else if(accepted)showToast(`${accepted} result file${accepted===1?"":"s"} imported.`,"success");
  render();
}

qs("#result-files").addEventListener("change",(event)=>{importFiles(event.target.files);event.target.value="";});
const dropZone=qs("#drop-zone");
["dragenter","dragover"].forEach((type)=>dropZone.addEventListener(type,(event)=>{event.preventDefault();dropZone.classList.add("is-dragging");}));
["dragleave","drop"].forEach((type)=>dropZone.addEventListener(type,(event)=>{event.preventDefault();dropZone.classList.remove("is-dragging");}));
dropZone.addEventListener("drop",(event)=>importFiles(event.dataTransfer.files));
dropZone.addEventListener("keydown",(event)=>{if(event.key==="Enter"||event.key===" "){event.preventDefault();qs("#result-files").click();}});
dropZone.addEventListener("click",()=>qs("#result-files").click());

qs("#export-csv").addEventListener("click",()=>{
  const results=compiledResults();
  if(!results.length){showToast("Import at least one result before exporting.","error");return;}
  const rows=[["Rank","Name","Student ID","Email","Score","Maximum","Percentage","Correct","Incorrect","Unanswered","Time seconds","Started","Submitted","Auto submitted","Visibility changes","Result ID"]];
  results.forEach((result,index)=>rows.push([index+1,result.student.fullName,result.student.studentId,result.student.email||"",result.score,result.maximumScore,result.percentage,result.correct,result.incorrect,result.unanswered,result.timeTakenSeconds,result.startedAt,result.submittedAt,result.autoSubmitted,result.visibilityChangeCount,result.resultId]));
  downloadCsv(`stellar-quest-class-results-${new Date().toISOString().slice(0,10)}.csv`,rows);
});

qs("#clear-results").addEventListener("click",()=>{
  if(!confirm("Clear all locally stored and imported results from this browser? Download a CSV first if needed."))return;
  imported=[];localStorage.removeItem(importedStoreKey());localStorage.removeItem(resultStoreKey());qs("#import-status").textContent="Compiled results cleared from this browser.";render();
});

render();
