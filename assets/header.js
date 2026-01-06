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
        padding-top:var(--header-h, 55px);
      }

      body.no-header-space{
        padding-top:0;
      }

      header[data-site-header="1"] .header-container{
        width: 100%;       
        max-width: none;   
        margin: 0;         
        padding: 0 40px;   
        box-sizing: border-box; 
      }

      header[data-site-header="1"] .header-content{
        display:flex;
        align-items:center;
        justify-content:space-between;
        padding:.5rem 0;
        gap:1rem;
        min-height:55px;
        box-sizing:border-box;
      }

      header[data-site-header="1"] .logo{
        text-align:left;
        text-decoration:none;
        color:inherit;
        padding:0 .5rem 0 0; 
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
      }

      header[data-site-header="1"] .logo-main{
        font-family:'Exo', sans-serif;
        font-size:18px;
        font-weight:800;
        color:#701a1a;
        letter-spacing:0.02em; 
        line-height:1;
        text-transform: uppercase;
      }

      header[data-site-header="1"] .logo-sub{
        font-family:'Exo', sans-serif;
        font-size:11px;
        font-weight:600;
        color:#701a1a;
        letter-spacing:0.15em;
        line-height:1.2;
        margin-top:2px;
        text-transform: uppercase;
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
        color:#050505;
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

      /* Search Styles - Updated for Dropdown */
      header[data-site-header="1"] .header-search{
        display:none;
        align-items:center;
        gap:.5rem;
        position: relative; /* Essential for dropdown positioning */
      }

      @media (min-width:768px){
        header[data-site-header="1"] .header-search{ display:flex; }
      }

      header[data-site-header="1"] .header-search input{
        width:140px; /* Slightly wider */
        max-width:20vw;
        height:32px;
        border-radius:6px;
        border:1px solid #E5DBCA;
        background:#F5F0E5;
        padding:0 10px;
        font-size:14px;
        line-height:32px;
        outline:none;
        transition: border-color 0.2s, width 0.2s;
      }

      header[data-site-header="1"] .header-search input::placeholder{
        color:#888;
      }

      header[data-site-header="1"] .header-search input:focus{
        border-color:#8B2332;
        width: 180px; /* Expand on focus */
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

      /* Search Results Dropdown Styles */
      .search-results-dropdown {
        position: absolute;
        top: 100%;
        right: 0;
        width: 280px;
        background: #fff;
        border: 1px solid #E5DBCA;
        border-radius: 6px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        margin-top: 8px;
        max-height: 300px;
        overflow-y: auto;
        z-index: 1001;
        display: none;
      }
      
      .search-results-dropdown.active {
        display: block;
      }

      .search-result-item {
        display: block;
        padding: 10px 12px;
        text-decoration: none;
        border-bottom: 1px solid #f0f0f0;
        transition: background 0.1s;
      }

      .search-result-item:last-child {
        border-bottom: none;
      }

      .search-result-item:hover, .search-result-item.selected {
        background: #F9F6F0;
      }

      .search-result-title {
        display: block;
        color: #701a1a;
        font-weight: 700;
        font-size: 14px;
        margin-bottom: 2px;
      }

      .search-result-intro {
        display: block;
        color: #666;
        font-size: 12px;
        line-height: 1.3;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      
      .search-no-results {
        padding: 12px;
        color: #888;
        font-size: 13px;
        text-align: center;
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
        top:var(--header-h, 55px);
        left:0; right:0;
        background:#F5F0E5;
        border-bottom:1px solid #e5e5e5;
        box-shadow:0 4px 6px -1px rgba(0,0,0,.1);
        z-index:990;
        max-height:calc(100vh - var(--header-h, 55px));
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
        font-weight:600;
        transition:background-color .2s, color .2s;
      }

      header[data-site-header="1"] .mobile-nav-link:hover,
      header[data-site-header="1"] .mobile-nav-link:active{
        background-color:#EAE4D5;
        color:#8B2332;
      }

      @media (min-width:1024px){
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
              <div class="logo-sub">IN THE AMERICAS</div>
            </a>

            <nav class="nav-menu" aria-label="Primary">
              <a href="about.html" class="nav-link">About</a>
              <a href="timeline.html" class="nav-link">Timeline</a>
              <a href="language.html" class="nav-link">Language</a>
              <a href="culture.html" class="nav-link">Culture</a>
              <a href="archives.html" class="nav-link">Archives</a>
              <a href="resources.html" class="nav-link">Resources</a>

              <!-- Search Form -->
              <div class="header-search" id="siteSearchWrapper">
                <input id="siteSearchInput" type="search" placeholder="Search..." autocomplete="off" aria-label="Search site" />
                <button type="button" aria-label="Submit search">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z" />
                  </svg>
                </button>
                <!-- Dropdown Results Container -->
                <div id="searchResults" class="search-results-dropdown"></div>
              </div>
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
    window.addEventListener("load", () => requestAnimationFrame(update), { once: true });
  }

  // --- NEW: Internal Search Logic ---
  function initSiteSearch() {
    const wrapper = document.getElementById("siteSearchWrapper");
    const input = document.getElementById("siteSearchInput");
    const resultsContainer = document.getElementById("searchResults");
    
    if (!wrapper || !input || !resultsContainer) return;

    let searchData = null;
    let isFetching = false;

    // 1. Fetch data on first focus to save bandwidth
    input.addEventListener("focus", () => {
      if (!searchData && !isFetching) {
        isFetching = true;
        fetch("/search.json")
          .then(response => {
            if (!response.ok) throw new Error("Search index not found");
            return response.json();
          })
          .then(data => {
            searchData = data;
            // If user already typed something while loading
            if (input.value.trim()) performSearch(input.value.trim());
          })
          .catch(err => {
            console.error("Failed to load search index:", err);
            // Fallback to Google if json fails? Optional.
            searchData = []; 
          });
      }
    });

    // 2. Search Logic
    function performSearch(query) {
      if (!searchData) return; // Data not ready
      if (!query) {
        resultsContainer.classList.remove("active");
        return;
      }

      const lowerQ = query.toLowerCase();
      // Simple filter: Check title or intro
      const hits = searchData.filter(item => {
        const title = (item.title || "").toLowerCase();
        const intro = (item.intro || "").toLowerCase();
        return title.includes(lowerQ) || intro.includes(lowerQ);
      });

      renderResults(hits);
    }

    // 3. Render HTML
    function renderResults(hits) {
      resultsContainer.innerHTML = "";
      
      if (hits.length === 0) {
        resultsContainer.innerHTML = `<div class="search-no-results">No results found</div>`;
      } else {
        hits.slice(0, 8).forEach(hit => { // Limit to 8 results
          const a = document.createElement("a");
          a.href = hit.url;
          a.className = "search-result-item";
          a.innerHTML = `
            <span class="search-result-title">${hit.title}</span>
            <span class="search-result-intro">${hit.intro || ""}</span>
          `;
          resultsContainer.appendChild(a);
        });
      }
      resultsContainer.classList.add("active");
    }

    // 4. Input Events
    input.addEventListener("input", (e) => {
      performSearch(e.target.value.trim());
    });

    // 5. Close when clicking outside
    document.addEventListener("click", (e) => {
      if (!wrapper.contains(e.target)) {
        resultsContainer.classList.remove("active");
      }
    });
    
    // 6. Handle pressing Enter (optional, select first result)
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const first = resultsContainer.querySelector(".search-result-item");
        if (first) first.click();
      }
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
