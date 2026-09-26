<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#071426">
  <meta name="description" content="A university-level quiz on stellar structure and evolution.">
  <title>Stellar Quest | Structure &amp; Evolution Challenge</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&amp;family=Space+Grotesk:wght@500;600;700&amp;display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/katex.min.css" crossorigin="anonymous">
  <link rel="stylesheet" href="css/styles.css">
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/katex.min.js" crossorigin="anonymous"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/contrib/auto-render.min.js" crossorigin="anonymous"></script>
</head>
<body class="student-page">
  <a class="skip-link" href="#main-content">Skip to main content</a>
  <div class="starfield" aria-hidden="true"></div>
  <header class="topbar">
    <a class="brand" href="index.html" aria-label="Stellar Quest home">
      <span class="brand__mark" aria-hidden="true">✦</span>
      <span><strong>Stellar Quest</strong><small>Structure &amp; Evolution Challenge</small></span>
    </a>
    <nav aria-label="Primary navigation"><a href="leaderboard.html">Compile results</a></nav>
  </header>

  <main id="main-content" class="page-shell">
    <section id="welcome-view" class="hero-grid">
      <div class="hero-copy">
        <p class="eyebrow">University astrophysics challenge</p>
        <h1>Journey from stellar cores to compact remnants.</h1>
        <p class="hero-copy__lead">Twenty randomized questions. Thirty minutes. One rigorous test of how stars balance, shine, evolve, and die.</p>
        <div class="feature-row" aria-label="Quiz summary">
          <div><strong id="intro-question-count">20</strong><span>questions</span></div>
          <div><strong id="intro-duration">30</strong><span>minutes</span></div>
          <div><strong id="intro-score">80</strong><span>maximum score</span></div>
        </div>
        <div class="orbit-visual" aria-hidden="true"><div class="orbit orbit--one"><span></span></div><div class="orbit orbit--two"><span></span></div><div class="star-core"></div></div>
      </div>

      <div class="glass-card registration-card">
        <div class="card-heading"><span class="step-badge">01</span><div><p class="eyebrow">Before launch</p><h2>Student details</h2></div></div>
        <form id="registration-form" novalidate>
          <label for="full-name">Full name <span aria-hidden="true">*</span></label>
          <input id="full-name" name="fullName" type="text" maxlength="100" autocomplete="name" required placeholder="e.g. Aditi Sharma">
          <label for="student-id">University roll number / Student ID <span aria-hidden="true">*</span></label>
          <input id="student-id" name="studentId" type="text" maxlength="50" autocomplete="off" required placeholder="e.g. SAP12345678">
          <label for="email">Email <span class="muted">(optional)</span></label>
          <input id="email" name="email" type="email" maxlength="150" autocomplete="email" placeholder="student@example.edu">
          <label class="consent-row" for="honour-code"><input id="honour-code" type="checkbox" required><span>I will complete this challenge independently.</span></label>
          <p id="form-error" class="form-error" role="alert"></p>
          <button id="start-button" class="button button--primary button--wide" type="submit">Begin challenge <span aria-hidden="true">→</span></button>
        </form>
        <p class="privacy-note">This edition has no server or account. Your attempt is stored only in this browser. Use the result download after submission to send the result to your instructor.</p>
      </div>
    </section>

    <section id="quiz-view" class="quiz-layout hidden" aria-live="polite">
      <aside class="quiz-sidebar glass-card" aria-label="Quiz navigation">
        <div class="timer-card"><span>Time remaining</span><strong id="countdown">30:00</strong><div class="timer-track"><span id="timer-progress"></span></div></div>
        <div class="student-chip"><span class="avatar" id="student-initials">SQ</span><span><strong id="student-display-name">Student</strong><small id="student-display-id"></small></span></div>
        <div class="palette-heading"><h2>Question map</h2><button id="palette-toggle" class="text-button" type="button" aria-expanded="true">Hide</button></div>
        <div id="question-palette" class="question-palette" aria-label="Question navigation"></div>
        <div class="legend"><span><i class="legend__dot legend__dot--current"></i>Current</span><span><i class="legend__dot legend__dot--answered"></i>Answered</span><span><i class="legend__dot legend__dot--flagged"></i>Flagged</span></div>
        <button id="submit-button" class="button button--danger button--wide" type="button">Submit quiz</button>
      </aside>

      <div class="question-panel glass-card">
        <div class="question-topline"><div><span id="question-number" class="question-index">Question 1 of 20</span><span id="question-topic" class="topic-pill">Stellar structure</span></div><button id="flag-button" class="flag-button" type="button" aria-pressed="false"><span aria-hidden="true">⚑</span> Mark for review</button></div>
        <div class="overall-progress" aria-label="Quiz progress"><span id="quiz-progress"></span></div>
        <div id="question-content" class="question-content" tabindex="-1">
          <h2 id="question-stem">Loading question…</h2>
          <div id="question-figure"></div>
          <fieldset id="options-list" class="options-list"><legend class="sr-only">Choose one answer</legend></fieldset>
        </div>
        <div class="question-actions"><button id="previous-button" class="button button--secondary" type="button">← Previous</button><span id="save-status" class="save-status" role="status">Saved in this browser</span><button id="next-button" class="button button--primary" type="button">Next →</button></div>
      </div>
    </section>

    <section id="result-view" class="result-shell hidden">
      <div class="glass-card result-card">
        <div class="result-star" aria-hidden="true">✦</div><p class="eyebrow">Challenge complete</p><h1 id="result-title">Results recorded</h1><p id="performance-message" class="result-message"></p>
        <div class="score-display"><strong id="result-score">—</strong><span id="result-maximum">/ 80</span></div>
        <div class="result-stats"><div><span>Percentage</span><strong id="result-percentage">—</strong></div><div><span>Correct</span><strong id="result-correct">—</strong></div><div><span>Incorrect</span><strong id="result-incorrect">—</strong></div><div><span>Unanswered</span><strong id="result-unanswered">—</strong></div><div><span>Time taken</span><strong id="result-time">—</strong></div><div><span>Visibility changes</span><strong id="result-visibility">—</strong></div></div>
        <div id="answer-review" class="answer-review hidden"></div>
        <div class="result-actions"><button id="download-result" class="button button--primary" type="button">Download result file</button><a class="button button--secondary" href="leaderboard.html">Open result compiler</a><button id="new-student" class="button button--ghost" type="button">New student</button></div>
        <p class="privacy-note">Give the downloaded JSON file to the instructor. It contains your submitted answers and score, but no answer key.</p>
      </div>
    </section>
  </main>

  <dialog id="submit-dialog" class="dialog-card"><form method="dialog"><div class="dialog-icon" aria-hidden="true">✓</div><h2>Submit your quiz?</h2><p id="submit-summary">Answers cannot be changed afterward.</p><div class="dialog-actions"><button class="button button--secondary" value="cancel">Keep reviewing</button><button class="button button--danger" value="confirm">Submit final answers</button></div></form></dialog>
  <div id="toast-region" class="toast-region" aria-live="polite"></div>
  <noscript><div class="noscript">JavaScript is required to run Stellar Quest.</div></noscript>
  <script type="module" src="js/quiz.js"></script>
</body>
</html>
