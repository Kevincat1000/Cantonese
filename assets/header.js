(function () {
  "use strict";

  if (document.querySelector("header[data-site-header='1']")) return;

  function insertHeaderStyles() {
    if (document.getElementById("header-styles")) return;

    const css = `
      header[data-site-header="1"]{
        background:#F5F0E5;
        border-bottom:none;
        position:fixed;
        top:0; left:0; right:0;
        z-index:50;
        transform:translateY(0);
        transition:transform .28s ease-in-out;
        font-family:'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      }

      header[data-site-header="1"].header-hidden{
        transform:translateY(-100%);
      }

      body{
        padding-top:var(--header-h, 73px);
      }

      body.no-header-space{
        padding-top:0;
      }

      header[data-site-header="1"] .header-container{
        max-width:1280px;
        margin:0 auto;
        padding:0 1rem;
      }

      header[data-site-header="1"] .header-content{
        display:flex;
        align-items:center;
        justify-content:space-between;
        padding:.75rem 1rem;
      }

      header[data-site-header="1"] .logo{
        text-align:center;
        padding:0 .5rem;
        text-decoration:none;
        color:inherit;
      }

      header[data-site-header="1"] .logo-main{
        font-size:21px;
        font-weight:700;
        color:#8B2332;
        letter-spacing:.5px;
        line-height:1.2;
      }

      header[data-site-header="1"] .logo-sub{
        font-size:14px;
        font-weight:700;
        color:#8B2332;
        letter-spacing:2px;
        line-height:1.2;
      }

      header[data-site-header="1"] .nav-menu{
        display:none;
        align-items:center;
        gap:1.5rem;
        position:relative;
      }

      @media (min-width:768px){
        header[data-site-header="1"] .nav-menu{ display:flex; }
      }

      header[data-site-header="1"] .nav-link{
        color:#333;
        text-decoration:none;
        font-size:14px;
        font-weight:600;
        letter-spacing:.3px;
        transition:color .25s;
        display:inline-flex;
        align-items:center;
        padding:.5rem 0;
        cursor:pointer;
        line-height:1.5;
        white-space:nowrap;
      }

      header[data-site-header="1"] .nav-link:hover{
        color:#8B2332;
      }

      header[data-site-header="1"] .mobile-menu-btn{
        display:block;
        background:none;
        border:none;
        cursor:pointer;
        padding:.5rem;
        color:#333;
      }

      @media (min-width:768px){
        header[data-site-header="1"] .mobile-menu-btn{ display:none; }
      }

      header[data-site-header="1"] .mobile-menu-btn svg{
        width:24px;
        height:24px;
      }

      header[data-site-header="1"] .mobile-nav-menu{
        display:none;
        position:fixed;
        top:var(--header-h, 73px);
        left:0; right:0;
        background:#F5F0E5;
        border-bottom:1px solid #e5e5e5;
        box-shadow:0 4px 6px -1px rgba(0,0,0,.1);
        z-index:40;
        max-height:calc(100vh - var(--header-h, 73px));
        overflow-y:auto;
      }

      header[data-site-header="1"] .mobile-nav-menu.active{
        display:block;
      }

      header[data-site-header="1"] .mobile-nav-item{
        border-bottom:1px solid #E5DBCA;
      }

      header[data-site-header="1"] .mobile-nav-link{
        display:block;
        padding:1rem 1.5rem;
        color:#333;
        text-decoration:none;
        font-size:16px;
        font-weight:500;
        transition:background-color .2s, color .2s;
      }

      header[data-site-header="1"] .mobile-nav-link:hover,
      header[data-site-header="1"] .mobile-nav-link:active{
        background-color:#EAE4D5;
        color:#8B2332;
      }

      @media (min-width:1024px){
        header[data-site-header="1"] .header-container{ padding:0 2rem; }
        header[data-site-header="1"] .header-content{ padding:.75rem 2rem; }
        header[data-site-header="1"] .nav-menu{ gap:2rem; }
      }
    `;

    const style = document.createElement("style");
    style.id = "header-styles";
    style.textContent = css;
    document.head.appendChild(style);
  }

  function insertHeaderHTML() {
    if (!document.body) return;

    const headerHTML = `
      <header data-site-header="1">
        <div class="header-container">
          <div class="header-content">
            <a href="index.html" class="logo" aria-label="Home">
              <div class="logo-main">CANTONESE</div>
              <div class="logo-sub">IN AMERICAS</div>
            </a>

            <nav class="nav-menu" aria-label="Primary">
              <a href="timeline.html" class="nav-link">Timeline</a>
              <a href="language.html" class="nav-link">Language Power</a>
              <a href="culture.html" class="nav-link">Culture Symbols</a>
              <a href="archives.html" class="nav-link">Archives</a>
              <a href="resources.html" class="nav-link">Resources</a>
            </nav>

            <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Open menu">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          <nav class="mobile-nav-menu" id="mobileNavMenu" aria-label="Mobile">
            <div class="mobile-nav-item"><a href="timeline.html" class="mobile-nav-link">Timeline</a></div>
            <div class="mobile-nav-item"><a href="language.html" class="mobile-nav-link">Language Power</a></div>
            <div class="mobile-nav-item"><a href="culture.html" class="mobile-nav-link">Culture Symbols</a></div>
            <div class="mobile-nav-item"><a href="archives.html" class="mobile-nav-link">Archives</a></div>
            <div class="mobile-nav-item"><a href="resources.html" class="mobile-nav-link">Resources</a></div>
          </nav>
        </div>
      </header>
    `;

    document.body.insertAdjacentHTML("afterbegin", headerHTML);

    const headerEl = document.querySelector("header[data-site-header='1']");
    if (headerEl) {
      const h = headerEl.offsetHeight || 73;
      document.documentElement.style.setProperty("--header-h", h + "px");
    }
  }

  function initMobileMenu() {
    const btn = document.getElementById("mobileMenuBtn");
    const menu = document.getElementById("mobileNavMenu");
    if (!btn || !menu) return;

    const path = btn.querySelector("svg path");

    function closeMenu() {
      menu.classList.remove("active");
      if (path) path.setAttribute("d", "M4 6h16M4 12h16M4 18h16");
      btn.setAttribute("aria-label", "Open menu");
    }

    btn.addEventListener("click", function () {
      menu.classList.toggle("active");
      const open = menu.classList.contains("active");
      if (path) path.setAttribute("d", open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16");
      btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    document.querySelectorAll(".mobile-nav-link").forEach((a) => {
      a.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", function (e) {
      if (!btn.contains(e.target) && !menu.contains(e.target)) closeMenu();
    });
  }

  function boot() {
    insertHeaderStyles();
    insertHeaderHTML();
    initMobileMenu();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, { once: true });
  } else {
    boot();
  }
})();
