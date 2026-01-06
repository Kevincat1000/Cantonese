(function () {
  "use strict";

  const HEADER_SEL = "header[data-site-header='1']";

  // --- 配置区域：您的所有页面列表 ---
  // 代码会自动去抓取这些页面的内容进行搜索
  const PAGES_TO_SCAN = [
    { url: "index.html", title: "Home" },
    { url: "about.html", title: "About Us" },
    { url: "timeline.html", title: "Timeline" },
    { url: "language.html", title: "Language" },
    { url: "culture.html", title: "Culture" },
    { url: "archives.html", title: "Archives" },
    { url: "resources.html", title: "Resources" },
    { url: "phase1.html", title: "Phase 1" },
    { url: "phase2.html", title: "Phase 2" },
    { url: "phase3.html", title: "Phase 3" },
    { url: "phase4.html", title: "Phase 4" }
  ];

  // --- 1. CSS 样式 (包含高亮和下拉菜单) ---
  function insertHeaderStyles() {
    if (document.getElementById("header-styles")) return;

    const css = `
      html { scrollbar-gutter: stable; }
      
      /* 高亮颜色：深绿背景白字 */
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
      
      header[data-site-header="1"] .nav-link{ color:#050505; text-decoration:none; font-size:14px; font-weight:600; letter-spacing:.3px; transition:color .25s; display:inline-flex; align-items:center; padding:.5rem 0; cursor:pointer; line-height:1.5; white-space:nowrap; }
      header[data-site-header="1"] .nav-link:hover{ color:#701a1a; }

      /* Search Styles */
      header[data-site-header="1"] .header-search{ display:none; align-items:center; gap:.5rem; position: relative; }
      @media (min-width:768px){ header[data-site-header="1"] .header-search{ display:flex; } }
      
      header[data-site-header="1"] .header-search input{ width:140px; max-width:20vw; height:32px; border-radius:6px; border:1px solid #E5DBCA; background:#F5F0E5; padding:0 10px; font-size:14px; line-height:32px; outline:none; transition: border-color 0.2s, width 0.2s; }
      header[data-site-header="1"] .header-search input::placeholder{ color:#888; }
      header[data-site-header="1"] .header-search input:focus{ border-color:#8B2332; width: 180px; }
      
      header[data-site-header="1"] .header-search button{ height:32px; width:32px; border-radius:6px; border:1px solid #E5DBCA; background:#F5F0E5; cursor:pointer; display:inline-flex; align-items:center; justify-content:center; color:#333; }
      header[data-site-header="1"] .header-search button:hover{ color:#8B2332; border-color:#8B2332; }
      header[data-site-header="1"] .header-search button svg{ width:16px; height:16px; }

      /* Dropdown Results */
      .search-results-dropdown { position: absolute; top: 100%; right: 0; width: 300px; background: #fff; border: 1px solid #E5DBCA; border-radius: 6px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); margin-top: 8px; max-height: 400px; overflow-y: auto; z-index: 1001; display: none; }
      .search-results-dropdown.active { display: block; }
      .search-result-item { display: block; padding: 12px; text-decoration: none; border-bottom: 1px solid #f0f0f0; transition: background 0.1s; }
      .search-result-item:hover { background: #F9F6F0; }
      .search-result-title { display: block; color: #701a1a; font-weight: 700; font-size: 14px; margin-bottom: 4px; }
      .search-result-snippet { display: block; color: #666; font-size: 12px; line-height: 1.4; }
      .search-no-results { padding: 12px; color: #888; font-size: 13px; text-align: center; }
      
      /* Mobile Menu */
      header[data-site-header="1"] .mobile-menu-btn{ display:block; background:none; border:none; cursor:pointer; padding:.5rem; color:#333; }
      @media (min-width:768px){ header[data-site-header="1"] .mobile-menu-btn{ display:none; } }
      header[data-site-header="1"] .mobile-menu-btn svg{ width:22px; height:22px; }
      header[data-site-header="1"] .mobile-nav-menu{ display:none; position:fixed; top:var(--header-h, 55px); left:0; right:0; background:#F5F0E5; border-bottom:1px solid #e5e5e5; box-shadow:0 4px 6px -1px rgba(0,0,0,.1); z-index:990; max-height:calc(100vh - var(--header-h, 55px)); overflow-y:auto; }
      header[data-site-header="1"] .mobile-nav-menu.active{ display:block; }
      header[data-site-header="1"] .mobile-nav-item{ border-bottom:1px solid #E5DBCA; }
      header[data-site-header="1"] .mobile-nav-link{ display:block; padding:1rem 1.5rem; color:#333; text-decoration:none; font-size:16px; font-weight:600; transition:background-color .2s, color .2s; }
      header[data-site-header="1"] .mobile-nav-link:hover{ background-color:#EAE4D5; color:#8B2332; }
      @media (min-width:1024px){ header[data-site-header="1"] .nav-menu{ gap:1.5rem; } }
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
              
              <!-- Search Wrapper -->
              <div class="header-search" id="siteSearchWrapper">
                <input id="siteSearchInput" type="search" placeholder="Search..." autocomplete="off" />
                <button type="button"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z" /></svg></button>
                <div id="searchResults" class="search-results-dropdown"></div>
              </div>
            </nav>
            <button class="mobile-menu-btn" id="mobileMenuBtn"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg></button>
          </div>
          <nav class="mobile-nav-menu" id="mobileNavMenu">
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

  // --- 2. 核心：自动抓取 HTML 并建立索引 ---
  function initAutoIndexSearch() {
    const wrapper = document.getElementById("siteSearchWrapper");
    const input = document.getElementById("siteSearchInput");
    const resultsContainer = document.getElementById("searchResults");
    if (!wrapper || !input || !resultsContainer) return;

    let searchIndex = []; // 存放所有页面的纯文本
    let isIndexed = false;
    let isFetching = false;

    // 当用户聚焦输入框时，开始去后台抓取所有页面
    input.addEventListener("focus", async () => {
      if (isIndexed || isFetching) return;
      isFetching = true;

      // 并行抓取所有页面
      const promises = PAGES_TO_SCAN.map(page => 
        fetch(page.url)
          .then(res => {
            if (!res.ok) throw new Error("404");
            return res.text();
          })
          .then(html => {
            // 解析 HTML
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html");
            
            // 移除 header, script, style, nav 以免搜到杂音
            const header = doc.querySelector("header[data-site-header='1']");
            if(header) header.remove();
            doc.querySelectorAll("script, style, nav").forEach(el => el.remove());

            // 获取纯文本
            const textContent = (doc.body.textContent || "").replace(/\s+/g, " ").trim();
            
            return {
              url: page.url,
              title: page.title,
              content: textContent
            };
          })
          .catch(err => null) // 如果某个页面抓取失败，忽略它
      );

      const results = await Promise.all(promises);
      searchIndex = results.filter(item => item !== null); // 过滤掉失败的
      isIndexed = true;
      
      // 如果用户已经在打字了，立刻搜索
      if (input.value.trim()) performSearch(input.value.trim());
    });

    function performSearch(query) {
      if (!isIndexed) {
        resultsContainer.innerHTML = `<div class="search-no-results">Loading index...</div>`;
        resultsContainer.classList.add("active");
        return;
      }
      if (!query) {
        resultsContainer.classList.remove("active");
        return;
      }

      const lowerQ = query.toLowerCase();
      // 搜索逻辑
      const hits = searchIndex.filter(page => {
        return page.title.toLowerCase().includes(lowerQ) || page.content.toLowerCase().includes(lowerQ);
      });

      renderResults(hits, query);
    }

    function renderResults(hits, query) {
      resultsContainer.innerHTML = "";
      if (hits.length === 0) {
        resultsContainer.innerHTML = `<div class="search-no-results">No results found</div>`;
      } else {
        hits.forEach(hit => {
          // 截取摘要：找到关键词前后的文字
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

          // 构造高亮链接
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

    input.addEventListener("input", (e) => performSearch(e.target.value.trim()));
    
    // 点击外部关闭
    document.addEventListener("click", (e) => {
      if (!wrapper.contains(e.target)) resultsContainer.classList.remove("active");
    });
  }

  // --- 3. 高亮功能 ---
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
    if (!btn || !menu) return;
    const path = btn.querySelector("svg path");
    function setOpen(open) {
      menu.classList.toggle("active", open);
      if(path) path.setAttribute("d", open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16");
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
