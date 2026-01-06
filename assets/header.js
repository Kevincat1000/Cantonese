(function () {
  "use strict";

  const HEADER_SEL = "header[data-site-header='1']";

  // --- 配置区域：您的所有页面列表 ---
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

  // --- 1. CSS 样式 ---
  function insertHeaderStyles() {
    if (document.getElementById("header-styles")) return;

    const css = `
      html { scrollbar-gutter: stable; }
      
      /* 高亮颜色 */
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

      /* Desktop Search Styles */
      header[data-site-header="1"] .header-search{ display:none; align-items:center; gap:.5rem; position: relative; }
      @media (min-width:768px){ header[data-site-header="1"] .header-search{ display:flex; } }
      
      /* 修改：移除了 transition 和 focus 时的宽度变化 */
      header[data-site-header="1"] .header-search input{ width:140px; height:32px; border-radius:6px; border:1px solid #E5DBCA; background:#F5F0E5; padding:0 10px; font-size:14px; line-height:32px; outline:none; transition: border-color 0.2s; }
      header[data-site-header="1"] .header-search input::placeholder{ color:#888; }
      header[data-site-header="1"] .header-search input:focus{ border-color:#8B2332; }
      
      header[data-site-header="1"] .header-search button{ height:32px; width:32px; border-radius:6px; border:1px solid #E5DBCA; background:#F5F0E5; cursor:pointer; display:inline-flex; align-items:center; justify-content:center; color:#333; }
      header[data-site-header="1"] .header-search button:hover{ color:#8B2332; border-color:#8B2332; }
      header[data-site-header="1"] .header-search button svg{ width:16px; height:16px; }

      /* Dropdown Results (Desktop) - 修改：背景色改为淡米色 #F5F0E5 */
      .search-results-dropdown { position: absolute; top: 100%; right: 0; width: 300px; background: #F5F0E5; border: 1px solid #E5DBCA; border-radius: 6px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); margin-top: 8px; max-height: 400px; overflow-y: auto; z-index: 1001; display: none; }
      .search-results-dropdown.active { display: block; }
      
      .search-result-item { display: block; padding: 12px; text-decoration: none; border-bottom: 1px solid #E5DBCA; transition: background 0.1s; }
      /* 修改：Hover 颜色加深一点点 */
      .search-result-item:hover { background: #EAE4D5; }
      
      .search-result-title { display: block; color: #701a1a; font-weight: 700; font-size: 14px; margin-bottom: 4px; }
      .search-result-snippet { display: block; color: #666; font-size: 12px; line-height: 1.4; }
      .search-no-results { padding: 12px; color: #888; font-size: 13px; text-align: center; }
      
      /* Mobile Menu */
      header[data-site-header="1"] .mobile-menu-btn{ display:block; background:none; border:none; cursor:pointer; padding:.5rem; color:#333; }
      @media (min-width:768px){ header[data-site-header="1"] .mobile-menu-btn{ display:none; } }
      header[data-site-header="1"] .mobile-menu-btn svg{ width:22px; height:22px; }
      
      header[data-site-header="1"] .mobile-nav-menu{ display:none; position:fixed; top:var(--header-h, 55px); left:0; right:0; background:#F5F0E5; border-bottom:1px solid #e5e5e5; box-shadow:0 4px 6px -1px rgba(0,0,0,.1); z-index:990; max-height:calc(100vh - var(--header-h, 55px)); overflow-y:auto; }
      header[data-site-header="1"] .mobile-nav-menu.active{ display:block; }
      header[data-
