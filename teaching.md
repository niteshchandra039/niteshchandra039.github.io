---
layout: splash
title: "Teaching"
permalink: /teaching/
---

<style>
  @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap");

  :root {
    --bg: #f4f7fc;
    --surface: #ffffff;
    --surface-soft: #f6faff;
    --text: #1e2e45;
    --muted: #5e7188;
    --line: #d9e4f2;
    --brand: #1d4d99;
    --brand-soft: #e8f0ff;
    --teal: #2f857e;
    --teal-soft: #ebfbf8;
    --violet: #6b46c1;
    --violet-soft: #f6f0ff;
    --gold-soft: #fff9eb;
    --gold-line: #f1dda4;
    --radius: 12px;
    --shadow: 0 10px 24px rgba(14, 42, 84, 0.08);
  }

  .page-wrapper {
    font-family: "Manrope", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    color: var(--text);
    line-height: 1.65;
    font-size: 12px;
    max-width: 980px;
    margin: 0 auto;
    padding: 10px 0 30px;
    background:
      radial-gradient(circle at 10% 4%, rgba(29, 77, 153, 0.08), transparent 30%),
      radial-gradient(circle at 90% 12%, rgba(47, 133, 126, 0.08), transparent 28%);
  }

  .intro-box {
    background: linear-gradient(140deg, #f9fcff 0%, #edf4ff 100%);
    border: 1px solid #d4e2f6;
    border-left: 5px solid var(--brand);
    padding: 26px;
    border-radius: var(--radius);
    margin-bottom: 18px;
    box-shadow: var(--shadow);
  }

  .section-nav {
    position: sticky;
    top: 10px;
    z-index: 8;
    margin-bottom: 20px;
    background: rgba(255, 255, 255, 0.92);
    border: 1px solid var(--line);
    border-radius: 999px;
    padding: 8px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    justify-content: center;
    backdrop-filter: blur(6px);
    box-shadow: 0 8px 20px rgba(14, 42, 84, 0.07);
  }

  .quick-pill {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    padding: 8px 12px;
    font-size: 0.82em;
    font-weight: 700;
    letter-spacing: 0.02em;
    color: #26446f;
    border: 1px solid #c8d8ef;
    background: #f6faff;
    text-decoration: none;
    transition: all 0.2s ease;
  }

  .quick-pill:hover {
    text-decoration: none;
    color: #fff;
    background: var(--brand);
    border-color: var(--brand);
    transform: translateY(-1px);
  }

  .section-header {
    color: var(--brand);
    border-bottom: 2px solid #e9eff9;
    padding-bottom: 9px;
    margin-top: 38px;
    margin-bottom: 16px;
    font-size: clamp(1.35rem, 2.4vw, 1.75rem);
    line-height: 1.25;
  }

  .interactive-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .interactive-card {
    background: var(--surface);
    border: 1px solid var(--line);
    border-radius: var(--radius);
    margin-bottom: 16px;
    padding: 20px;
    box-shadow: 0 4px 10px rgba(14, 42, 84, 0.04);
    transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
  }

  .interactive-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 14px 24px rgba(14, 42, 84, 0.08);
    border-color: #c8d7ed;
  }

  .card-title {
    font-size: 1.17em;
    font-weight: 800;
    color: #172c47;
    margin-bottom: 12px;
    display: block;
  }

  .btn-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 7px 13px;
    margin: 4px 6px 4px 0;
    background: var(--brand-soft);
    color: var(--brand);
    text-decoration: none;
    border-radius: 8px;
    border: 1px solid #c7d7f1;
    font-size: 0.86em;
    font-weight: 700;
    transition: all 0.2s ease;
  }

  .btn-link:hover {
    background: var(--brand);
    color: #fff;
    border-color: var(--brand);
    text-decoration: none;
    transform: translateY(-1px);
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 15px;
    padding: 0;
    list-style: none;
  }

  .grid-card-tech {
    background: linear-gradient(180deg, #f2fcfa, #ffffff);
    border: 1px solid #d6ebe8;
    border-left: 4px solid var(--teal);
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 3px 8px rgba(14, 42, 84, 0.04);
    transition: transform 0.2s ease;
  }

  .grid-card-tech:hover {
    transform: translateX(4px);
  }

  .grid-card-mentor {
    background: linear-gradient(180deg, var(--violet-soft), #ffffff);
    border: 1px solid #e2d7f5;
    border-left: 4px solid var(--violet);
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 3px 8px rgba(14, 42, 84, 0.04);
  }

  details {
    background: var(--surface-soft);
    padding: 12px 15px;
    border-radius: 8px;
    border: 1px solid #dde8f7;
    margin-top: 10px;
  }

  summary {
    font-weight: 700;
    color: #345278;
    cursor: pointer;
    outline: none;
  }

  summary:hover {
    color: var(--brand);
  }

  .sub-list {
    margin-top: 15px;
    padding-left: 0;
    list-style: none;
  }

  .sub-list li {
    padding: 10px 0;
    border-bottom: 1px dashed #d7e3f2;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
  }

  .sub-list li:last-child {
    border-bottom: none;
  }

  .lecture-title {
    flex: 1 1 200px;
    font-weight: 600;
    color: #243a5c;
  }

  .tech-stack-box {
    background: linear-gradient(140deg, var(--teal-soft), #f3fffd);
    border: 1px solid #c8e9e5;
    padding: 16px;
    border-radius: 10px;
    margin-top: 25px;
    color: #1f5c56;
  }

  .contact-note {
    background: linear-gradient(140deg, var(--gold-soft), #fffef6);
    border: 1px solid var(--gold-line);
    padding: 22px;
    border-radius: 10px;
    text-align: center;
    margin-top: 40px;
    font-size: 1.05em;
    color: #694e1f;
  }

  .sim-course-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 12px;
    margin-top: 10px;
  }

  .sim-course-box {
    background: #fbfdff;
    border: 1px solid #d8e4f3;
    border-left: 4px solid var(--brand);
    border-radius: 10px;
    padding: 14px;
  }

  .course-pill {
    display: inline-block;
    padding: 3px 10px;
    margin-bottom: 8px;
    border-radius: 999px;
    font-size: 0.75em;
    font-weight: 700;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    background: #eaf2ff;
    color: var(--brand);
    border: 1px solid #c8daf8;
  }

  .update-tag {
    display: inline-block;
    margin-bottom: 10px;
    padding: 3px 9px;
    border-radius: 999px;
    border: 1px solid #d6e2f4;
    background: #f4f8ff;
    color: #4a6386;
    font-size: 0.73em;
    font-weight: 700;
    letter-spacing: 0.02em;
  }

  .group-divider {
    margin-top: 8px;
    padding-top: 10px;
    border-top: 1px solid #cfdbec;
    border-bottom: none !important;
    font-size: 0.78em;
    font-weight: 800;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #4f6787;
  }

  a:focus-visible,
  button:focus-visible,
  summary:focus-visible {
    outline: 2px solid #ff9d2a;
    outline-offset: 2px;
    border-radius: 6px;
  }

  @media (max-width: 720px) {
    .page-wrapper {
      font-size: 15px;
    }

    .intro-box {
      padding: 20px;
      margin-bottom: 14px;
    }

    .section-nav {
      justify-content: flex-start;
      overflow-x: auto;
      flex-wrap: nowrap;
      padding: 8px;
    }

    .quick-pill {
      white-space: nowrap;
      font-size: 0.8em;
    }

    .interactive-card,
    .grid-card-mentor {
      padding: 16px;
    }

    .btn-link {
      min-height: 38px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      transition: none !important;
      animation: none !important;
      scroll-behavior: auto !important;
    }
  }
</style>

<div class="page__content page-wrapper">

  <div class="intro-box">
    <h1 style="margin-top: 0; border-bottom: none;">Teaching & Student Resources</h1>
    <p style="margin-bottom: 0;">
      As an Assistant Professor at <strong>UPES, Dehradun</strong>, I actively teach and mentor undergraduate and postgraduate students. 
      My teaching philosophy emphasizes clarity, experimentation, and the integration of computation into modern physics education.
    </p>
  </div>

  <nav class="section-nav" aria-label="Teaching quick navigation">
    <a class="quick-pill" href="#courses-resources">Courses & Resources</a>
    <a class="quick-pill" href="#simulations">AI Simulations</a>
    <a class="quick-pill" href="#courses-taught">Courses Taught</a>
    <a class="quick-pill" href="#mentorship">Mentorship</a>
  </nav>

  <h2 id="courses-resources" class="section-header">📘 Courses & Resources</h2>

  <h2 id="simulations" class="section-header">🤖 AI & Interactive Simulations in Teaching</h2>
  <ul class="interactive-list">
    <li class="interactive-card">
      <span class="card-title">Course-wise AI Simulation Library</span>
      <span class="update-tag">Last updated: May 2026</span>
      <p style="margin-bottom: 12px; color: #4a5568; font-size: 0.95em;">
        Simulations are organized below by course/module for quicker access during lecture and lab sessions.
      </p>

      <div class="sim-course-grid">
        <div class="sim-course-box">
          <span class="course-pill">PHYS4022P · Fundamentals of Astrophysics</span>
          <ul class="sub-list" style="margin-top: 8px;">
            <li>
              <span class="lecture-title">Simulation Hub (all Unit modules)</span>
              <a href="/resources/AI_simulations/phys4022p_llm_sim_hub.html" class="btn-link" target="_blank">Open</a>
            </li>
            <li>
              <span class="lecture-title">Unit 1: N-Body Orbits</span>
              <a href="/resources/AI_simulations/simple_nbody_orbits.html" class="btn-link" target="_blank">Open Lab</a>
            </li>
            <li>
              <span class="lecture-title">Unit 2: Blackbody Radiation</span>
              <a href="/resources/AI_simulations/blackbody_radiation_ai_lab.html" class="btn-link" target="_blank">Open Lab</a>
              <a href="/resources/AI_simulations/blackbody_radiation_ai_core.html" class="btn-link" target="_blank">Open Core</a>
            </li>
            <li>
              <span class="lecture-title">Unit 3: H-R Diagram</span>
              <a href="/resources/AI_simulations/hr_diagram_socratic_lab.html" class="btn-link" target="_blank">Open Lab</a>
              <a href="/resources/AI_simulations/hr_diagram_socratic_core.html" class="btn-link" target="_blank">Open Core</a>
            </li>
            <li>
              <span class="lecture-title">Unit 4: Optical Depth & Dust</span>
              <a href="/resources/AI_simulations/optical_depth_ai_lab.html" class="btn-link" target="_blank">Open Lab</a>
              <a href="/resources/AI_simulations/optical_depth_ai_core.html" class="btn-link" target="_blank">Open Core</a>
            </li>
            <li>
              <span class="lecture-title">Unit 5: Hubble Law & Cosmology</span>
              <a href="/resources/AI_simulations/hubble_law_debate_lab.html" class="btn-link" target="_blank">Open Lab</a>
              <a href="/resources/AI_simulations/hubble_law_debate_core.html" class="btn-link" target="_blank">Open Core</a>
            </li>
            <li>
              <span class="lecture-title">Motion Gravity Lab (Bridge Activity)</span>
              <a href="/resources/AI_simulations/motion_gravity_lab.html" class="btn-link" target="_blank">Open Lab</a>
            </li>
          </ul>
        </div>

        <div class="sim-course-box">
          <span class="course-pill">B.Sc. Physics · Semiconductor / Solid-State Concepts</span>
          <ul class="sub-list" style="margin-top: 8px;">
            <li>
              <span class="lecture-title">PN Junction Diode</span>
              <a href="/resources/AI_simulations/pn-diode.html" class="btn-link" target="_blank">Open</a>
            </li>
            <li>
              <span class="lecture-title">Hall Effect</span>
              <a href="/resources/AI_simulations/hall-effect.html" class="btn-link" target="_blank">Open</a>
            </li>
            <li>
              <span class="lecture-title">Quantum Hall Effect</span>
              <a href="/resources/AI_simulations/quantum-hall-effect.html" class="btn-link" target="_blank">Open</a>
            </li>
            <li>
              <span class="lecture-title">Gravity Module (General Interactive Physics)</span>
              <a href="/resources/AI_simulations/gravity_module.html" class="btn-link" target="_blank">Open</a>
            </li>
          </ul>
        </div>

        <div class="sim-course-box">
          <span class="course-pill">Computational Astrophysics (M.Sc.) · Visual Explainers</span>
          <ul class="sub-list" style="margin-top: 8px;">
            <li>
              <span class="lecture-title">Lagrangian vs Eulerian Animation</span>
              <a href="/resources/computational_astrophysics/lag_vs_eul.html" class="btn-link" target="_blank">Open</a>
            </li>
            <li>
              <span class="lecture-title">Supernova Shockwave Animation</span>
              <a href="/resources/computational_astrophysics/supernova_shockwave.html" class="btn-link" target="_blank">Open</a>
            </li>
            <li>
              <span class="lecture-title">Supernova Shockwave Animation 1</span>
              <a href="/resources/computational_astrophysics/shockwave_1.html" class="btn-link" target="_blank">Open</a>
            </li>
          </ul>
        </div>
      </div>

      <p style="font-size: 0.85em; color: #718096; margin-top: 10px; margin-bottom: 0;">
        <em>*These AI-powered and interactive simulations are grouped course-wise to support concept-first teaching and guided lab activities.*</em>
      </p>
    </li>
  </ul>

  <ul class="interactive-list">
    <li class="interactive-card">
      <span class="card-title">Computational Astrophysics (M.Sc.)</span>
      <span class="update-tag">Notebook index refreshed: May 2026</span>
      <details>
        <summary>View Lecture Notebooks & Materials</summary>
        <ul class="sub-list">
          <li class="group-divider">Foundations · Lectures 1-7</li>
          <li>
            <span class="lecture-title">Lecture 1</span>
            <div>
              <a href="https://nbviewer.org/github/niteshchandra039/niteshchandra039.github.io/blob/main/resources/computational_astrophysics/Computational%20Astrophysics%20-%20Lect%201.ipynb" class="btn-link" target="_blank">View</a>
              <a href="/resources/computational_astrophysics/Computational%20Astrophysics%20-%20Lect%201.ipynb" class="btn-link" target="_blank">Download</a>
            </div>
          </li>
          <li>
            <span class="lecture-title">Lecture 2: Data Sorting Algorithms</span>
            <div>
              <a href="https://nbviewer.org/github/niteshchandra039/niteshchandra039.github.io/blob/main/resources/computational_astrophysics/Computational%20Astrophysics%20Lecture%202_%20Data%20Sorting%20Algorithms%20in%20Python.ipynb" class="btn-link" target="_blank">View</a>
              <a href="/resources/computational_astrophysics/Computational%20Astrophysics%20Lecture%202_%20Data%20Sorting%20Algorithms%20in%20Python.ipynb" class="btn-link" target="_blank">Download</a>
            </div>
          </li>
          <li>
            <span class="lecture-title">Lecture 3</span>
            <div>
              <a href="https://nbviewer.org/github/niteshchandra039/niteshchandra039.github.io/blob/main/resources/computational_astrophysics/Computational%20Astrophysics%20-%20Lecture%203.ipynb" class="btn-link" target="_blank">View</a>
              <a href="/resources/computational_astrophysics/Computational%20Astrophysics%20-%20Lecture%203.ipynb" class="btn-link" target="_blank">Download</a>
            </div>
          </li>
          <li>
            <span class="lecture-title">Lecture 4 & 5</span>
            <div>
              <a href="https://nbviewer.org/github/niteshchandra039/niteshchandra039.github.io/blob/main/resources/computational_astrophysics/Computational%20Astrophysics%20-%20Lecture%204%20%26%205.ipynb" class="btn-link" target="_blank">View</a>
              <a href="/resources/computational_astrophysics/Computational%20Astrophysics%20-%20Lecture%204%20%26%205.ipynb" class="btn-link" target="_blank">Download</a>
            </div>
          </li>
          <li>
            <span class="lecture-title">Lecture 6</span>
            <div>
              <a href="https://nbviewer.org/github/niteshchandra039/niteshchandra039.github.io/blob/main/resources/computational_astrophysics/Computational%20Astrophysics%20Lecture%206.ipynb" class="btn-link" target="_blank">View</a>
              <a href="/resources/computational_astrophysics/Computational%20Astrophysics%20Lecture%206.ipynb" class="btn-link" target="_blank">Download</a>
            </div>
          </li>
          <li>
            <span class="lecture-title">Lecture 7</span>
            <div>
              <a href="https://nbviewer.org/github/niteshchandra039/niteshchandra039.github.io/blob/main/resources/computational_astrophysics/Computational%20Astrophysics%20Lecture%207.ipynb" class="btn-link" target="_blank">View</a>
              <a href="/resources/computational_astrophysics/Computational%20Astrophysics%20Lecture%207.ipynb" class="btn-link" target="_blank">Download</a>
            </div>
          </li>
          <li class="group-divider">Methods And Modeling · Lectures 11-17</li>
          <li>
            <span class="lecture-title">Lecture 11: Error Analysis</span>
            <div>
              <a href="https://nbviewer.org/github/niteshchandra039/niteshchandra039.github.io/blob/main/resources/computational_astrophysics/Computational%20Astrophysics%20Lect%2011_%20Error%20Analysis.ipynb" class="btn-link" target="_blank">View</a>
              <a href="/resources/computational_astrophysics/Computational%20Astrophysics%20Lect%2011_%20Error%20Analysis.ipynb" class="btn-link" target="_blank">Download</a>
            </div>
          </li>
          <li>
            <span class="lecture-title">Lecture 13: ODEs and Euler's Method</span>
            <div>
              <a href="https://nbviewer.org/github/niteshchandra039/niteshchandra039.github.io/blob/main/resources/computational_astrophysics/Computational%20Astrophysics%20Lect%2013_%20ODEs%20and%20Euler_s%20Method%20Lecture.ipynb" class="btn-link" target="_blank">View</a>
              <a href="/resources/computational_astrophysics/Computational%20Astrophysics%20Lect%2013_%20ODEs%20and%20Euler_s%20Method%20Lecture.ipynb" class="btn-link" target="_blank">Download</a>
            </div>
          </li>
          <li>
            <span class="lecture-title">Lecture 17: PDEs</span>
            <div>
              <a href="https://nbviewer.org/github/niteshchandra039/niteshchandra039.github.io/blob/main/resources/computational_astrophysics/Computational_Astrophysics_lecture_17_PDE_.ipynb" class="btn-link" target="_blank">View</a>
              <a href="/resources/computational_astrophysics/Computational_Astrophysics_lecture_17_PDE_.ipynb" class="btn-link" target="_blank">Download</a>
            </div>
          </li>
          <li class="group-divider">Advanced Applications · Lectures 19-26</li>
          <li>
            <span class="lecture-title">Lecture 19</span>
            <div>
              <a href="https://nbviewer.org/github/niteshchandra039/niteshchandra039.github.io/blob/main/resources/computational_astrophysics/Computational_Astrophysics_lecture_19.ipynb" class="btn-link" target="_blank">View</a>
              <a href="/resources/computational_astrophysics/Computational_Astrophysics_lecture_19.ipynb" class="btn-link" target="_blank">Download</a>
            </div>
          </li>
          <li>
            <span class="lecture-title">Lecture 20</span>
            <div>
              <a href="https://nbviewer.org/github/niteshchandra039/niteshchandra039.github.io/blob/main/resources/computational_astrophysics/Computational_Astrophysics_lecture_20.ipynb" class="btn-link" target="_blank">View</a>
              <a href="/resources/computational_astrophysics/Computational_Astrophysics_lecture_20.ipynb" class="btn-link" target="_blank">Download</a>
            </div>
          </li>
          <li>
            <span class="lecture-title">Lecture 21: Curve Fitting</span>
            <div>
              <a href="https://nbviewer.org/github/niteshchandra039/niteshchandra039.github.io/blob/main/resources/computational_astrophysics/Computational_Astrophysics_lecture_21.ipynb" class="btn-link" target="_blank">View</a>
              <a href="/resources/computational_astrophysics/Computational_Astrophysics_lecture_21.ipynb" class="btn-link" target="_blank">Download</a>
            </div>
          </li>
          <li>
            <span class="lecture-title">Lecture 22: Fourier Transforms</span>
            <div>
              <a href="https://nbviewer.org/github/niteshchandra039/niteshchandra039.github.io/blob/main/resources/computational_astrophysics/Computational_Astrophysics_lecture_22.ipynb" class="btn-link" target="_blank">View</a>
              <a href="/resources/computational_astrophysics/Computational_Astrophysics_lecture_22.ipynb" class="btn-link" target="_blank">Download</a>
            </div>
          </li>
          <li>
            <span class="lecture-title">Lecture 23: 2 Body Problem</span>
            <div>
              <a href="https://nbviewer.org/github/niteshchandra039/niteshchandra039.github.io/blob/main/resources/computational_astrophysics/Computational_Astrophysics_lecture_23.ipynb" class="btn-link" target="_blank">View</a>
              <a href="/resources/computational_astrophysics/Computational_Astrophysics_lecture_23.ipynb" class="btn-link" target="_blank">Download</a>
            </div>
          </li>
          <li>
            <span class="lecture-title">Lecture 24: N Body Problem</span>
            <div>
              <a href="https://nbviewer.org/github/niteshchandra039/niteshchandra039.github.io/blob/main/resources/computational_astrophysics/Computational_Astrophysics_lecture_24.ipynb" class="btn-link" target="_blank">View</a>
              <a href="/resources/computational_astrophysics/Computational_Astrophysics_lecture_24.ipynb" class="btn-link" target="_blank">Download</a>
            </div>
          </li>
          <li>
            <span class="lecture-title">Lecture 25A: Monte Carlo Methods</span>
            <div>
              <a href="https://nbviewer.org/github/niteshchandra039/niteshchandra039.github.io/blob/main/resources/computational_astrophysics/Computational_Astrophysics_lecture_25A.ipynb" class="btn-link" target="_blank">View</a>
              <a href="/resources/computational_astrophysics/Computational_Astrophysics_lecture_25A.ipynb" class="btn-link" target="_blank">Download</a>
            </div>
          </li>
          <li>
            <span class="lecture-title">Lecture 25B: Monte Carlo Methods</span>
            <div>
              <a href="https://nbviewer.org/github/niteshchandra039/niteshchandra039.github.io/blob/main/resources/computational_astrophysics/Computational_Astrophysics_lecture_25.ipynb" class="btn-link" target="_blank">View</a>
              <a href="/resources/computational_astrophysics/Computational_Astrophysics_lecture_25.ipynb" class="btn-link" target="_blank">Download</a>
            </div>
          </li>
          <li>
            <span class="lecture-title">Lecture 26: Shockwave Propagation</span>
            <div>
              <a href="https://nbviewer.org/github/niteshchandra039/niteshchandra039.github.io/blob/main/resources/computational_astrophysics/Computational_Astrophysics_lecture_26.ipynb" class="btn-link" target="_blank">View</a>
              <a href="/resources/computational_astrophysics/Computational_Astrophysics_lecture_26.ipynb" class="btn-link" target="_blank">Download</a>
            </div>
          </li>
          <li class="group-divider">Visual Explainers</li>
          <li>
            <span class="lecture-title">Lagrangian vs Eulerian </span>
            <div>
              <a href="/resources/computational_astrophysics/lag_vs_eul.html" class="btn-link" target="_blank">Open</a>
            </div>
          </li>

          <li>
            <span class="lecture-title">Supernova Shockwave Animation</span>
            <div>
              <a href="/resources/computational_astrophysics/supernova_shockwave.html" class="btn-link" target="_blank">Open</a>
            </div>
          </li>

          <li>
            <span class="lecture-title">Supernova Shockwave Animation 1 </span>
            <div>
              <a href="/resources/computational_astrophysics/shockwave_1.html" class="btn-link" target="_blank">Open</a>
            </div>
          </li>

        



        </ul>
      </details>
    </li>

    <li class="interactive-card">
      <span class="card-title">Computational Techniques (B.Sc. Physics)</span>
      <span class="update-tag">Last updated: May 2026</span>
      <div>
        <a href="/resources/computational_techniques/python_notes.pdf" class="btn-link" target="_blank">Open PDF</a>
        <a href="/resources/computational_techniques/Python_learning/python_notes_updated.ipynb" class="btn-link" target="_blank">Open Notebook</a>
        <a href="https://colab.research.google.com/drive/1W0J-ll0QylMYLvjRHqHGANBbj2ApXnIr?usp=sharing" class="btn-link" target="_blank">Open Colab</a>
      </div>
      <p style="font-size: 0.85em; color: #718096; margin-top: 10px; margin-bottom: 0;">
        <em>*Use ctrl+s to save and open Notebooks in Jupyter Lab or VS Code.*</em>
      </p>
    </li>

    <li class="interactive-card">
      <span class="card-title">Laboratory & Specialized Courses</span>
      <span class="update-tag">Last updated: May 2026</span>
      <div style="display: flex; flex-direction: column; gap: 10px;">
        <div>
          <strong>Intro to Computational Physics Lab (Int. B.Sc. + M.Sc.):</strong>
          <a href="/resources/computational_physics_lab/lab_manual_1.pdf" class="btn-link" target="_blank">Open PDF</a>
        </div>
        <div>
          <strong>Learning LaTeX:</strong>
          <a href="/resources/LearnLaTeX.pdf" class="btn-link" target="_blank">Open PDF</a>
        </div>
        <div>
          <strong>Computational Physics (M.Sc. Level):</strong>
          <a href="/resources/computational_physics/Introduction_to_computational_physics_23_May.pdf" class="btn-link" target="_blank">Open PDF</a>
        </div>
        <div>
          <strong>Observational Astronomy Lab (B.Sc. Physics):</strong>
          <a href="/resources/observational_astronomy_lab/Observational_Astronomy_Handbook.pdf" class="btn-link" target="_blank">Open PDF</a>
        </div>
      </div>
    </li>

    <li class="interactive-card">
      <span class="card-title">Fundamentals of Astronomy (B.Sc. Physics)</span>
      <span class="update-tag">Last updated: May 2026</span>
      <div>
        <a href="/resources/fundamentals_of_astronomy/Astronomy_Notes.pdf" class="btn-link" target="_blank">Open Notes</a>
        <a href="/resources/fundamentals_of_astronomy/assignment.pdf" class="btn-link" target="_blank">Open Problem Set</a>
      </div>
    </li>
  </ul>

  <div class="tech-stack-box">
    💡 <strong>Key Topics Covered:</strong> Numerical integration, solving differential equations, Monte Carlo simulations, and the use of <strong>Linux, Fortran, C++, Gnuplot</strong>, and <strong>LaTeX</strong>.
  </div>

  <h2 id="courses-taught" class="section-header">📚 Courses Taught</h2>
  <ul class="grid-container">
    <li class="grid-card-tech"><strong>Python Programming:</strong> Data structures, logic building, and scientific computing</li>
    <li class="grid-card-tech"><strong>Fortran Programming:</strong> Fundamentals and numerical applications</li>
    <li class="grid-card-tech"><strong>C++ Programming:</strong> OOP and scientific modeling</li>
    <li class="grid-card-tech"><strong>LaTeX for Science:</strong> Scientific writing and document preparation</li>
    <li class="grid-card-tech"><strong>Computational Physics:</strong> Numerical techniques in physics simulations</li>
    <li class="grid-card-tech"><strong>Machine Learning in Astronomy:</strong> Hands-on projects using real datasets</li>
    <li class="grid-card-tech"><strong>Astrophysics:</strong> Stellar evolution, variable stars, cosmology</li>
    <li class="grid-card-tech"><strong>Astronomy Laboratory:</strong> Observational techniques and simulations</li>
    <li class="grid-card-tech"><strong>Planetary Science:</strong> Planet formation and solar system dynamics</li>
    <li class="grid-card-tech"><strong>General Physics Labs:</strong> Mechanics, optics, electromagnetism experiments</li>
  </ul>

  <h2 id="mentorship" class="section-header">👨‍🏫 Mentorship & Dissertation Guidance</h2>
  
  <div class="grid-container" style="margin-bottom: 20px;">
    <div class="grid-card-mentor">
      <h3 style="margin-top: 0; color: #44337a; font-size: 1.1em;">Research Mentorship</h3>
      <p style="margin-bottom: 10px; font-size: 0.9em; color: #553c9a;">Current projects with B.Sc. and M.Sc. students:</p>
      <ul style="padding-left: 20px; margin-bottom: 0;">
        <li>RR Lyrae and Cepheid variable star classification</li>
        <li>Machine learning applications in astronomical time series</li>
        <li>Photometric data analysis using Python & neural networks</li>
      </ul>
    </div>
    
    <div class="grid-card-mentor">
      <h3 style="margin-top: 0; color: #44337a; font-size: 1.1em;">Dissertation Guidance</h3>
      <ul style="padding-left: 20px; margin-bottom: 0;">
        <li style="margin-bottom: 8px;"><strong>Madhumita Singh:</strong> Timing and Spectral Analysis of Low Mass X-ray Binaries</li>
        <li style="margin-bottom: 8px;"><strong>Aniket Prakash:</strong> Theoretical Modelling of Variable stars using MESA</li>
        <li style="margin-bottom: 8px;"><strong>Shagun Thakur:</strong> Analysis of variable stars in the Gaia DR3 Era</li>
        <!-- <li style="margin-bottom: 8px;"><strong>Atharva Bhatele:</strong> Multiwavelength study of RR Lyrae stars</li> -->
        <li style="margin-bottom: 8px;"><strong>Divya Krishna:</strong> Precision Distance Determination of the SMC via Multiphase P-L Relations using the LMC as a Calibrator Galaxy </li>
        <li style="margin-bottom: 8px;"><strong>Rushil Soni:</strong> Age and Metallicity of the open cluster Berkely 6 </li>
        <li style="margin-bottom: 8px;"><strong>Atharva Bhatele:</strong> Multiwavelength study of RR Lyrae stars</li>
        <li><strong>Neelesh:</strong> Exoplanet parameter extraction using ExoFAST</li>
      </ul>
    </div>
  </div>

  <div class="contact-note">
    🚀 If you’re a student interested in working on a project or thesis related to astrophysics, computation, or data science, feel free to get in touch!
  </div>

</div>