---
layout: home
title: "Dr. Nitesh Kumar | Astrophysicist"
author_profile: true
---


<script>
  // --- 0. DYNAMIC FAVICON INJECTION (Physics Atom) ---
  (function() {
    const link = document.createElement('link');
    link.rel = 'icon';
    // This creates an SVG favicon on the fly using an emoji
    link.href = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚛️</text></svg>";
    document.head.appendChild(link);
  })();
</script>


<style>
  /* ===============================
     TYPOGRAPHY & GLOBAL STYLES
     =============================== */

  .wide-content {
    max-width: calc(100vw - 280px);
  }

  @media (max-width: 1024px) {
    .wide-content {
      max-width: 100%;
    }
  }

  .page__title { display: none; }

  .wide-content {
    font-size: 16px;
    line-height: 1.6;
    color: #444;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  }

  h1 {
    font-size: 1.75em;
    margin-bottom: 0.5em;
    color: #222;
    font-weight: 700;
  }

  h2 {
    font-size: 1.4em;
    margin-top: 1.6em;
    margin-bottom: 0.8em;
    color: #333;
    border-bottom: 2px solid #f0f0f0;
    padding-bottom: 8px;
  }

  h3 {
    font-size: 1.15em;
    margin-bottom: 10px;
    color: #222;
    font-weight: 600;
  }

  a {
    color: #2a7ae2;
    text-decoration: none;
  }

  a:hover {
    color: #1a5cba;
    text-decoration: underline;
  }

  /* ===============================
     COMPONENTS
     =============================== */

  .intro-card {
    background: linear-gradient(to right, #f9fbfd, #ffffff);
    border-left: 4px solid #2a7ae2;
    padding: 20px 25px;
    border-radius: 6px;
    margin-bottom: 30px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.04);
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 25px;
    margin-top: 20px;
  }

  .card {
    background: #ffffff;
    border: 1px solid #e1e4e8;
    border-radius: 8px;
    padding: 20px;
    height: 100%;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 15px rgba(0,0,0,0.06);
    border-color: #2a7ae2;
  }

  .card ul {
    margin: 0;
    padding-left: 20px;
  }

  .card li {
    margin-bottom: 6px;
    font-size: 0.95em;
  }

  .pub-item {
    margin-bottom: 14px;
    padding-bottom: 14px;
    border-bottom: 1px dashed #eee;
    font-size: 0.95em;
  }

  .pub-item:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .badge {
    display: inline-block;
    padding: 3px 10px;
    margin: 0 4px 6px 0;
    background: #f1f8ff;
    color: #0366d6;
    border: 1px solid #c8e1ff;
    border-radius: 12px;
    font-size: 0.8em;
    font-weight: 600;
  }

  .btn {
    display: inline-block;
    background: #2a7ae2;
    color: #ffffff;
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 0.9em;
    font-weight: 500;
    margin-top: 10px;
  }

  .btn:hover {
    background: #1d5cb0;
  }

  hr {
    border: 0;
    border-top: 1px solid #eaeaea;
    margin: 40px 0;
  }
</style>

<div class="wide-content">

  <div class="intro-card">
    <h1>Welcome</h1>
    <p style="font-size:1.05em; color:#555;">
      I am <strong>Dr. Nitesh Kumar</strong>, an <strong>Assistant Professor</strong> at UPES, Dehradun and an
      <strong>IUCAA Associate</strong>. I completed my Ph.D. in 2025 from the University of Delhi.
      My research bridges <strong>Stellar Astrophysics</strong> and <strong>Machine Learning</strong>,
      focusing on variable stars and large astronomical surveys.
    </p>
  </div>

  <h2>🔬 Research & Skills</h2>

  <div class="grid-container">
    <div class="card">
      <h3>Research Focus</h3>
      <ul>
        <li>RR Lyrae and pulsating variable stars</li>
        <li>ANN based stellar model interpolation</li>
        <li>Gaia DR3 and JWST data mining</li>
        <li>Photometric and spectroscopic analysis</li>
      </ul>
    </div>

    <div class="card">
      <h3>Technical Skills</h3>
      <span class="badge">Python</span>
      <span class="badge">C++ / Fortran</span>
      <span class="badge">Machine Learning</span>
      <span class="badge">TensorFlow</span>
      <span class="badge">SQL / ADQL</span>
      <span class="badge">HPC</span>
      <p style="font-size:0.9em; color:#666;">
        Development of automated pipelines for astronomical time series.
      </p>
    </div>
  </div>

  <hr>

  <h2>🚀 Featured Projects</h2>

  <div class="grid-container">
    <div class="card">
      <h3>ANN Interpolator</h3>
      <p>
        Neural network based interpolation framework for RRab star light curves.
      </p>
      <a class="btn" href="http://ann-interpolator.web.app/" target="_blank">Project Website</a>
    </div>

    <div class="card">
      <h3>RR Lyrae in M3</h3>
      <p>
        Photometric analysis of RR Lyrae stars in the globular cluster NGC 5272.
      </p>
      <a class="btn" href="https://academic.oup.com/mnras/article/531/3/2976/7681976" target="_blank">MNRAS Paper</a>
    </div>
  </div>

  <hr>

  <h2>📚 Recent Publications (2025–2026)</h2>
  <div class="card">
    <div class="pub-item">
      <strong>A multiband photometric study of RR Lyrae stars in M53</strong><br>
      <em>S. A. Gaur, Nitesh Kumar et al.</em><br>
      New Astronomy (2026) | <a href="https://doi.org/10.1016/j.newast.2025.102515">DOI</a>
    </div>
    <div class="pub-item">
      <strong>Physical parameters of stars in NGC 6397 using ANN</strong><br>
      <em>Nitesh Kumar, P. Prugniel, H. P. Singh</em><br>
      New Astronomy (2025) | <a href="https://doi.org/10.1016/j.newast.2025.102416">DOI</a>
    </div>
    <div class="pub-item">
      <strong>Extraction of physical parameters of RRab variables</strong><br>
      <em>Nitesh Kumar et al.</em><br>
      Universe (2025) | <a href="https://doi.org/10.3390/universe11070207">DOI</a>
    </div>
    <div style="text-align:right;">
      <a class="btn" href="https://ui.adsabs.harvard.edu/search/q=orcid%3A0000-0003-0668-9999" target="_blank"> View full list on NASA ADS </a>
    </div>
  </div>

  <hr>

  <h2>🎓 Teaching & Mentorship</h2>

  <div class="grid-container">
    <div class="card">
      <h3>Resources</h3>
      <ul>
        <li>Computational Physics</li>
        <li>Python, C++ and Fortran Programming</li>
        <li>Machine Learning in Astronomy</li>
        <li>Observational Astronomy</li>
      </ul>
      <a href="/teaching/" class="btn">Teaching Resources</a>
    </div>

    <div class="card">
      <h3>Mentorship</h3>
      <ul>
        <li>Exoplanets with JWST data</li>
        <li>Globular clusters using Gaia DR3</li>
        <li>Age and metallicity of star clusters</li>
      </ul>
    </div>
  </div>

  <hr>

  <h2>✍️ Recent Blog</h2>

  <div class="card">
    <p>
      <a href="https://medium.com/@niteshchandra039/computational-astrophysics-in-india-exploring-the-cosmos-with-computational-power-cf9d864858b3" target="_blank">
        Computational Astrophysics in India: Exploring the Cosmos with Computational Power
      </a>
    </p>
  </div>

  <hr>

  <h2>📬 Connect</h2>

  <div class="card" style="text-align:center;">
    <p>Open to academic collaborations and student research projects.</p>
    <span class="badge">📧 <a href="mailto:niteshchandra039@gmail.com">Email</a></span>
    <span class="badge">🐦 <a href="https://twitter.com/astro_nitesh">Twitter</a></span>
    <span class="badge">💼 <a href="https://linkedin.com/in/astro-nitesh">LinkedIn</a></span>
    <span class="badge">💻 <a href="https://github.com/niteshchandra039">GitHub</a></span>
  </div>

</div>

