# F2F 2026 — National Symposium Website

A single-page static academic symposium website. No build step, database, tracking, paid service or framework is required.

## Preview locally

From this directory, run `python3 -m http.server 8000`, then visit `http://localhost:8000`.

## Deploy to GitHub Pages

1. Create a GitHub repository (for example, `f2f-2026`).
2. Upload the contents of this directory to the repository root (not the containing folder).
3. In repository **Settings → Pages**, choose **Deploy from a branch**, branch **main**, folder **/(root)**.
4. After deployment, the website will appear at `https://YOUR-USERNAME.github.io/f2f-2026/`.
5. Set `canonicalUrl` in `js/config.js` to the actual published URL.

All assets use relative paths and support GitHub Pages project sites.

## Before publishing

Edit `js/config.js` to supply the verified official registration URL, abstract submission URL, contact email, institute website, campus directions, and canonical URL. Buttons remain visibly disabled until real HTTPS links are configured. The brochure is already included in `assets/brochure.pdf`.

**Resolve the dates:** The brochure cover says **20–21 November 2026**, but the programme identifies **Saturday 21 November and Sunday 22 November**. The website therefore identifies the detailed programme as provisional. Once the Organising Committee confirms the dates, revise the hero, dates and provisional notice accordingly.

**Check programme:** The schedule reflects the proposed programme as written; some source typographical errors (e.g., 'Heigh tea') have been corrected for display. Confirm speakers, session chairs and session allocations before publishing updates.

**Provide official assets:** Replace the placeholder brand wordmark with official logos only after receiving approved files. No logos or photos have been invented.

**Confirm contact information:** The source brochure has no verified contact email, submission form URL, payment link, or exact street address. These are intentionally not fabricated.

## Editing content

- `index.html`: headings, descriptive content, committee, fees and dates.
- `js/main.js`: two-day programme arrays and interactions.
- `js/config.js`: official URLs and email.
- `css/style.css`: design tokens, layout and responsive styling.
- `assets/illustrations/frontiers.svg`: original scientific hero illustration.

## Accessibility and SEO

Includes skip link, keyboard-operated programme tabs, mobile navigation, visible focus indicators, reduced-motion support, metadata and social preview. Lighthouse scores must be measured against the deployed site; no numerical scores are claimed without testing. Event structured data has intentionally been omitted until dates are confirmed to avoid publishing contradictory event dates.

The heading fonts are loaded from Google Fonts with system fallbacks; remove the `@import` line in CSS for an entirely offline experience.
