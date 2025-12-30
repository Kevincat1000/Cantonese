// /assets/header.js
document.addEventListener("DOMContentLoaded", () => {
  const mount = document.getElementById("site-header");
  if (!mount) return;
  mount.innerHTML = `
<style>
/* Header */
header {
    background: white;
    border-bottom: 1px solid #e5e5e5;
    position: sticky;
    top: 0;
    z-index: 50;
}
.header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 1rem;
}
.logo {
    text-align: center;
    padding: 0 0.5rem;
    text-decoration: none;
    transition: opacity 0.3s;
}
.logo:hover {
    opacity: 0.9;
}
.logo-main {
    font-size: 24px;
    font-weight: bold;
    color: #8B2332;
    letter-spacing: 0.5px;
    line-height: 1.2;
}
.logo-sub {
    font-size: 16px;
    font-weight: bold;
    color: #8B2332;
    letter-spacing: 2px;
    line-height: 1.2;
}
/* Navigation */
.nav-menu {
    display: none;
    align-items: center;
    gap: 1.5rem;
    position: relative;
}
@media (min-width: 768px) {
    .nav-menu {
        display: flex;
    }
}
.nav-item {
    position: relative;
}
.nav-link {
    color: #333;
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.3px;
    transition: color 0.3s;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.5rem 0;
    cursor: pointer;
    line-height: 1.5;
    white-space: nowrap;
}
.nav-link:hover {
    color: #5B6D87;
}
.nav-link svg {
    width: 1rem;
    height: 1rem;
}
/* Dropdown Menu */
.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    padding-top: 0.5rem;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s, visibility 0.3s;
}
.nav-item:hover .dropdown-menu {
    opacity: 1;
    visibility: visible;
}
.dropdown-content {
    width: 20rem;
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    padding: 0.5rem 0;
}
.dropdown-item {
    display: block;
    padding: 0.875rem 1.25rem;
    text-decoration: none;
    transition: background-color 0.2s;
    border-left: 3px solid transparent;
}
.dropdown-item:hover {
    background-color: #f3f4f6;
    border-left-color: #5B6D87;
}
.dropdown-title {
    font-weight: 600;
    font-size: 14px;
    color: #111827;
    margin-bottom: 0.25rem;
    line-height: 1.4;
}
.dropdown-subtitle {
    font-size: 12px;
    color: #6b7280;
    line-height: 1.5;
}
/* Mobile Menu */
.mobile-menu-btn {
    display: block;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    color: #333;
}
@media (min-width: 768px) {
    .mobile-menu-btn {
        display: none;
    }
}
/* Mobile Navigation */
.mobile-nav {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    border-bottom: 1px solid #e5e5e5;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}
.mobile-nav.active {
    display: block;
}
.mobile-nav-links {
    display: flex;
    flex-direction: column;
    padding: 1rem;
}
.mobile-nav-link {
    color: #333;
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    padding: 0.75rem 1rem;
    border-bottom: 1px solid #f3f4f6;
    transition: background-color 0.2s;
}
.mobile-nav-link:hover {
    background-color: #f9fafb;
    color: #5B6D87;
}
.mobile-nav-link:last-child {
    border-bottom: none;
}
@media (min-width: 768px) {
    .mobile-nav {
        display: none !important;
    }
}
</style>
<header style="background-color: #F5F0E5;">
  <div class="container">
    <div class="header-content">
      <a href="index.html" class="logo" aria-label="Home">
        <div class="logo-main">CANTONESE</div>
        <div class="logo-sub">IN AMERICAS</div>
      </a>
      <!-- Desktop Navigation -->
      <nav class="nav-menu" aria-label="Primary">
        <!-- Timeline Dropdown -->
        <div class="nav-item">
          <a href="timeline.html" class="nav-link" aria-haspopup="true">
            Timeline
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <div class="dropdown-menu" role="menu">
            <div class="dropdown-content">
              <a href="phase1.html" class="dropdown-item" role="menuitem">
                <div class="dropdown-title">Phase I: 17th–19th Centuries</div>
                <div class="dropdown-subtitle">Early Migration within Southeast Asia</div>
              </a>
              <a href="phase2.html" class="dropdown-item" role="menuitem">
                <div class="dropdown-title">Phase II: 1840s–1940s</div>
                <div class="dropdown-subtitle">The Great Migration to the Americas</div>
              </a>
              <a href="phase3.html" class="dropdown-item" role="menuitem">
                <div class="dropdown-title">Phase III: 1940s–1980s</div>
                <div class="dropdown-subtitle">War, Revolution, and Renewed Migration</div>
              </a>
              <a href="phase4.html" class="dropdown-item" role="menuitem">
                <div class="dropdown-title">Phase IV: 1980s–Present</div>
                <div class="dropdown-subtitle">Globalization and New Identities</div>
              </a>
            </div>
          </div>
        </div>
        <a href="language.html" class="nav-link">Language Power</a>
        <a href="culture.html" class="nav-link">Culture Symbols</a>
        <a href="archives.html" class="nav-link">Archives</a>
        <a href="resources.html" class="nav-link">Resources</a>
      </nav>
      <!-- Mobile Menu Button -->
      <button class="mobile-menu-btn" id="mobile-menu-toggle" aria-label="Toggle menu">
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
    <!-- Mobile Navigation -->
    <nav class="mobile-nav" id="mobile-nav" aria-label="Mobile">
      <div class="mobile-nav-links">
        <a href="timeline.html" class="mobile-nav-link">Timeline</a>
        <a href="language.html" class="mobile-nav-link">Language Power</a>
        <a href="culture.html" class="mobile-nav-link">Culture Symbols</a>
        <a href="archives.html" class="mobile-nav-link">Archives</a>
        <a href="resources.html" class="mobile-nav-link">Resources</a>
      </div>
    </nav>
  </div>
</header>
  `.trim();

  // Mobile menu toggle functionality
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  
  if (mobileMenuToggle && mobileNav) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileNav.classList.toggle('active');
    });
  }
});
