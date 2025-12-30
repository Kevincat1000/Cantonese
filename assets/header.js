/**
 * Header Component for Cantonese in Americas
 * Includes: Header HTML, CSS styles, Scroll hide functionality, Mobile Menu
 * Usage: Include this file in HTML - it auto-initializes
 */

(function() {
    'use strict';

    if (document.querySelector('header')) {
        console.warn('Header already exists in the page. Skipping header.js initialization.');
        return;
    }

    function insertHeaderStyles() {
        const styles = `
            <style id="header-styles">
                header {
                    background: #F5F0E5;
                    border-bottom: none;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 50;
                    transform: translateY(0);
                    transition: transform 0.3s ease-in-out;
                }

                header.header-hidden {
                    transform: translateY(-100%);
                }

                /* Add padding to body to account for fixed header */
                body {
                    padding-top: 73px;
                }

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
                }

                header .logo {
                    text-align: center;
                    padding: 0 0.5rem;
                    text-decoration: none;
                    transition: opacity 0.3s;
                }

                header .logo:hover {
                    opacity: 0.9;
                }

                header .logo-main {
                    font-family: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
                    font-size: 24px;
                    font-weight: bold;
                    color: #8B2332;
                    letter-spacing: 0.5px;
                    line-height: 1.2;
                }

                header .logo-sub {
                    font-family: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif;
                    font-size: 16px;
                    font-weight: bold;
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
                    header .nav-menu {
                        display: flex;
                    }
                }

                header .nav-item {
                    position: relative;
                }

                header .nav-link {
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

                header .nav-link:hover {
                    color: #8B2332;
                }

                header .nav-link svg {
                    width: 1rem;
                    height: 1rem;
                }

                header .mobile-nav-menu {
                    display: none;
                    position: fixed;
                    top: 73px;
                    left: 0;
                    right: 0;
                    background: #F5F0E5;
                    border-bottom: 1px solid #e5e5e5;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                    z-index: 40;
                    max-height: calc(100vh - 73px);
                    overflow-y: auto;
                }

                header .mobile-nav-menu.active {
                    display: block;
                }

                header .mobile-nav-item {
                    border-bottom: 1px solid #E5DBCA;
                }

                header .mobile-nav-link {
                    display: block;
                    padding: 1rem 1.5rem;
                    color: #333;
                    text-decoration: none;
                    font-size: 16px;
                    font-weight: 500;
                    transition: background-color 0.2s, color 0.2s;
                }

                header .mobile-nav-link:hover,
                header .mobile-nav-link:active {
                    background-color: #EAE4D5;
                    color: #8B2332;
                }

                header .mobile-menu-btn {
                    display: block;
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 0.5rem;
                    color: #333;
                    transition: color 0.2s;
                }

                header .mobile-menu-btn:hover {
                    color: #8B2332;
                }

                header .mobile-menu-btn svg {
                    width: 24px;
                    height: 24px;
                }

                @media (min-width: 768px) {
                    header .mobile-menu-btn {
                        display: none;
                    }
                }

                @media (min-width: 640px) {
                    header .logo-main {
                        font-size: 26px;
                    }
                    header .logo-sub {
                        font-size: 17px;
                    }
                }

                @media (min-width: 1024px) {
                    header .header-container {
                        padding: 0 2rem;
                    }
                    header .header-content {
                        padding: 0.75rem 2rem;
                    }
                    header .nav-menu {
                        gap: 2rem;
                    }
                }
            </style>
        `;
        
        document.head.insertAdjacentHTML('beforeend', styles);
    }

    function insertHeaderHTML() {
        const headerHTML = `
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

                        <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Open menu">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>

                    <nav class="mobile-nav-menu" id="mobileNavMenu">
                        <div class="mobile-nav-item">
                            <a href="timeline.html" class="mobile-nav-link">Timeline</a>
                        </div>
                        <div class="mobile-nav-item">
                            <a href="language.html" class="mobile-nav-link">Language Power</a>
                        </div>
                        <div class="mobile-nav-item">
                            <a href="culture.html" class="mobile-nav-link">Culture Symbols</a>
                        </div>
                        <div class="mobile-nav-item">
                            <a href="archives.html" class="mobile-nav-link">Archives</a>
                        </div>
                        <div class="mobile-nav-item">
                            <a href="resources.html" class="mobile-nav-link">Resources</a>
                        </div>
                    </nav>
                </div>
            </header>
        `;
        
        document.body.insertAdjacentHTML('afterbegin', headerHTML);
    }

    // No scroll hide functionality - handled by individual pages
    function initScrollHide() {
        // Scroll hiding is now handled by each page individually
        // This function is kept for compatibility but does nothing
    }

    function initMobileMenu() {
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileNavMenu = document.getElementById('mobileNavMenu');
        
        if (!mobileMenuBtn || !mobileNavMenu) return;
        
        mobileMenuBtn.addEventListener('click', function() {
            mobileNavMenu.classList.toggle('active');
            
            const icon = mobileMenuBtn.querySelector('svg path');
            if (mobileNavMenu.classList.contains('active')) {
                icon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
                mobileMenuBtn.setAttribute('aria-label', 'Close menu');
            } else {
                icon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
                mobileMenuBtn.setAttribute('aria-label', 'Open menu');
            }
        });

        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileNavMenu.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('svg path');
                icon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
                mobileMenuBtn.setAttribute('aria-label', 'Open menu');
            });
        });

        document.addEventListener('click', function(event) {
            if (!mobileMenuBtn.contains(event.target) && !mobileNavMenu.contains(event.target)) {
                if (mobileNavMenu.classList.contains('active')) {
                    mobileNavMenu.classList.remove('active');
                    const icon = mobileMenuBtn.querySelector('svg path');
                    icon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
                    mobileMenuBtn.setAttribute('aria-label', 'Open menu');
                }
            }
        });
    }

    window.initHeader = function() {
        insertHeaderStyles();
        insertHeaderHTML();
        
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function() {
                initScrollHide();
                initMobileMenu();
            });
        } else {
            initScrollHide();
            initMobileMenu();
        }
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', window.initHeader);
    } else {
        window.initHeader();
    }

})();
