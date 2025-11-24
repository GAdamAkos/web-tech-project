# Képes Gábor – Photography Portfolio (Web Tech Project)

_A bilingual README: English first, magyar leírás lejjebb._

---

## 🇬🇧 English

### Overview
A modern, responsive photography portfolio built with **HTML5, CSS3, JavaScript, jQuery, JSON, and AJAX**.  
The project demonstrates semantic HTML, client-side form validation, a jQuery-powered lightbox gallery, custom video controls, a **Dark/Light theme toggle** persisted with `localStorage`, and dynamic JSON loading for a “Latest News” sidebar.

### Live Preview
This project is static and can be served from any HTTP server.

- **XAMPP:** copy the folder into `htdocs`, then open `http://localhost/<folder>/`
- **VS Code Live Server:** _Open with Live Server_ → `http://127.0.0.1:5500/`
- **Python:** `python -m http.server 8080` → `http://localhost:8080/`
- **GitHub Pages:** Settings → Pages → Deploy from branch

> Note: Use HTTP (not `file://`) so `fetch('hirek.json')` works without CORS errors.

### Tech Stack
- **Frontend:** HTML5, CSS3 (design tokens, responsive layout), JavaScript (ES5/ES6), jQuery
- **Data:** `hirek.json` (fetched and rendered into the sidebar)
- **Tooling:** none required; pure static assets

### Features
- **Semantic layout:** `header`, `nav`, `main`, `section`, `article`, `aside`, `footer`, `figure`
- **Navigation:** sticky navbar with active state and proper keyboard focus
- **Theme:** fixed top-right **Dark/Light toggle**, persisted via `localStorage`
- **Gallery:** thumbnail grid + jQuery lightbox (`fadeIn`/`fadeOut`)
- **Video:** custom **Play / Pause / Restart** buttons bound to a `<video>` element
- **Forms:** client-side validation with error styling and messages
- **Table:** styled pricing table with zebra rows and hover state
- **News:** loads a (nested) **JSON** file via `fetch`/**AJAX** and injects it into `#hirek-box`
- **Responsive:** fluid typography, 8pt spacing scale, mobile tweaks
- **Accessibility:** large tap targets, visible focus rings, high contrast in both themes

### Project Structure (example)
```
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
```

### Run Locally (Step-by-step)

**XAMPP**
1. Copy the project to `C:\xampp\htdocs\photography-portfolio\`
2. Start **Apache** in XAMPP
3. Open `http://localhost/DY98R5WebTech`

**VS Code Live Server**
1. Open the folder in VS Code
2. Right-click `index.html` → **Open with Live Server**
3. Browser opens at `http://127.0.0.1:5500/`

**Python (3.x)**
```bash
python -m http.server 8080
# open http://localhost:8080/
```

**If pages live in subfolders**, adjust JSON paths accordingly (e.g., `../hirek.json`).

### Screenshots

- They can be found in the "screenshots" folder.

### License
MIT – feel free to reuse with attribution.

---

## 🇭🇺 Magyar

### Áttekintés
Modern, reszponzív fotós portfólió **HTML5, CSS3, JavaScript, jQuery, JSON, AJAX** technológiákkal.  
Bemutatja a szemantikus HTML-t, kliens oldali űrlap-ellenőrzést, jQuery-s lightbox galériát, egyedi videóvezérlést, **Dark/Light** témaváltást (mentve `localStorage`-ban), valamint a „Legújabb hír” doboz dinamikus betöltését JSON-ból.

### Előnézet / futtatás
A projekt statikus; bármely HTTP szerverről futtatható.

- **XAMPP:** másold az `htdocs`-ba → `http://localhost/<mappa>/`
- **VS Code Live Server:** jobb klikk → _Open with Live Server_
- **Python:** `python -m http.server 8080` → `http://localhost:8080/`
- **GitHub Pages:** Settings → Pages → Deploy from branch

> Fontos: HTTP-n nézd (ne `file://`), hogy a `fetch('hirek.json')` működjön.

### Technológiák
- **Frontend:** HTML5, CSS3 (design tokenek, reszponzív elrendezés), JavaScript (ES5/ES6), jQuery
- **Adat:** `hirek.json` (betöltve és a side-barba renderelve)
- **Build:** nincs szükség külön build folyamatra

### Fő funkciók
- **Szemantika:** `header`, `nav`, `main`, `section`, `article`, `aside`, `footer`, `figure`
- **Navigáció:** sticky menü, aktív állapot, jól látható fókusz
- **Téma:** jobb felső sarokban **Dark/Light** váltó, `localStorage`-ban mentve
- **Galéria:** bélyegképek + jQuery lightbox (fade animációk)
- **Videó:** **Lejátszás / Szünet / Újra** gombok
- **Űrlapok:** kliens oldali ellenőrzés (piros keret + hibaüzenet)
- **Táblázat:** stílusos árlista zebra-sorokkal, hoverrel
- **Hírek:** **beágyazott JSON** betöltése `fetch`/AJAX-szal a `#hirek-box`-ba
- **Reszponzív:** fluid tipó, 8pt raszter, mobil finomhangolások
- **Akadálymentesség:** nagy tappolható felületek, hangsúlyos fókusz, erős kontraszt mindkét témában

### Projekt felépítése (példa)
```
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
```

### Helyi futtatás (lépésről lépésre)

**XAMPP**
1. Másold ide: `C:\xampp\htdocs\foto-portfolio\`
2. Indítsd az **Apache**-ot
3. Nyisd meg: `http://localhost/DY98R5WebTech`

**VS Code Live Server**
- Jobb klikk `index.html` → **Open with Live Server** → `http://127.0.0.1:5500/`

**Python (3.x)**
```bash
python -m http.server 8080
# böngésző: http://localhost:8080/
```

**Ha egyes oldalak almappában vannak**, igazítsd a JSON elérési útját (pl. `../hirek.json`).

### Képernyőképek

- A képernyőfotók a "screenshots" mappában találhatóak.

### Licenc
MIT – szabadon felhasználható forráshivatkozással.
