// /assets/header.js
document.addEventListener("DOMContentLoaded", () => {
  const mount = document.getElementById("site-header");
  if (!mount) return;
  mount.innerHTML = `
<style>
  #site-header {
    font-family: 'Montserrat', helvetica, arial, sans-serif;
    font-size: 16px;
    color: #333333;
  }
  #site-header .logo {
    color: #8B2332;
    text-decoration: none;
  }
  #site-header .nav-link {
    color: #333333;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  #site-header .nav-link:hover {
    color: #8B2332;
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
        <a href="timeline.html" class="nav-link">Timeline</a>
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
