/**
 * Header Component for Cantonese in Americas
 * - Injects header HTML + CSS
 * - Keeps header height in CSS var: --header-h (auto)
 * - Does NOT touch body padding (pages control layout)
 */

(function () {
  "use strict";

  if (document.querySelector("header")) return;

  function injectStyles() {
    const css = `
<style id="header-styles">
  :root{ --header-h: 64px; }

  header{
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 9999;
    background: #F5F0E5;
    border-bottom: none;
    transform: translateY(0);
    transition: transform .28s ease;
    will-change: transform;
  }
  header.header-hidden{ transform: translateY(-110%); }

  header, header *{
    font-family: 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }

  header .header-container{
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  header .header-content{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.65rem 1rem;
    gap: 1rem;
  }

  header .logo{
    text-align: center;
    padding: 0 0.35rem;
    text-decoration: none;
    color: inherit;
    user-select: none;
  }

  header .logo-main{
    font-size: 18px;
    font-weight: 700;
    color: #8B2332;
    letter-spacing: 0.5px;
    line-height: 1.15;
  }

  header .logo-sub{
    font-size: 14px;
    font-weight: 700;
    color: #8B2332;
    letter-spacing: 2px;
    line-height: 1.15;
  }

  header .nav-menu{
    display: none;
    align-items: center;
    gap: 1.5rem;
  }
  @media (min-width: 768px){
    header .nav-menu{ display:flex; }
  }

  header .nav-link{
    color: #333;
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.3px;
    padding: 0.4rem 0;
    white-space: nowrap;
  }
  header .nav-link:hover{ opacity: .9; }

  header .mobile-menu-btn{
    display: block;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.4rem;
    color: #333;
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
  }
  header .mobile-menu-btn svg{ width: 24px; height: 24px; }
  @media (min-width: 768px){
    header .mobile-menu-btn{ display:none; }
  }

  header .mobile-nav-menu{
    display: none;
    position: fixed;
    top: var(--header-h);
    left: 0; right: 0;
    background: #F5F0E5;
    border-bottom: 1px solid #E5DBCA;
    box-shadow: 0 6px 16px rgba(0,0,0,0.10);
    z-index: 9998;
    max-height: calc(100vh - var(--header-h));
    overflow-y: auto;
  }
  header .mobile-nav-menu.active{ display:block; }

  header .mobile-nav-item{ border-bottom: 1px solid #E5DBCA; }
  header .mobile-nav-link{
    display:block;
    padding: 1rem 1.25rem;
    color:#333;
    text-decoration:none;
    font-size:16px;
    font-weight:500;
  }
  header .mobile-nav-link:hover{ background:#EAE4D5; }

  @media (min-width: 1024px){
    header .header-container{ padding: 0 2rem; }
    header .header-content{ padding: 0.65rem 2rem; }
    header .nav-menu{ gap: 2rem; }
  }
</style>`;
    document.head.insertAdjacentHTML("beforeend", css);
  }

  function injectHTML() {
    const html = `
<header>
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
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
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
</header>`;
    document.body.insertAdjacentHTML("afterbegin", html);
  }

  function setHeaderHeight() {
    const header = document.querySelector("header");
    if (!header) return;

    const h = Math.ceil(header.getBoundingClientRect().height);
    if (h > 0) document.documentElement.style.setProperty("--header-h", h + "px");
  }

  function initHeightAutoUpdate() {
    setHeaderHeight();

    requestAnimationFrame(() => {
      setHeaderHeight();
      setTimeout(setHeaderHeight, 60);
    });

    window.addEventListener("resize", () => {
      requestAnimationFrame(setHeaderHeight);
    });

    if ("ResizeObserver" in window) {
      const header = document.querySelector("header");
      if (header) {
        const ro = new ResizeObserver(() => setHeaderHeight());
        ro.observe(header);
      }
    }

    document.fonts?.ready?.then(() => setHeaderHeight()).catch(() => {});
  }

  function initMobileMenu() {
    const btn = document.getElementById("mobileMenuBtn");
    const menu = document.getElementById("mobileNavMenu");
    if (!btn || !menu) return;

    const iconPath = btn.querySelector("svg path");

    function open() {
      menu.classList.add("active");
      iconPath?.setAttribute("d", "M6 18L18 6M6 6l12 12");
      btn.setAttribute("aria-label", "Close menu");
    }
    function close() {
      menu.classList.remove("active");
      iconPath?.setAttribute("d", "M4 6h16M4 12h16M4 18h16");
      btn.setAttribute("aria-label", "Open menu");
    }

    btn.addEventListener("click", () => {
      menu.classList.contains("active") ? close() : open();
    });

    menu.querySelectorAll(".mobile-nav-link").forEach((a) => {
      a.addEventListener("click", close);
    });

    document.addEventListener("click", (e) => {
      if (!btn.contains(e.target) && !menu.contains(e.target)) close();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
  }

  function init() {
    injectStyles();
    injectHTML();
    initHeightAutoUpdate();
    initMobileMenu();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
