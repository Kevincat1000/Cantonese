// /assets/header.js
document.addEventListener("DOMContentLoaded", () => {
  const mount = document.getElementById("site-header");
  if (!mount) return;

  mount.innerHTML = `
<header>
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

      <!-- Mobile Menu Button (placeholder) -->
      <button class="mobile-menu-btn" onclick="alert('Mobile menu - implement as needed')" aria-label="Open menu">
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </div>
</header>
  `.trim();
});
