(function () {
  "use strict";

  const HEADER_SEL = "header[data-site-header='1']";

  function insertHeaderStyles() {
    if (document.getElementById("header-styles")) return;

    const css = `
      html {
        scrollbar-gutter: stable;
      }

      header[data-site-header="1"]{
        background:#F5F0E5;
        border-bottom:none;
        position:fixed;
        top:0; left:0; right:0;
        z-index:1000;
        transform:translateY(0);
        transition:transform .28s ease-in-out;
        font-family:'Exo', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      }

      header[data-site-header="1"].header-hidden{
        transform:translateY(-100%);
      }

      body{
        padding-top:var(--header-h, 48px);
      }

      body.no-header-space{
        padding-top:0;
      }

      header[data-site-header="1"] .header-container{
        max-width:1280px;
        margin:0 auto;
        /* ✅ 修改点：左右间距固定为 40px，与 Culture 页面的文字对齐 */
        padding:0 40px; 
      }

      header[data-site-header="1"] .header-content{
        display:flex;
        align-items:center;
        justify-content:space-between;
        padding:.5rem 0;
        gap:1rem;
        height:48px;
        box-sizing:border-box;
      }

      header[data-site-header="1"] .logo{
        text-align:center;
        text-decoration:none;
        color:inherit;
        /* 为了让文字严格左对齐 40px 线，稍微减少 Logo 自身的左内边距，或者保持现状视视觉效果而定 */
        padding:0 .5rem 0 0; 
        display: flex;
        flex-direction: column;
        align-items: flex-start; /* 确保 Logo 文字左对齐 */
      }

      header[data-site-header="1"] .logo-main{
        font-family:'Exo', sans-serif;
        font-size:18px;
        font-weight:700;
        color:#701a1a;
        letter-spacing:.5px;
        line-height:1.2;
      }

      header[data-site-header="1"] .logo-sub{
        font-family:'Exo', sans-serif;
        font-size:14px;
        font-weight:700;
        color:#701a1a;
        letter-spacing:2px;
        line-height:1.2;
      }

      header[data-site-header="1"] .nav-menu{
        display:none;
        align-items:center;
        justify-content:flex-end;
        gap:1.25rem;
        margin-left:auto;
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
        color:#701a1a;
      }

      header[data-site-header="1"] .header-search{
        display:none;
        align-items:center;
        gap:.5rem;
      }

      @media (min-width:768px){
        header[data-site-header="1"] .header-search{ display:flex; }
      }

      header[data-site-header="1"] .header-search input{
        width:100px;
        max-width:16vw;
        height:32px;
        border-radius:6px;
        border:1px solid #E5DBCA;
        background:#F5F0E5;
        padding:0 10px;
        font-size:14px;
        line-height:32px;
        outline:none;
      }

      header[data-site-header="1"] .header-search input::placeholder{
        color:#666;
      }

      header[data-site-header="1"] .header-search input:focus{
        border-color:#8B2332;
      }

      header[data-site-header="1"] .header-search button{
        height:32px;
        width:32px;
        border-radius:6px;
        border:1px solid #E5DBCA;
        background:#F5F0E5;
        cursor:pointer;
        display:inline-flex;
        align-items:center;
        justify-content:center;
        color:#333;
      }

      header[data-site-header="1"] .header-search button:hover{
        color:#8B2332;
        border-color:#8B2332;
      }

      header[data-site-header="1"] .header-search button svg{
        width:16px;
        height:16px;
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
        width:22px;
        height:22px;
      }

      header[data-site-header="1"] .mobile-nav-menu{
        display:none;
        position:fixed;
        top:var(--header-h, 48px);
        left:0; right:0;
        background:#F5F0E5;
        border-bottom:1px solid #e5e5e5;
        box-shadow:0 4px 6px -1px rgba(0,0,0,.1);
        z-index:990;
        max-height:calc(100vh - var(--header-h, 48px));
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
        /* ✅ 修改点：删除了这里对 padding 的覆盖，保持 40px 不变 */
        header[data-site-header="1"] .nav-menu{ gap:1.5rem; }
      }
    `;

    const style = document.createElement("style");
    style.id = "header-styles";
    style.textContent = css;
    document.head.appendChild(style);
  }

  function insertHeaderHTML() {
    const headerHTML = `
      <header data-site-header="1">
        <div class="header-container">
          <div class="header-content">
            <a href="index.html" class="logo" aria-label="Home">
              <div class="logo-main">CANTONESE</div>
              <div class="logo-sub">IN AMERICAS</div>
            </a>

            <nav class="nav-menu" aria-label="Primary">
              <a href="about.html" class="nav-link">About</a>
              <a href="timeline.html" class="nav-link">Timeline</a>
              <a href="language.html" class="nav-link">Language</a>
              <a href="culture.html" class="nav-link">Culture</a>
              <a href="archives.html" class="nav-link">Archives</a>
              <a href="resources.html" class="nav-link">Resources</a>

              <form class="header-search" id="siteSearchForm" role="search" aria-label="Site search">
                <input id="siteSearchInput" type="search" name="q" placeholder="Search" autocomplete="off" />
                <button type="submit" aria-label="Search">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z" />
                  </svg>
                </button>
              </form>
            </nav>

            <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Open menu" aria-expanded="false">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          <nav class="mobile-nav-menu" id="mobileNavMenu" aria-label="Mobile">
            <div class="mobile-nav-item"><a href="about.html" class="mobile-nav-link">About</a></div>
            <div class="mobile-nav-item"><a href="timeline.html" class="mobile-nav-link">Timeline</a></div>
            <div class="mobile-nav-item"><a href="language.html" class="mobile-nav-link">Language</a></div>
            <div class="mobile-nav-item"><a href="culture.html" class="mobile-nav-link">Culture</a></div>
            <div class="mobile-nav-item"><a href="archives.html" class="mobile-nav-link">Archives</a></div>
            <div class="mobile-nav-item"><a href="resources.html" class="mobile-nav-link">Resources</a></div>
          </nav>
        </div>
      </header>
    `;
    document.body.insertAdjacentHTML("afterbegin", headerHTML);
  }

  function initAdaptiveHeaderHeight() {
    const root = document.documentElement;
    const headerEl = document.querySelector(HEADER_SEL);
    if (!headerEl) return;

    let last = 0;

    const update = () => {
      const h = Math.round(headerEl.getBoundingClientRect().height);
      if (!h || h === last) return;
      last = h;
      root.style.setProperty("--header-h", h + "px");
    };

    requestAnimationFrame(update);

    if ("ResizeObserver" in window) {
      const ro = new ResizeObserver(() => requestAnimationFrame(update));
      ro.observe(headerEl);
    }

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => requestAnimationFrame(update)).catch(() => {});
    }

    window.addEventListener("load", () => requestAnimationFrame(update), { once: true });
  }

  function initSiteSearch() {
    const headerEl = document.querySelector(HEADER_SEL);
    if (!headerEl) return;

    const form = headerEl.querySelector("#siteSearchForm");
    const input = headerEl.querySelector("#siteSearchInput");
    if (!form || !input) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const q = (input.value || "").trim();
      if (!q) return;

      const host = location.hostname;
      const query = host ? `site:${host} ${q}` : q;
      window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_blank", "noopener");
    });
  }

  function initMobileMenu() {
    const headerEl = document.querySelector(HEADER_SEL);
    if (!headerEl) return;

    const btn = headerEl.querySelector("#mobileMenuBtn");
    const menu = headerEl.querySelector("#mobileNavMenu");
    if (!btn || !menu) return;

    const path = btn.querySelector("svg path");

    function setOpen(open) {
      menu.classList.toggle("active", open);
      if (path) path.setAttribute("d", open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16");
      btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    }

    btn.addEventListener("click", () => setOpen(!menu.classList.contains("active")));

    headerEl.querySelectorAll(".mobile-nav-link").forEach((a) => {
      a.addEventListener("click", () => setOpen(false));
    });

    document.addEventListener("click", (e) => {
      if (!btn.contains(e.target) && !menu.contains(e.target)) setOpen(false);
    });
  }

  function boot() {
    insertHeaderStyles();
    insertHeaderHTML();
    initSiteSearch();
    initMobileMenu();
    initAdaptiveHeaderHeight();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, { once: true });
  } else {
    boot();
  }
})();
