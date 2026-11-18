# niteshchandra039.github.io

Source for the academic website of Dr. Nitesh Kumar: **https://niteshchandra039.github.io**

A [Jekyll](https://jekyllrb.com/) site built and hosted by GitHub Pages from the `main` branch. There is no separate build step: pushing to `main` publishes the site.

## Updating content (no HTML needed)

Most content lives in YAML files under `_data/`. Edit the file, commit, push.

| To change… | Edit |
|---|---|
| Name, roles, email, office address, profile links, CV path | `_data/profile.yml` |
| Journal articles (newest first; `topics` drive the filters) | `_data/publications.yml` |
| News items (homepage shows the first four) | `_data/news.yml` |
| Events organised at UPES, with photos | `_data/events.yml` (photos in `assets/site/img/events/`) |
| Courses by semester, mentored students, internships | `_data/teaching.yml` |
| Talks, presentations, meetings, service | `_data/talks.yml` |
| Research themes | `_data/research.yml` |

**Updating the CV:** replace `cv.pdf` in the repository root. Every “Download CV” button points to `/cv.pdf`.

**Adding event photos:** save two WebP files per photo in `assets/site/img/events/`: `NAME-sm.webp` (about 720 px wide, used on the page) and `NAME.webp` (about 1600 px, opened in the photo viewer). Then list `NAME` with its width, height and alt text under the event in `_data/events.yml`.

## Structure

| Path | Purpose |
|---|---|
| `index.html`, `research.html`, `publications.html`, `teaching.html`, `outreach.html`, `news.html`, `cv.html`, `contact.html`, `404.html` | Pages |
| `_layouts/site.html`, `_includes/site/` | Page template, header, footer, metadata and structured data |
| `assets/site/css/site.css` | Design system: colour tokens, typography, glass panels, layout, light and dark themes |
| `assets/site/js/site.js` | Theme toggle, mobile menu, filters, resource search, photo viewer (no libraries) |
| `assets/site/fonts/` | Self-hosted Archivo and IBM Plex fonts (SIL Open Font License) |
| `resources/` | Teaching materials, simulations, notebooks and quizzes (served as-is) |
| `marks.html`, `_layouts/` (Minimal Mistakes), `_sass/` | Student marks portal, which still uses the original theme |
| `about.md`, `update.md` | Redirects from old addresses (`/about/` → `/cv/`, `/update/` → `/news/`) |

## Run locally

Requires Ruby and Bundler.

```bash
bundle install            # first time only
bundle exec jekyll serve  # then open http://127.0.0.1:4000
```

## Credits

Hero image: Helix Nebula, NASA, ESA, C.R. O'Dell (Vanderbilt University), M. Meixner, P. McCullough and G. Bacon (STScI), via [ESA/Hubble](https://esahubble.org/images/opo0432d/). Event photographs: Astronomy & Astrophysics @ UPES.
