(function () {
  "use strict";

  const PAGES_TO_SCAN = [
    { url: "index.html", title: "Home" },
    { url: "about.html", title: "About Us" },
    { url: "timeline.html", title: "Timeline" },
    { url: "phase1.html", title: "Phase 1: 17th-19th Centuries" },
    { url: "phase2.html", title: "Phase 2: 1848-1947" },
    { url: "phase3.html", title: "Phase 3: 1965-2000" },
    { url: "phase4.html", title: "Phase 4: 2000-Present" },
    { url: "language.html", title: "Language" },
    { url: "culture.html", title: "Culture" },
    { url: "archives.html", title: "Archives" },
    { url: "resources.html", title: "Resources" }
  ];

  const HEADER_SEL = "header[data-site-header='1']";

  function insertHeaderStyles() {
    if (document.getElementById("header-styles")) return;

    const css = `
      html { scrollbar-gutter: stable; }
      
      mark.search-highlight { background-color: #3c6d3c; color: #ffffff; padding: 0 2px; border-radius: 2px; }

      header[data-site-header="1"]{
        background:#F5F0E5; border-bottom:none; position:fixed; top:0; left:0; right:0; z-index:1000;
        transform:translateY(0); transition:transform .28s ease-in-out;
        font-family:'Exo', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      }
      header[data-site-header="1"].header-hidden{ transform:translateY(-100%); }
      
      body{ padding-top:var(--header-h, 55px); }
      body.no-header-space{ padding-top:0; }

      header[data-site-header="1"] .header-container{ width: 100%; max-width: none; margin: 0; padding: 0 40px; box-sizing: border-box; }
      header[data-site-header="1"] .header-content{ display:flex; align-items:center; justify-content:space-between; padding:.5rem 0; gap:1rem; min-height:55px; box-sizing:border-box; }
      
      header[data-site-header="1"] .logo{ text-align:left; text-decoration:none; color:inherit; padding:0 .5rem 0 0; display: flex; flex-direction: column; align-items: flex-start; justify-content: center; }
      header[data-site-header="1"] .logo-main{ font-family:'Exo', sans-serif; font-size:18px; font-weight:800; color:#701a1a; letter-spacing:0.02em; line-height:1; text-transform: uppercase; }
      header[data-site-header="1"] .logo-sub{ font-family:'Exo', sans-serif; font-size:11px; font-weight:600; color:#701a1a; letter-spacing:0.15em; line-height:1.2; margin-top:2px; text-transform: uppercase; }

      header[data-site-header="1"] .nav-menu{ display:none; align-items:center; justify-content:flex-end; gap:1.25rem; margin-left:auto; }
      @media (min-width:768px){ header[data-site-header="1"] .nav-menu{ display:flex; } }
      
      .nav-item-wrapper { position: relative; height: 100%; display: flex; align-items: center; }
      
      header[data-site-header="1"] .nav-link{ color:#050505; text-decoration:none; font-size:14px; font-weight:600; letter-spacing:.3px; transition:color .25s; display:inline-flex; align-items:center; padding:.5rem 0; cursor:pointer; line-height:1.5; white-space:nowrap; }
      header[data-site-header="1"] .nav-link:hover, 
      .nav-item-wrapper:hover .nav-link { color:#701a1a; }

      .dropdown-arrow { width: 10px; height: 10px; margin-left: 6px; stroke-width: 2.5; transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1); opacity: 0.6; }
      .nav-item-wrapper:hover .dropdown-arrow { transform: rotate(180deg); opacity: 1; }

      .dropdown-menu { position: absolute; top: 100%; left: 50%; transform: translateX(-50%) translateY(10px); width: 280px; background-color: #F5F0E5; border: 1px solid #E5DBCA; border-radius: 8px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); padding: 6px; opacity: 0; visibility: hidden; transition: all 0.25s cubic-bezier(0.165, 0.84, 0.44, 1); z-index: 1100; }
      .dropdown-menu::before { content: ''; position: absolute; top: -20px; left: 0; width: 100%; height: 20px; }
      .nav-item-wrapper:hover .dropdown-menu { opacity: 1; visibility: visible; transform: translateX(-50%) translateY(0); }

      .dropdown-item { display: block; padding: 10px 14px; text-decoration: none; border-radius: 6px; transition: background-color 0.2s ease, color 0.2s ease; margin-bottom: 2px; }
      .dropdown-item:last-child { margin-bottom: 0; }
      .dropdown-meta { display: block; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #8B2332; margin-bottom: 3px; transition: color 0.2s ease; }
      .dropdown-title { display: block; font-size: 13px; font-weight: 500; color: #1a1a1a; line-height: 1.3; transition: color 0.2s ease; }
      .dropdown-item:hover { background-color: #701a1a; }
      .dropdown-item:hover .dropdown-meta { color: rgba(255, 255, 255, 0.7); }
      .dropdown-item:hover .dropdown-title { color: #ffffff; }

      header[data-site-header="1"] .header-search{ display:none; align-items:center; gap:.5rem; position: relative; }
      @media (min-width:768px){ header[data-site-header="1"] .header-search{ display:flex; } }
      header[data-site-header="1"] .header-search input{ width:160px; height:32px; border-radius:6px; border:1px solid #E5DBCA; background:#F5F0E5; padding:0 10px; font-size:14px; line-height:32px; outline:none; }
      header[data-site-header="1"] .header-search input::placeholder{ color:#888; }
      header[data-site-header="1"] .header-search input:focus{ border-color:#8B2332; }
      header[data-site-header="1"] .header-search button{ height:32px; width:32px; border-radius:6px; border:1px solid #E5DBCA; background:#F5F0E5; cursor:pointer; display:inline-flex; align-items:center; justify-content:center; color:#333; }
      header[data-site-header="1"] .header-search button:hover{ color:#8B2332; border-color:#8B2332; }
      header[data-site-header="1"] .header-search button svg{ width:16px; height:16px; }

      .search-results-dropdown { position: absolute; top: 100%; right: 0; width: 300px; background: #F5F0E5; border: 1px solid #E5DBCA; border-radius: 6px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); margin-top: 8px; max-height: 400px; overflow-y: auto; z-index: 1001; display: none; }
      .search-results-dropdown.active { display: block; }
      .search-result-item { display: block; padding: 12px; text-decoration: none; border-bottom: 1px solid #E5DBCA; transition: background 0.1s; }
      .search-result-item:hover { background: #EAE4D5; }
      .search-result-title { display: block; color: #701a1a; font-weight: 700; font-size: 14px; margin-bottom: 4px; }
      .search-result-snippet { display: block; color: #666; font-size: 12px; line-height: 1.4; }
      .search-no-results { padding: 12px; color: #888; font-size: 13px; text-align: center; }
      
      header[data-site-header="1"] .mobile-menu-btn{ display:block; background:none; border:none; cursor:pointer; padding:.5rem; color:#333; }
      @media (min-width:768px){ header[data-site-header="1"] .mobile-menu-btn{ display:none; } }
      header[data-site-header="1"] .mobile-menu-btn svg{ width:22px; height:22px; }
      
      header[data-site-header="1"] .mobile-nav-menu{ display:none; position:fixed; top:var(--header-h, 55px); left:0; right:0; background:#F5F0E5; border-bottom:1px solid #e5e5e5; box-shadow:0 4px 6px -1px rgba(0,0,0,.1); z-index:990; max-height:calc(100vh - var(--header-h, 55px)); overflow-y:auto; }
      header[data-site-header="1"] .mobile-nav-menu.active{ display:block; }
      
      .mobile-search-wrapper { padding: 15px 20px; border-bottom: 1px solid #E5DBCA; }
      .mobile-search-inner { display: flex; align-items: center; background: #ffffff; border: 1px solid #c2b49a; border-radius: 6px; padding: 0 10px; height: 40px; }
      .mobile-search-inner svg { width: 20px; height: 20px; color: #888; margin-right: 8px; flex-shrink: 0; }
      .mobile-search-inner input { border: none; background: transparent; height: 100%; width: 100%; font-size: 16px; outline: none; color: #333; }
      .mobile-search-results { display: none; background: #F5F0E5; }
      .mobile-search-results.active { display: block; border-top: 1px solid #E5DBCA; }
      
      header[data-site-header="1"] .mobile-nav-item{ border-bottom:1px solid #E5DBCA; }
      
      .mobile-link-row { display: flex; align-items: center; justify-content: space-between; padding-right: 15px; }
      header[data-site-header="1"] .mobile-nav-link{ flex-grow: 1; display:block; padding:1rem 1.5rem; color:#333; text-decoration:none; font-size:18px; font-weight:700; transition:background-color .2s, color .2s; }
      header[data-site-header="1"] .mobile-nav-link:hover{ background-color:#EAE4D5; color:#8B2332; }

      .mobile-toggle-btn { background: none; border: none; cursor: pointer; padding: 10px; color: #333; display: flex; align-items: center; justify-content: center; }
      .mobile-toggle-btn svg { width: 16px; height: 16px; transition: transform 0.3s ease; stroke-width: 2.5; }
      .mobile-toggle-btn.active svg { transform: rotate(180deg); color: #8B2332; }
      
      .mobile-submenu-wrapper { max-height: 0; overflow: hidden; background-color: #efebd8; transition: max-height 0.3s ease-in-out; }
      .mobile-submenu-wrapper.active { max-height: 600px; }

      header[data-site-header="1"] .mobile-sub-link { display: block; padding: 1rem 1.5rem 1rem 2rem; color: #000000; text-decoration: none; font-size: 16px; font-weight: 500; border-bottom: 1px solid #e0d6c2; line-height: 1.4; }
      header[data-site-header="1"] .mobile-sub-link:hover { background-color: #e6dfcd; color: #701a1a; }
      
      @media (min-width:1024px){ header[data-site-header="1"] .nav-menu{ gap:1.5rem; }
      /* --- LOGO HOVER EFFECT: Red Block Invert (Desktop Only) --- */
     /* --- LOGO HOVER EFFECT: Sticker Cutout (Clean & Flat) --- */
      @media (min-width: 1024px) {
        header[data-site-header="1"] .logo {
     
          padding: 0 10px; 
     
          
        }

        header[data-site-header="1"] .logo-main {
          /* 让描边长在文字后面，保证白色文字不被挤瘦 */
          paint-order: stroke fill;
          transition: all 0.2s ease;
  
          -webkit-text-stroke: 0px transparent;
        }

        header[data-site-header="1"] .logo-sub {
          paint-order: stroke fill;
          transition: all 0.2s ease;
          -webkit-text-stroke: 0px transparent;
        }

       
      

        header[data-site-header="1"] .logo:hover .logo-main {
          color: #000; 
          -webkit-text-stroke: 5px #701a1a;
        }

        header[data-site-header="1"] .logo:hover .logo-sub {
          color: #000;
          margin-top: 2px; 
          -webkit-text-stroke: 2px #701a1a; 
        }
      }
       
        }
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
              <div class="logo-sub">IN THE AMERICAS</div>
            </a>
            
            <nav class="nav-menu" aria-label="Primary">
              <a href="about.html" class="nav-link">About</a>
              
              <div class="nav-item-wrapper">
                <a href="timeline.html" class="nav-link">
                    Timeline
                    <svg class="dropdown-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path></svg>
                </a>
                <div class="dropdown-menu">
                  <a href="phase1.html" class="dropdown-item">
                    <span class="dropdown-meta">01. 17th–19th Centuries</span>
                    <span class="dropdown-title">Early Migration within Southeast Asia</span>
                  </a>
                  <a href="phase2.html" class="dropdown-item">
                    <span class="dropdown-meta">02. 1848–1947</span>
                    <span class="dropdown-title">Building North America & The Pacific</span>
                  </a>
                  <a href="phase3.html" class="dropdown-item">
                    <span class="dropdown-meta">03. 1965–2000</span>
                    <span class="dropdown-title">Reforms, Refugees, and American Dream</span>
                  </a>
                  <a href="phase4.html" class="dropdown-item">
                    <span class="dropdown-meta">04. 2000–Present</span>
                    <span class="dropdown-title">Diversification and Cultural Resilience</span>
                  </a>
                </div>
              </div>

              <a href="language.html" class="nav-link">Language</a>
              <a href="culture.html" class="nav-link">Culture</a>
              <a href="archives.html" class="nav-link">Archives</a>
              <a href="resources.html" class="nav-link">Resources</a>
              
              <div class="header-search" id="desktopSearchWrapper">
                <input id="desktopSearchInput" type="search" placeholder="Search..." autocomplete="off" />
                <button type="button"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z" /></svg></button>
                <div id="desktopSearchResults" class="search-results-dropdown"></div>
              </div>
            </nav>

            <button class="mobile-menu-btn" id="mobileMenuBtn"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg></button>
          </div>

          <nav class="mobile-nav-menu" id="mobileNavMenu">
            <div class="mobile-search-wrapper" id="mobileSearchWrapper">
               <div class="mobile-search-inner">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z" /></svg>
                  <input id="mobileSearchInput" type="search" placeholder="" autocomplete="off" />
               </div>
               <div id="mobileSearchResults" class="mobile-search-results"></div>
            </div>

            <div class="mobile-nav-item"><a href="about.html" class="mobile-nav-link">About</a></div>
            
            <div class="mobile-nav-item">
                <div class="mobile-link-row">
                    <a href="timeline.html" class="mobile-nav-link">Timeline</a>
                    <button class="mobile-toggle-btn" id="mobileTimelineToggle" aria-label="Toggle Submenu">
                         <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                </div>
                <div class="mobile-submenu-wrapper" id="mobileTimelineSubmenu">
                    <a href="phase1.html" class="mobile-sub-link">01. Early Migration within Southeast Asia</a>
                    <a href="phase2.html" class="mobile-sub-link">02. Building North America & The Pacific</a>
                    <a href="phase3.html" class="mobile-sub-link">03. Reforms, Refugees, and American Dream</a>
                    <a href="phase4.html" class="mobile-sub-link">04. Diversification and Cultural Resilience</a>
                </div>
            </div>

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

  function initAutoIndexSearch() {
    let searchIndex = [];
    let isIndexed = false;
    let isFetching = false;

    async function fetchData() {
      if (isIndexed || isFetching) return;
      isFetching = true;
      
      const promises = PAGES_TO_SCAN.map(page => 
        fetch(page.url).then(res => { if (!res.ok) throw new Error("404"); return res.text(); })
          .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html");
            const header = doc.querySelector("header[data-site-header='1']");
            if(header) header.remove();
            doc.querySelectorAll("script, style, nav").forEach(el => el.remove());
            const textContent = (doc.body.textContent || "").replace(/\s+/g, " ").trim();
            return { url: page.url, title: page.title, content: textContent };
          }).catch(err => null)
      );
      
      const results = await Promise.all(promises);
      searchIndex = results.filter(item => item !== null);
      isIndexed = true;
    }

    function bindSearch(wrapperId, inputId, resultsId) {
      const wrapper = document.getElementById(wrapperId);
      const input = document.getElementById(inputId);
      const resultsContainer = document.getElementById(resultsId);
      if (!wrapper || !input || !resultsContainer) return;

      input.addEventListener("focus", async () => {
        await fetchData();
        if (input.value.trim()) performSearch(input.value.trim());
      });

      input.addEventListener("input", (e) => performSearch(e.target.value.trim()));

      function performSearch(query) {
        if (!isIndexed) {
          resultsContainer.innerHTML = `<div class="search-no-results">Loading...</div>`;
          resultsContainer.classList.add("active");
          return;
        }
        if (!query) {
          resultsContainer.classList.remove("active");
          return;
        }

        const lowerQ = query.toLowerCase();
        const hits = searchIndex.filter(page => 
          page.title.toLowerCase().includes(lowerQ) || page.content.toLowerCase().includes(lowerQ)
        );
        renderResults(hits, query);
      }

      function renderResults(hits, query) {
        resultsContainer.innerHTML = "";
        if (hits.length === 0) {
          resultsContainer.innerHTML = `<div class="search-no-results">No results found</div>`;
        } else {
          hits.forEach(hit => {
            const lowerContent = hit.content.toLowerCase();
            const lowerQ = query.toLowerCase();
            let snippet = "";
            const idx = lowerContent.indexOf(lowerQ);
            if (idx !== -1) {
              const start = Math.max(0, idx - 40);
              const end = Math.min(hit.content.length, idx + 60);
              snippet = "..." + hit.content.substring(start, end) + "...";
            } else {
              snippet = hit.content.substring(0, 80) + "...";
            }

            const link = document.createElement("a");
            link.href = `${hit.url}?highlight=${encodeURIComponent(query)}`;
            link.className = "search-result-item";
            link.innerHTML = `
              <span class="search-result-title">${hit.title}</span>
              <span class="search-result-snippet">${snippet}</span>
            `;
            resultsContainer.appendChild(link);
          });
        }
        resultsContainer.classList.add("active");
      }

      document.addEventListener("click", (e) => {
        if (!wrapper.contains(e.target)) {
            resultsContainer.classList.remove("active");
        }
      });
    }

    bindSearch("desktopSearchWrapper", "desktopSearchInput", "desktopSearchResults");
    bindSearch("mobileSearchWrapper", "mobileSearchInput", "mobileSearchResults");
  }

  function initHighlighter() {
    const params = new URLSearchParams(window.location.search);
    const term = params.get("highlight");
    if (!term || term.length < 2) return;

    const root = document.body;
    const walk = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
    const nodes = [];
    const lowerTerm = term.toLowerCase();

    while(walk.nextNode()) {
      const node = walk.currentNode;
      const parent = node.parentNode;
      if (parent && (parent.tagName === "SCRIPT" || parent.tagName === "STYLE" || parent.closest("header") || parent.tagName === "INPUT")) continue;
      if (node.nodeValue.toLowerCase().includes(lowerTerm)) nodes.push(node);
    }

    nodes.forEach(node => {
      const text = node.nodeValue;
      const regex = new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
      const span = document.createElement("span");
      span.innerHTML = text.replace(regex, '<mark class="search-highlight">$1</mark>');
      node.parentNode.replaceChild(span, node);
    });

    const firstMark = document.querySelector("mark.search-highlight");
    if (firstMark) setTimeout(() => firstMark.scrollIntoView({ behavior: "smooth", block: "center" }), 500);
  }

  function initMobileMenu() {
    const headerEl = document.querySelector(HEADER_SEL);
    if (!headerEl) return;
    const btn = headerEl.querySelector("#mobileMenuBtn");
    const menu = headerEl.querySelector("#mobileNavMenu");
    
    const timelineToggle = headerEl.querySelector("#mobileTimelineToggle");
    const timelineSubmenu = headerEl.querySelector("#mobileTimelineSubmenu");
    
    if (timelineToggle && timelineSubmenu) {
      timelineToggle.addEventListener("click", function(e) {
        e.preventDefault();
        e.stopPropagation();
        const isActive = timelineSubmenu.classList.contains("active");
        
        if (isActive) {
            timelineSubmenu.classList.remove("active");
            timelineToggle.classList.remove("active");
        } else {
            timelineSubmenu.classList.add("active");
            timelineToggle.classList.add("active");
        }
      });
    }

    if (!btn || !menu) return;
    const path = btn.querySelector("svg path");
    function setOpen(open) {
      menu.classList.toggle("active", open);
      if(path) path.setAttribute("d", open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16");
    }
    
    btn.addEventListener("click", () => setOpen(!menu.classList.contains("active")));
    
    headerEl.querySelectorAll(".mobile-nav-link, .mobile-sub-link").forEach((a) => {
      a.addEventListener("click", () => setOpen(false));
    });
    
    document.addEventListener("click", (e) => {
      if (!btn.contains(e.target) && !menu.contains(e.target)) setOpen(false);
    });
  }

  function boot() {
    insertHeaderStyles();
    insertHeaderHTML();
    initAutoIndexSearch();
    initMobileMenu();
    initAdaptiveHeaderHeight();
    initHighlighter();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, { once: true });
  } else {
    boot();
  }
})();
