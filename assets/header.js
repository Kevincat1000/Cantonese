/**
 * Header Component for Cantonese in Americas
 * - Injects header HTML + CSS
 * - Fixed header + reserves space to prevent layout shift (CLS)
 * - Mobile menu support
 *
 * IMPORTANT:
 * This script runs ASAP (do NOT wait for DOMContentLoaded) to avoid "jitter"
 */

(function () {
  'use strict';

  const HEADER_H = 73; // px

  // If a header already exists, do nothing
  if (document.querySelector('header')) return;

  // Ensure CSS variable exists early (pages can also use it)
  document.documentElement.style.setProperty('--header-h', HEADER_H + 'px');

  function insertHeaderStyles() {
    if (document.getElementById('header-styles')) return;

    const styleEl = document.createElement('style');
    styleEl.id = 'header-styles';
    styleEl.textContent = `
      :root { --header-h: ${HEADER_H}px; }

      /* Reserve space from first paint (prevents layout shift when header arrives) */
      body { padding-top: var(--header-h); }

      header {
        background: #F5F0E5;
        border-bottom: none;
        position: fixed;
        top: 0; left: 0; right: 0;
        height: var(--header-h);
        z-index: 9999;
        transform: translateY(0);
        transition: transform 0.3s ease-in-out;
      }

      header.header-hidden { transform: translateY(-110%); }

      header .header-container {
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 1rem;
      }

      header .header-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.75rem 1rem;
        height: var(--header-h);
      }

      header .logo {
        text-align: center;
        padding: 0 0.5rem;
        text-decoration: none;
        transition: opacity 0.2s;
      }
      header .logo:hover { opacity: 0.9; }

      header .logo-main {
        font-family: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
        font-size: 24px;
        font-weight: 700;
        color: #8B2332;
        letter-spacing: 0.5px;
        line-height: 1.2;
      }
      header .logo-sub {
        font-family: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
        font-size: 16px;
        font-weight: 700;
        color: #8B2332;
        letter-spacing: 2px;
        line-height: 1.2;
      }

      header .nav-menu {
        display: none;
        align-items: center;
        gap: 1.5rem;
        position: relative;
      }
      @media (min-width: 768px) {
        header .nav-menu { display: flex; }
      }

      header .nav-link {
        color: #333;
        text-decoration: none;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 0.3px;
        transition: color 0.2s;
        display: inline-flex;
        align-items: center;
        gap: 0.25rem;
        padding: 0.5rem 0;
        cursor: pointer;
        line-height: 1.5;
        white-space: nowrap;
      }
      header .nav-link:hover { color: #8B2332; }

      header .mobile-menu-btn {
        display: block;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0.5rem;
        color: #333;
        transition: color 0.2s;
        -webkit-tap-highlight-color: transparent;
        touch-action: manipulation;
      }
      header .mobile-menu-btn:hover { color: #8B2332; }
      header .mobile-menu-btn svg { width: 24px; height: 24px; }

      @media (min-width: 768px) {
        header .mobile-menu-btn { display: none; }
      }

      header .mobile-nav-menu {
        display: none;
        position: fixed;
        top: var(--header-h);
        left: 0; right: 0;
        background: #F5F0E5;
        border-bottom: 1px solid #e5e5e5;
        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
        z-index: 9998;
        max-height: calc(100vh - var(--header-h));
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      }
      header .mobile-nav-menu.active { display: block; }

      header .mobile-nav-item { border-bottom: 1px solid #E5DBCA; }

      header .mobile-nav-link {
        display: block;
        padding: 1rem 1.5rem;
        color: #333;
        text-decoration: none;
        font-size: 16px;
        font-weight: 500;
        transition: background-color 0.15s, color 0.15s;
      }
      header .mobile-nav-link:hover,
      header .mobile-nav-link:active {
        background-color: #EAE4D5;
        color: #8B2332;
      }

      @media (min-width: 640px) {
        header .logo-main { font-size: 26px; }
        header .logo-sub  { font-size: 17px; }
      }
      @media (min-width: 1024px) {
        header .header-container { padding: 0 2rem; }
        header .header-content   { padding: 0.75rem 2rem; }
        header .nav-menu         { gap: 2rem; }
      }
    `;
    document.head.appendChild(styleEl);
  }

  function headerMarkup() {
    return `
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

            <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Open menu" aria-expanded="false">
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
      </header>
    `;
  }

  function insertHeaderHTML() {
    if (document.querySelector('header')) return;

    // If body isn't ready (rare with defer, but safe), wait one tick
    if (!document.body) {
      document.addEventListener('DOMContentLoaded', insertHeaderHTML, { once: true });
      return;
    }

    document.body.insertAdjacentHTML('afterbegin', headerMarkup());
  }

  function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNavMenu = document.getElementById('mobileNavMenu');

    if (!mobileMenuBtn || !mobileNavMenu) return;

    const iconPath = mobileMenuBtn.querySelector('svg path');

    function setOpen(open) {
      mobileNavMenu.classList.toggle('active', open);
      mobileMenuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      mobileMenuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      if (iconPath) {
        iconPath.setAttribute(
          'd',
          open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'
        );
      }
    }

    mobileMenuBtn.addEventListener('click', () => {
      setOpen(!mobileNavMenu.classList.contains('active'));
    });

    // Close menu when clicking a link
    mobileNavMenu.addEventListener('click', (e) => {
      const a = e.target.closest('a');
      if (a) setOpen(false);
    });

    // Click outside closes
    document.addEventListener('click', (e) => {
      if (!mobileNavMenu.classList.contains('active')) return;
      if (mobileMenuBtn.contains(e.target) || mobileNavMenu.contains(e.target)) return;
      setOpen(false);
    });

    // ESC closes
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') setOpen(false);
    });
  }

  // ✅ Run ASAP: styles first, then HTML, then menu
  insertHeaderStyles();
  insertHeaderHTML();
  // Menu init may run before elements exist if body not ready; handle gracefully:
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileMenu, { once: true });
  } else {
    initMobileMenu();
  }

})();
