---
layout: splash
title: "Teaching Copy"
permalink: /teaching/
---

<style>
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Manrope:wght@400;500;600;700;800&display=swap');
  

  :root {
    --bg: #f6f8fc;
    --surface: #ffffff;
    --surface-soft: #eef3fb;
    --text: #1d2a3d;
    --muted: #5f6f84;
    --line: #d7e1ee;
    --brand: #10448f;
    --brand-2: #0f766e;
    --accent: #da8f1d;
    --radius: 10px;
    --shadow: 0 10px 25px rgba(15, 39, 73, 0.08);
  }

  .page-wrapper {
    max-width: 1120px;
    margin: 0 auto;
    padding: 14px 0 30px;
    font-family: "Manrope", "Segoe UI", sans-serif;
    color: var(--text);
    font-size: 14px;
    line-height: 1.66;
  }

  .hero {
    position: relative;
    overflow: hidden;
    border-radius: 22px;
    border: 1px solid #c9d8ea;
    background:
      radial-gradient(circle at 12% 12%, rgba(16, 68, 143, 0.16), transparent 42%),
      radial-gradient(circle at 88% 78%, rgba(218, 143, 29, 0.22), transparent 38%),
      linear-gradient(140deg, #ffffff, #edf3fb);
    padding: 22px;
    box-shadow: var(--shadow);
  }

  .brand-kicker {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 12px;
    border-radius: 999px;
    border: 1px solid #c4d8f1;
    color: #1f4f8b;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    background: rgba(16, 68, 143, 0.07);
  }

  .hero h1 {
    font-family: "DM Serif Display", Georgia, serif;
    font-size: clamp(1.5rem, 3.6vw, 2rem);
    line-height: 1.15;
    margin: 12px 0 8px;
    color: #10253f;
    border-bottom: none;
  }

  .hero p {
    margin: 0;
    max-width: 860px;
    color: #344965;
    font-size: 1rem;
  }
  .hero-grid {
    margin-top: 18px;
    display: grid;
    grid-template-columns: 1.6fr 1fr;
    gap: 14px;
  }

  .hero-card {
    border: 1px solid #d4deec;
    background: var(--surface);
    border-radius: 10px;
    padding: 14px;
  }

  .hero-card h3 {
    margin: 0 0 8px;
    font-size: 0.95rem;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--brand);
  }

  .quick-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .btn-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 13px;
    border-radius: 999px;
    border: 1px solid #cad8eb;
    color: #18457d;
    font-weight: 700;
    font-size: 0.86rem;
    text-decoration: none;
    background: #f5f9ff;
    transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
  }

  .btn-link:hover {
    text-decoration: none;
    background: #0f4d9d;
    color: #fff;
    transform: translateY(-1px);
    box-shadow: 0 8px 15px rgba(16, 68, 143, 0.24);
  }

  .btn-link.secondary {
    background: #f8f3e8;
    border-color: #efd7ad;
    color: #815619;
  }

  .sticky-nav {
    position: sticky;
    top: 8px;
    z-index: 20;
    margin: 16px 0;
    border: 1px solid var(--line);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.92);
    backdrop-filter: blur(8px);
    box-shadow: 0 8px 18px rgba(13, 36, 71, 0.08);
    overflow-x: auto;
  }

  .sticky-nav ul {
    list-style: none;
    margin: 0;
    padding: 8px;
    display: flex;
    gap: 8px;
    min-width: max-content;
  }

  .sticky-nav a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 8px 12px;
    border-radius: 999px;
    text-decoration: none;
    color: #284362;
    font-size: 0.84rem;
    font-weight: 700;
  }

  .sticky-nav a:hover,
  .sticky-nav a.active {
    background: rgba(16, 68, 143, 0.11);
    color: #0f4d9d;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
    gap: 10px;
    margin-top: 14px;
  }

  .stat {
    border-radius: 12px;
    border: 1px solid #d5e1f1;
    background: var(--surface);
    padding: 10px 12px;
  }

  .stat b {
    display: block;
    font-size: 1.35rem;
    color: #123e7a;
    line-height: 1.1;
  }

  .stat span {
    color: var(--muted);
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  .section {
    margin-top: 26px;
    border-radius: 10px;
    border: 1px solid var(--line);
    background: var(--surface);
    padding: 20px;
    box-shadow: 0 6px 18px rgba(16, 42, 80, 0.05);
  }

  .section h2 {
    margin: 0 0 10px;
    font-family: "DM Serif Display", Georgia, serif;
    font-size: clamp(1.45rem, 3.6vw, 2rem);
    line-height: 1.2;
    color: #10253f;
    border-bottom: none;
  }

  .section-intro {
    margin: 0 0 14px;
    color: var(--muted);
    max-width: 820px;
  }

  .resource-controls {
    border: 1px solid #d8e3f2;
    background: #f2f7ff;
    border-radius: 12px;
    padding: 12px;
    margin-bottom: 12px;
  }

  .resource-controls input {
    width: 100%;
    box-sizing: border-box;
    border-radius: 10px;
    border: 1px solid #c3d3e9;
    padding: 10px 12px;
    margin-bottom: 10px;
    font: inherit;
    color: #183457;
    background: #fff;
  }

  .filter-row {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
  }

  .chip {
    border: 1px solid #c5d7ee;
    background: #fff;
    color: #274c7f;
    border-radius: 999px;
    padding: 7px 11px;
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.02em;
    cursor: pointer;
  }

  .chip.active,
  .chip:hover {
    background: #0f4d9d;
    color: #fff;
    border-color: #0f4d9d;
  }

  .meta-line {
    margin-top: 8px;
    color: #60748f;
    font-size: 0.83rem;
    font-weight: 600;
  }

  .course-grid,
  .topic-grid,
  .mentor-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
    gap: 12px;
  }

  .course-card,
  .topic-card,
  .mentor-card {
    border-radius: 12px;
    border: 1px solid #d8e2ef;
    background: #fbfdff;
    padding: 14px;
    transition: transform .2s ease, box-shadow .2s ease;
  }

  .course-card:hover,
  .topic-card:hover,
  .mentor-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 18px rgba(16, 44, 84, 0.08);
  }

  .course-pill {
    display: inline-block;
    padding: 5px 11px;
    margin-bottom: 8px;
    border-radius: 999px;
    border: 1px solid #bfd0e8;
    background: #e9f1fc;
    color: #1b4880;
    font-size: 0.74rem;
    letter-spacing: 0.02em;
    font-weight: 800;
    text-transform: uppercase;
  }

  .resource-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .resource-item {
    border-top: 1px dashed #d6dfec;
    padding: 10px 0;
  }

  .resource-item:first-child {
    border-top: none;
    padding-top: 4px;
  }

  .resource-title {
    display: block;
    font-weight: 700;
    color: #1d3656;
    margin-bottom: 6px;
  }

  .resource-actions {
    display: flex;
    gap: 7px;
    flex-wrap: wrap;
  }

  details.modern {
    margin-top: 10px;
    border: 1px solid #d2deed;
    border-radius: 12px;
    background: #f8fbff;
    padding: 8px 12px;
  }

  details.modern summary {
    cursor: pointer;
    font-weight: 800;
    color: #1d4374;
    outline: none;
  }

  .topic-card {
    background: linear-gradient(180deg, #f3fbfa, #ffffff);
    border-left: 4px solid var(--brand-2);
  }

  .mentor-card {
    background: linear-gradient(180deg, #fbf8ff, #ffffff);
    border-left: 4px solid #7a4bb1;
  }

  .mentor-card h3,
  .topic-card h3,
  .course-card h3 {
    margin: 0 0 8px;
    color: #203958;
    font-size: 1.05rem;
  }

  .mentor-card ul,
  .topic-card ul {
    margin: 0;
    padding-left: 18px;
  }

  .final-cta {
    margin-top: 24px;
    border-radius: 10px;
    padding: 24px;
    border: 1px solid #f1d8a9;
    background: linear-gradient(135deg, #fff8ea, #fffdf7);
    text-align: center;
  }

  .final-cta h2 {
    margin: 0 0 8px;
    border-bottom: none;
    color: #5f4214;
    font-family: "DM Serif Display", Georgia, serif;
  }

  .final-cta p {
    margin: 0 0 12px;
    color: #6a5530;
  }

  .is-hidden {
    display: none !important;
  }

  @media (max-width: 860px) {
    .hero {
      padding: 20px;
    }

    .hero-grid {
      grid-template-columns: 1fr;
    }

    .section {
      padding: 16px;
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

  <section class="hero" id="top">
    <span class="brand-kicker"> Teaching & Mentorship
    </span>
    <h1>Teaching, Simulations, and Mentorship by Dr. Nitesh Kumar</h1>
    <p> Hi there! I'm Dr. Nitesh Kumar an IUCAA visiting associate faculty and astrophysicist with a passion for teaching and mentorship. I teach courses in astrophysics, computational physics, and data science at the undergraduate and graduate levels. I also develop interactive simulations and computational labs to make complex concepts accessible and engaging for students. My teaching philosophy centers around fostering curiosity, critical thinking, and hands-on learning through real-world applications and research-led mentorship.</p>

    <div class="hero-grid">
      <div class="hero-card">
        <h3>Quick Start</h3>
        <div class="quick-actions">
          <a href="/resources/AI_simulations/phys4022p_llm_sim_hub.html" class="btn-link" target="_blank">Launch Astrophysics Hub</a>
          <a href="#resources" class="btn-link">Find Course Resources</a>
          <a href="#mentorship" class="btn-link secondary">Apply for Mentorship</a>
        </div>
      </div>
      <div class="hero-card">
        <h3>Teaching Focus</h3>
        <p style="margin:0;color:#49607f;font-size:0.95rem">
          Concept-first astrophysics teaching with computational thinking, data literacy,
          and simulation-led understanding.
        </p>
      </div>
    </div>

    <div class="stats-grid">
      <div class="stat"><b>5+</b><span>Astrophysics lab modules</span></div>
      <div class="stat"><b>25+</b><span>Computational notebooks</span></div>
      <div class="stat"><b>10+</b><span>Courses taught</span></div>
      <div class="stat"><b>Research-led</b><span>Mentorship ecosystem</span></div>
    </div>
  </section>

  <nav class="sticky-nav" aria-label="Teaching page sections">
    <ul>
      <li><a href="#resources" class="nav-link active">Resources</a></li>
      <li><a href="#simulations" class="nav-link">Simulations</a></li>
      <li><a href="#courses" class="nav-link">Courses Taught</a></li>
      <li><a href="#mentorship" class="nav-link">Mentorship</a></li>
      <li><a href="#contact" class="nav-link">Contact</a></li>
    </ul>
  </nav>

  <section class="section" id="resources">
    <h2>Structured Resource Library</h2>
    <p class="section-intro">
      Search and filter resources instantly. Use this during class for quick retrieval,
      or after class for deeper study.
    </p>

    <div class="resource-controls">
      <input id="resourceSearch" type="text" placeholder="Search by topic, course, module, or keyword (e.g. Monte Carlo, Hubble, Python)" aria-label="Search resources" />
      <div class="filter-row">
        <button class="chip active" type="button" data-filter="all">All</button>
        <button class="chip" type="button" data-filter="simulation">Simulations</button>
        <button class="chip" type="button" data-filter="notebook">Notebooks</button>
        <button class="chip" type="button" data-filter="pdf">PDF Notes</button>
        <button class="chip" type="button" data-filter="lab">Lab Manuals</button>
      </div>
      <div class="meta-line">Showing <span id="resourceCount">0</span> resources</div>
    </div>

    <div class="course-grid">
      <article class="course-card">
        <span class="course-pill">PHYS4022P · Fundamentals of Astrophysics</span>
        <h3>Simulation-first Unit Modules</h3>
        <ul class="resource-list">
          <li class="resource-item resource" data-type="simulation" data-keywords="phys4022p hub astrophysics simulation lab unit modules">
            <span class="resource-title">Simulation Hub (all units)</span>
            <div class="resource-actions">
              <a href="/resources/AI_simulations/phys4022p_llm_sim_hub.html" class="btn-link" target="_blank">Open Hub</a>
            </div>
          </li>
          <li class="resource-item resource" data-type="simulation" data-keywords="n body orbits unit 1">
            <span class="resource-title">Unit 1: N-Body Orbits</span>
            <div class="resource-actions"><a href="/resources/AI_simulations/simple_nbody_orbits.html" class="btn-link" target="_blank">Lab</a></div>
          </li>
          <li class="resource-item resource" data-type="simulation" data-keywords="blackbody radiation unit 2 core">
            <span class="resource-title">Unit 2: Blackbody Radiation</span>
            <div class="resource-actions">
              <a href="/resources/AI_simulations/blackbody_radiation_ai_lab.html" class="btn-link" target="_blank">Lab</a>
              <a href="/resources/AI_simulations/blackbody_radiation_ai_core.html" class="btn-link" target="_blank">Core</a>
            </div>
          </li>
          <li class="resource-item resource" data-type="simulation" data-keywords="hr diagram stellar evolution unit 3 core">
            <span class="resource-title">Unit 3: H-R Diagram</span>
            <div class="resource-actions">
              <a href="/resources/AI_simulations/hr_diagram_socratic_lab.html" class="btn-link" target="_blank">Lab</a>
              <a href="/resources/AI_simulations/hr_diagram_socratic_core.html" class="btn-link" target="_blank">Core</a>
            </div>
          </li>
          <li class="resource-item resource" data-type="simulation" data-keywords="optical depth dust unit 4 core">
            <span class="resource-title">Unit 4: Optical Depth & Dust</span>
            <div class="resource-actions">
              <a href="/resources/AI_simulations/optical_depth_ai_lab.html" class="btn-link" target="_blank">Lab</a>
              <a href="/resources/AI_simulations/optical_depth_ai_core.html" class="btn-link" target="_blank">Core</a>
            </div>
          </li>
          <li class="resource-item resource" data-type="simulation" data-keywords="hubble law cosmology unit 5 core">
            <span class="resource-title">Unit 5: Hubble Law & Cosmology</span>
            <div class="resource-actions">
              <a href="/resources/AI_simulations/hubble_law_debate_lab.html" class="btn-link" target="_blank">Lab</a>
              <a href="/resources/AI_simulations/hubble_law_debate_core.html" class="btn-link" target="_blank">Core</a>
            </div>
          </li>
          <li class="resource-item resource" data-type="simulation" data-keywords="motion gravity bridge activity">
            <span class="resource-title">Motion Gravity Lab (Bridge Activity)</span>
            <div class="resource-actions"><a href="/resources/AI_simulations/motion_gravity_lab.html" class="btn-link" target="_blank">Open</a></div>
          </li>
        </ul>
      </article>

      <article class="course-card">
        <span class="course-pill">Computational Astrophysics (M.Sc.)</span>
        <h3>Lecture Notebooks + Visual Explainers</h3>
        <details class="modern" open>
          <summary>Core Lecture Notebook Series</summary>
          <ul class="resource-list">
            <li class="resource-item resource" data-type="notebook" data-keywords="lecture 1 notebook computational astrophysics">
              <span class="resource-title">Lecture 1</span>
              <div class="resource-actions">
                <a href="https://nbviewer.org/github/niteshchandra039/niteshchandra039.github.io/blob/main/resources/computational_astrophysics/Computational%20Astrophysics%20-%20Lect%201.ipynb" class="btn-link" target="_blank">View</a>
                <a href="/resources/computational_astrophysics/Computational%20Astrophysics%20-%20Lect%201.ipynb" class="btn-link" target="_blank">Download</a>
              </div>
            </li>
            <li class="resource-item resource" data-type="notebook" data-keywords="lecture 2 sorting algorithms python">
              <span class="resource-title">Lecture 2: Data Sorting Algorithms</span>
              <div class="resource-actions">
                <a href="https://nbviewer.org/github/niteshchandra039/niteshchandra039.github.io/blob/main/resources/computational_astrophysics/Computational%20Astrophysics%20Lecture%202_%20Data%20Sorting%20Algorithms%20in%20Python.ipynb" class="btn-link" target="_blank">View</a>
                <a href="/resources/computational_astrophysics/Computational%20Astrophysics%20Lecture%202_%20Data%20Sorting%20Algorithms%20in%20Python.ipynb" class="btn-link" target="_blank">Download</a>
              </div>
            </li>
            <li class="resource-item resource" data-type="notebook" data-keywords="lecture 3 lecture 4 lecture 5 lecture 6 lecture 7">
              <span class="resource-title">Lecture 3-7 Series</span>
              <div class="resource-actions">
                <a href="/resources/computational_astrophysics/Computational%20Astrophysics%20-%20Lecture%203.ipynb" class="btn-link" target="_blank">L3</a>
                <a href="/resources/computational_astrophysics/Computational%20Astrophysics%20-%20Lecture%204%20%26%205.ipynb" class="btn-link" target="_blank">L4-5</a>
                <a href="/resources/computational_astrophysics/Computational%20Astrophysics%20Lecture%206.ipynb" class="btn-link" target="_blank">L6</a>
                <a href="/resources/computational_astrophysics/Computational%20Astrophysics%20Lecture%207.ipynb" class="btn-link" target="_blank">L7</a>
              </div>
            </li>
            <li class="resource-item resource" data-type="notebook" data-keywords="lecture 11 error analysis lecture 13 odes euler lecture 17 pde">
              <span class="resource-title">Methods Series: Error, ODE, PDE</span>
              <div class="resource-actions">
                <a href="/resources/computational_astrophysics/Computational%20Astrophysics%20Lect%2011_%20Error%20Analysis.ipynb" class="btn-link" target="_blank">L11</a>
                <a href="/resources/computational_astrophysics/Computational%20Astrophysics%20Lect%2013_%20ODEs%20and%20Euler_s%20Method%20Lecture.ipynb" class="btn-link" target="_blank">L13</a>
                <a href="/resources/computational_astrophysics/Computational_Astrophysics_lecture_17_PDE_.ipynb" class="btn-link" target="_blank">L17</a>
              </div>
            </li>
            <li class="resource-item resource" data-type="notebook" data-keywords="lecture 19 lecture 20 lecture 21 lecture 22 lecture 23 lecture 24 lecture 25 lecture 26">
              <span class="resource-title">Advanced Lecture Cluster (L19-L26)</span>
              <div class="resource-actions">
                <a href="/resources/computational_astrophysics/Computational_Astrophysics_lecture_19.ipynb" class="btn-link" target="_blank">L19</a>
                <a href="/resources/computational_astrophysics/Computational_Astrophysics_lecture_20.ipynb" class="btn-link" target="_blank">L20</a>
                <a href="/resources/computational_astrophysics/Computational_Astrophysics_lecture_21.ipynb" class="btn-link" target="_blank">L21</a>
                <a href="/resources/computational_astrophysics/Computational_Astrophysics_lecture_22.ipynb" class="btn-link" target="_blank">L22</a>
                <a href="/resources/computational_astrophysics/Computational_Astrophysics_lecture_23.ipynb" class="btn-link" target="_blank">L23</a>
                <a href="/resources/computational_astrophysics/Computational_Astrophysics_lecture_24.ipynb" class="btn-link" target="_blank">L24</a>
                <a href="/resources/computational_astrophysics/Computational_Astrophysics_lecture_25A.ipynb" class="btn-link" target="_blank">L25A</a>
                <a href="/resources/computational_astrophysics/Computational_Astrophysics_lecture_25.ipynb" class="btn-link" target="_blank">L25B</a>
                <a href="/resources/computational_astrophysics/Computational_Astrophysics_lecture_26.ipynb" class="btn-link" target="_blank">L26</a>
              </div>
            </li>
          </ul>
        </details>

        <details class="modern">
          <summary>Visual Explainer Simulations</summary>
          <ul class="resource-list">
            <li class="resource-item resource" data-type="simulation" data-keywords="lagrangian eulerian animation">
              <span class="resource-title">Lagrangian vs Eulerian Animation</span>
              <div class="resource-actions"><a href="/resources/computational_astrophysics/lag_vs_eul.html" class="btn-link" target="_blank">Open</a></div>
            </li>
            <li class="resource-item resource" data-type="simulation" data-keywords="supernova shockwave">
              <span class="resource-title">Supernova Shockwave Animation</span>
              <div class="resource-actions"><a href="/resources/computational_astrophysics/supernova_shockwave.html" class="btn-link" target="_blank">Open</a></div>
            </li>
            <li class="resource-item resource" data-type="simulation" data-keywords="shockwave 1">
              <span class="resource-title">Supernova Shockwave Animation 1</span>
              <div class="resource-actions"><a href="/resources/computational_astrophysics/shockwave_1.html" class="btn-link" target="_blank">Open</a></div>
            </li>
          </ul>
        </details>
      </article>

      <article class="course-card">
        <span class="course-pill">B.Sc. Physics + Applied Labs</span>
        <h3>Core Notes, Labs, and Module Resources</h3>
        <ul class="resource-list">
          <li class="resource-item resource" data-type="pdf" data-keywords="python notes computational techniques">
            <span class="resource-title">Computational Techniques: Python Notes</span>
            <div class="resource-actions">
              <a href="/resources/computational_techniques/python_notes.pdf" class="btn-link" target="_blank">PDF</a>
              <a href="/resources/computational_techniques/Python_learning/python_notes_updated.ipynb" class="btn-link" target="_blank">Notebook</a>
              <a href="https://colab.research.google.com/drive/1W0J-ll0QylMYLvjRHqHGANBbj2ApXnIr?usp=sharing" class="btn-link" target="_blank">Colab</a>
            </div>
          </li>
          <li class="resource-item resource" data-type="lab" data-keywords="lab manual computational physics lab">
            <span class="resource-title">Intro to Computational Physics Lab Manual</span>
            <div class="resource-actions"><a href="/resources/computational_physics_lab/lab_manual_1.pdf" class="btn-link" target="_blank">Open PDF</a></div>
          </li>
          <li class="resource-item resource" data-type="pdf" data-keywords="latex tutorial">
            <span class="resource-title">Learning LaTeX Tutorial</span>
            <div class="resource-actions"><a href="/resources/LearnLaTeX.pdf" class="btn-link" target="_blank">Open PDF</a></div>
          </li>
          <li class="resource-item resource" data-type="pdf" data-keywords="computational physics msc introduction">
            <span class="resource-title">Computational Physics (M.Sc.) Intro Notes</span>
            <div class="resource-actions"><a href="/resources/computational_physics/Introduction_to_computational_physics_23_May.pdf" class="btn-link" target="_blank">Open PDF</a></div>
          </li>
          <li class="resource-item resource" data-type="lab" data-keywords="observational astronomy handbook">
            <span class="resource-title">Observational Astronomy Lab Handbook</span>
            <div class="resource-actions"><a href="/resources/observational_astronomy_lab/Observational_Astronomy_Handbook.pdf" class="btn-link" target="_blank">Open PDF</a></div>
          </li>
          <li class="resource-item resource" data-type="pdf" data-keywords="fundamentals astronomy notes assignment">
            <span class="resource-title">Fundamentals of Astronomy (Notes + Assignment)</span>
            <div class="resource-actions">
              <a href="/resources/fundamentals_of_astronomy/Astronomy_Notes.pdf" class="btn-link" target="_blank">Notes</a>
              <a href="/resources/fundamentals_of_astronomy/assignment.pdf" class="btn-link" target="_blank">Assignment</a>
            </div>
          </li>
          <li class="resource-item resource" data-type="simulation" data-keywords="pn diode hall quantum hall gravity module">
            <span class="resource-title">Semiconductor / Solid-State Simulations</span>
            <div class="resource-actions">
              <a href="/resources/AI_simulations/pn-diode.html" class="btn-link" target="_blank">PN Diode</a>
              <a href="/resources/AI_simulations/hall-effect.html" class="btn-link" target="_blank">Hall Effect</a>
              <a href="/resources/AI_simulations/quantum-hall-effect.html" class="btn-link" target="_blank">Quantum Hall</a>
              <a href="/resources/AI_simulations/gravity_module.html" class="btn-link" target="_blank">Gravity Module</a>
            </div>
          </li>
        </ul>
      </article>
    </div>
  </section>

  <section class="section" id="simulations">
    <h2>Simulation-Driven Teaching Strategy</h2>
    <p class="section-intro">
      Simulations are integrated to move from passive observation to active reasoning. Each module connects
      conceptual explanation, computational experiment, and assessment-oriented reflection.
    </p>
    <div class="topic-grid">
      <article class="topic-card">
        <h3>Concept-First Learning Path</h3>
        <ul>
          <li>Theory checkpoint before each interactive module</li>
          <li>Prompt-driven exploration with scenario changes</li>
          <li>Immediate reinforcement using adaptive quiz workflows</li>
        </ul>
      </article>
      <article class="topic-card">
        <h3>Computational Skills Embedded</h3>
        <ul>
          <li>Numerical integration and ODE/PDE intuition</li>
          <li>Scientific plotting and interpretation</li>
          <li>Error analysis and model comparison habits</li>
        </ul>
      </article>
      <article class="topic-card">
        <h3>Tools and Ecosystem</h3>
        <ul>
          <li>Python notebooks and cloud-first access paths</li>
          <li>Simulation artifacts for classroom and self-study</li>
          <li>Linux, Fortran, C++, Gnuplot, and LaTeX pipelines</li>
        </ul>
      </article>
    </div>
  </section>

  <section class="section" id="courses">
    <h2>Courses Taught</h2>
    <p class="section-intro">Interdisciplinary coverage across foundational programming, computational methods, and astrophysical applications.</p>
    <div class="topic-grid">
      <article class="topic-card"><h3>Classical Mechanics</h3><p>M.Sc. Physics</p></article>
      <article class="topic-card"><h3>Computational Astrophysics</h3><p>M.Sc. Physics</p></article>
      <article class="topic-card"><h3>Machine Learning Techniques</h3><p>Hands-on analysis using real observational datasets.</p></article>
      <article class="topic-card"><h3>Python Programming</h3><p>Data structures, logic building, and scientific computing.</p></article>
      <article class="topic-card"><h3>Fortran Programming</h3><p>Fundamentals and numerical applications in scientific problems.</p></article>
      <article class="topic-card"><h3>C++ Programming</h3><p>Object-oriented methods and modeling workflows.</p></article>
      <article class="topic-card"><h3>LaTeX for Science</h3><p>Scientific writing and reproducible documentation practices.</p></article>
      <article class="topic-card"><h3>Computational Physics</h3><p>Numerical methods applied to real physics systems.</p></article>
      <article class="topic-card"><h3>Astrophysics and Cosmology</h3><p>Stellar evolution, variable stars, and cosmic-scale structures.</p></article>
      <article class="topic-card"><h3>Astronomy and Physics Labs</h3><p>Observation, experimentation, and simulation-enhanced interpretation.</p></article>
    </div>
  </section>

  <section class="section" id="mentorship">
    <h2>Mentorship and Dissertation Guidance</h2>
    <p class="section-intro">Research supervision focused on rigorous analysis, computational pipelines, and publication-ready thinking.</p>
    <div class="mentor-grid">
      <article class="mentor-card">
        <h3>Current Mentorship Themes</h3>
        <ul>
          <li>RR Lyrae and Cepheid variable star classification</li>
          <li>Machine learning in astronomical time series</li>
          <li>Photometric data analysis with neural-network tools</li>
          <li>X-Ray binary timing and spectral studies</li>
          <li>Stellar evolution modeling with MESA</li>
          <li>Distance calibration using period-luminosity relations</li>
          <li>Open cluster age and metallicity estimation</li>
          <li>Exoplanet parameter extraction with transit modeling</li>
          <li>Gaia DR3 variable star analysis and classification</li>
        </ul>
      </article>
      <article class="mentor-card">
        <h3>Dissertation Guidance Portfolio</h3>
        <ul>
          <li><strong>Madhumita Singh:</strong> Timing and spectral analysis of low-mass X-ray binaries</li>
          <li><strong>Aniket Prakash:</strong> Theoretical modelling of variable stars using MESA</li>
          <li><strong>Shagun Thakur:</strong> Variable-star analysis in the Gaia DR3 era</li>
          <li><strong>Divya Krishna:</strong> SMC distance calibration via multiphase P-L relations</li>
          <li><strong>Rushil Soni:</strong> Age and metallicity of open cluster Berkeley 6 and S1</li>
          <li><strong>Atharva Bhatele:</strong> Multiwavelength study of RR Lyrae stars</li>
          <li><strong>Neelesh:</strong> Exoplanet parameter extraction with ExoFAST</li>
        </ul>
      </article>
    </div>
  </section>

  <section class="final-cta" id="contact">
    <h2>Let's Build Your Next Academic Project</h2>
    <p>
      Interested in thesis work or guided projects in astrophysics, computational science, or data-intensive astronomy?
      Reach out to discuss scope, timeline, and technical direction.
    </p>
    <div class="quick-actions" style="justify-content:center;">
      <a href="/about/" class="btn-link">View Profile</a>
      <a href="/" class="btn-link secondary">Back to Home</a>
    </div>
  </section>

</div>

<script>
  (function () {
    var searchInput = document.getElementById("resourceSearch");
    var chips = Array.prototype.slice.call(document.querySelectorAll(".chip[data-filter]"));
    var resources = Array.prototype.slice.call(document.querySelectorAll(".resource"));
    var countNode = document.getElementById("resourceCount");
    var activeFilter = "all";

    function applyFilter() {
      var query = (searchInput && searchInput.value ? searchInput.value : "").toLowerCase().trim();
      var visible = 0;

      resources.forEach(function (node) {
        var type = (node.getAttribute("data-type") || "").toLowerCase();
        var keywords = (node.getAttribute("data-keywords") || "").toLowerCase();
        var title = (node.textContent || "").toLowerCase();

        var typeMatch = activeFilter === "all" || type === activeFilter;
        var textMatch = !query || keywords.indexOf(query) !== -1 || title.indexOf(query) !== -1;
        var show = typeMatch && textMatch;

        node.classList.toggle("is-hidden", !show);
        if (show) visible += 1;
      });

      if (countNode) countNode.textContent = String(visible);
    }

    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        activeFilter = chip.getAttribute("data-filter") || "all";
        chips.forEach(function (c) { c.classList.remove("active"); });
        chip.classList.add("active");
        applyFilter();
      });
    });

    if (searchInput) searchInput.addEventListener("input", applyFilter);
    applyFilter();

    var sections = Array.prototype.slice.call(document.querySelectorAll("section[id]"));
    var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav-link"));

    function activateNav() {
      var y = window.scrollY + 120;
      var current = sections[0] ? sections[0].id : "";
      sections.forEach(function (section) {
        if (section.offsetTop <= y) current = section.id;
      });
      navLinks.forEach(function (link) {
        var href = link.getAttribute("href") || "";
        link.classList.toggle("active", href === "#" + current);
      });
    }

    window.addEventListener("scroll", activateNav, { passive: true });
    activateNav();
  })();
</script>