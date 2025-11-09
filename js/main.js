
$(document).ready(function() {
const root = document.documentElement;
const saved = localStorage.getItem('theme');
if (saved) root.classList.toggle('light', saved === 'light');

$('#themeToggle').on('click', () => {
  const toLight = !root.classList.contains('light');
  root.classList.toggle('light', toLight);
  localStorage.setItem('theme', toLight ? 'light' : 'dark');
});
  console.log("jQuery és a main.js sikeresen betöltődött!");
/* ==== Téma váltó – fix gomb minden oldalon (jobb felső sarok) ==== */
(function initThemeToggle(){
  const root = document.documentElement;

  // 1) Betöltéskor alkalmazzuk a korábban mentett témát
  const saved = localStorage.getItem('theme'); // 'light' | 'dark' | null
  if (saved) {
    root.classList.toggle('light', saved === 'light');
  }

  // 2) Ha nincs gomb a DOM-ban, szúrjuk be a body végére
  if (!document.getElementById('themeToggle')) {
    const btn = document.createElement('button');
    btn.id = 'themeToggle';
    btn.className = 'theme-toggle-fixed';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Téma váltása');
    document.body.appendChild(btn);
  }

  const $btn = $('#themeToggle');

  // 3) A gomb mindig a váltható mód nevét mutassa
  function updateThemeLabel(){
    const isLight = root.classList.contains('light');
    $btn.text(isLight ? 'Dark' : 'Light');
    $btn.attr('title', isLight ? 'Váltás sötét módra' : 'Váltás világos módra');
  }

  updateThemeLabel();

  // 4) Kattintás: váltás + mentés
  $btn.on('click', () => {
    const toLight = !root.classList.contains('light');
    root.classList.toggle('light', toLight);
    localStorage.setItem('theme', toLight ? 'light' : 'dark');
    updateThemeLabel();
  });
})();

  $('.galeria-kep').on('click', function() {
      
      var kepForras = $(this).attr('src');

      $('#nagy-kep-src').attr('src', kepForras);

      $('#nagy-kep-kontener').fadeIn(400); 
  });

  $('#nagy-kep-kontener').on('click', function() {
      $(this).fadeOut(300);
  });

  var video = document.getElementById('werk-video');

  if (video) {

      $('#video-play').on('click', function() {
          video.play(); 
      });

      $('#video-pause').on('click', function() {
          video.pause(); 
      });

      $('#video-restart').on('click', function() {
          video.currentTime = 0;
          video.play();
      });
  }



/* ==========================================================
   Követelmény: Form Ellenőrzés (JavaScript)
   (kapcsolat.html)
   ========================================================== */

// Elem kiválasztása ID alapján: '#kapcsolat-urlap'
var urlap = $('#kapcsolat-urlap');

// Csak akkor fussunk le, ha az űrlap ezen az oldalon van
if (urlap.length > 0) {
    
    // Eseménykezelő: a 'submit' esemény figyelése
    urlap.on('submit', function(event) {
        // Alapértelmezett böngésző-esemény (oldal újratöltés) megállítása
        event.preventDefault(); 
        
        console.log("Űrlap ellenőrzés indul...");
        
        // Hibakezelő segédfüggvény
        // Ezzel módosítjuk a CSS-t és írjuk ki a hibát
        function beallitHiba(mezoID, hibaUzenetID, hiba) {
            var mezoElem = $('#' + mezoID);
            var hibaElem = $('#' + hibaUzenetID);
            
            if (hiba) {
                // Követelmény: CSS állítás (hiba esetén piros keret)
                // Hozzáadunk egy 'error' osztályt
                mezoElem.parent('.form-control').addClass('error');
                // Megjelenítjük a hibaüzenetet (ami eddig rejtve volt)
                hibaElem.show();
            } else {
                // Nincs hiba: eltávolítjuk az 'error' osztályt
                mezoElem.parent('.form-control').removeClass('error');
                // Eltüntetjük a hibaüzenetet
                hibaElem.hide();
            }
        }

        // --- Ellenőrzések ---
        var vanHiba = false;

        // 1. Név ellenőrzése (nem lehet üres)
        var nevMezo = $('#nev');
        if (nevMezo.val().trim() === '') {
            beallitHiba('nev', 'nev-hiba', true);
            vanHiba = true;
        } else {
            beallitHiba('nev', 'nev-hiba', false);
        }

        // 2. Email ellenőrzése (egyszerű regex)
        var emailMezo = $('#email');
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        
        if (!emailPattern.test(emailMezo.val())) {
            beallitHiba('email', 'email-hiba', true);
            vanHiba = true;
        } else {
            beallitHiba('email', 'email-hiba', false);
        }
        
        // --- Eredmény ---
        if (!vanHiba) {
            // Ha nincs hiba, elküldhetnénk az űrlapot
            // De most csak egy üzenetet írunk ki
            alert('Köszönöm az ajánlatkérést! Az űrlap adatai érvényesek.');
            
            // Opcionális: űrlap alaphelyzetbe állítása
            urlap[0].reset();
        } else {
            // Ha hiba van, jelezzük
            console.log("Hiba az űrlap kitöltése során.");
        }
    });
}
fetch('hirek.json')
    .then(r => r.json())
    .then(data => {
      const box = document.getElementById('hirek-box');
      if (!box) return;

      const h = data.kiemelt; // { cim, leiras, link }
      box.innerHTML = `
        <h4>${h.cim}</h4>
        <p>${h.leiras}</p>
        <p><a href="${h.link}">Részletek →</a></p>
      `;
    })
    .catch(err => {
      console.error('Hír betöltési hiba:', err);
      const box = document.getElementById('hirek-box');
      if (box) box.textContent = 'A hír jelenleg nem érhető el.';
    });
// A $(document).ready(...) zárójele
});