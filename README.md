Képes Gábor – Photography Portfolio (Web Tech Project)

A bilingual README: English below, magyar leírás lejjebb.

English
Overview

A modern, responsive photography portfolio built with HTML5, CSS3, JavaScript, jQuery, JSON, and AJAX.
The project demonstrates semantic HTML, form validation, a jQuery-powered lightbox gallery, custom video controls, a Dark/Light theme toggle with localStorage, and dynamic JSON loading for a “Latest News” sidebar.

Live Preview

Local server required (see “Run locally”).

Works on XAMPP, VS Code Live Server, Python’s http.server, or can be deployed on GitHub Pages.

Tech Stack

Frontend: HTML5, CSS3 (custom design tokens, responsive layout), JavaScript (ES5/ES6), jQuery

Data: hirek.json (loaded via fetch)

No build tools required

Features

Semantic layout: header, nav, main, section, article, aside, footer, figure

Navigation: sticky navbar with active state and keyboard focus styles

Theme: global Dark/Light switch (fixed top-right), persisted via localStorage

Gallery: thumbnail grid + jQuery lightbox (fadeIn/fadeOut)

Video: custom Play / Pause / Restart controls

Forms: client-side validation (error styles, messages)

Table: styled pricing table with zebra rows + hover

News: hirek.json loaded with fetch/AJAX into #hirek-box

Responsive: fluid typography, 8pt spacing scale, mobile tweaks

Project Structure (example)
/
├─ index.html
├─ portfolio.html
├─ szolgaltatasok.html
├─ rolam.html
├─ kapcsolat.html
├─ hirek.json
├─ css/
│  └─ style.css
├─ js/
│  ├─ jquery.min.js
│  └─ main.js
└─ images/
   ├─ hero.jpg
   ├─ portfolio/...
   └─ ...

How to Run Locally

Option A – XAMPP

Copy the project into C:\xampp\htdocs\photography-portfolio\

Start Apache in XAMPP

Open: http://localhost/photography-portfolio/

Test JSON: http://localhost/photography-portfolio/hirek.json

Option B – VS Code Live Server

Open the folder in VS Code

Right-click index.html → Open with Live Server

Go to http://127.0.0.1:5500/

Option C – Python

# from project root
python -m http.server 8080
# then open: http://localhost:8080/


Note: If some pages are inside subfolders, adjust JSON paths accordingly (e.g., ../hirek.json).

Accessibility & UX

Large tap targets, clear focus rings, accessible contrast in both themes

Reduced motion friendly (no heavy animations)

Logical heading hierarchy and semantic landmarks

Instructor Checklist (Mapping to Requirements)

HTML (5+ pages): index, portfolio, szolgaltatasok, rolam, kapcsolat

HTML5 structure: header, nav, main, section, article, aside, footer used

Elements: div, span, p, headings, img, table, a, ...

Forms: text (single/multi-line), datalist, checkbox, radio, color/date (if included), buttons, ordered list

Video: embedded with JS buttons (play/pause/restart)

CSS: inline (limited), id/class selectors, table/menu/background/link/form/button styling; styles in external CSS and in-page <style> if required

JS/jQuery/JSON/AJAX:

Form validation with error messages and red borders

jQuery animation (fadeIn/fadeOut) + element creation/modification

Selectors by tag/class/id

JSON file (nested) + AJAX (fetch) rendering on page

License

MIT – feel free to reuse with attribution.
