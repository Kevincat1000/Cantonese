(function () {
  "use strict";

  const FOOTER_SEL = "footer[data-site-footer='1']";

  function insertFooterStyles() {
    const style = document.createElement("style");
    style.textContent = `
      footer[data-site-footer="1"] {
        background: transparent;
        border: none;
        padding: 20px 0;
        font-family: 'Exo', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        font-size: 12px;
        color: #000;
        text-align: center;
        line-height: 1;
      }

      footer[data-site-footer="1"] .footer-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2px;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
      }

      footer[data-site-footer="1"] .footer-contact {
        color: #000;
        text-decoration: none;
      }

      footer[data-site-footer="1"] .footer-tagline {
        color: #000;
        font-style: italic;
      }

      footer[data-site-footer="1"] .footer-copyright {
        color: #000;
      }

      @media (max-width: 768px) {
        footer[data-site-footer="1"] {
          font-size: 11px;
          padding: 20px 0;
        }

        footer[data-site-footer="1"] .footer-content {
          gap: 2px;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function insertFooterHTML() {
    const footerHTML = `
      <footer data-site-footer="1">
        <div class="footer-content">
          <a href="mailto:kw30928@gmail.com" class="footer-contact">Contact me</a>
          <div class="footer-tagline">Designing for a better harmonious world.</div>
          <div class="footer-copyright">© 2025 Kevin W.</div>
        </div>
      </footer>
    `;
    document.body.insertAdjacentHTML("beforeend", footerHTML);
  }

  function boot() {
    insertFooterStyles();
    insertFooterHTML();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, { once: true });
  } else {
    boot();
  }
})();
