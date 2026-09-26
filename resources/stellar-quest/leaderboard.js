/**
 * Change quiz behaviour here. Increment quizVersion whenever you want every
 * student ID to receive a newly generated assignment and a fresh attempt.
 */
export const QUIZ_CONFIG = Object.freeze({
  title: "Stellar Quest: Structure & Evolution Challenge",
  quizVersion: "2026.1",
  durationMinutes: 30,
  totalQuestions: 20,
  difficultyCounts: Object.freeze({ basic: 4, intermediate: 10, advanced: 6 }),
  marksCorrect: 4,
  marksIncorrect: -1,
  marksUnanswered: 0,
  allowRetry: false,
  showCorrectAnswersAfterSubmission: false,
  automaticallyDownloadResult: false,
  storagePrefix: "stellarQuest"
});
