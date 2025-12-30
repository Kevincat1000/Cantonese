/**
 * Header Component for Cantonese in Americas
 * 包含：Header HTML, CSS样式, 滚动隐藏功能, Mobile Menu功能
 * 使用方法：在HTML中引入此文件，然后调用 initHeader()
 */

(function() {
    'use strict';

    // ========== 插入CSS样式 ==========
    function insertHeaderStyles() {
        const styles = `
            <style id="header-styles">
                /* Header */
                header {
                    background: #F5F0E5;
                    border-bottom: 1px solid #e5e5e5;
                    position: sticky;
                    top: 0;
                    z-index: 50;
                    transform: translateY(0);
                    transition: transform 0.3s ease-in-out;
                }

                header.header-hidden {
                    transform: translateY(-100%);
                }

                .container {
                    max-width: 1280px;
                    margin: 0 auto;
                    padding: 0 1rem;
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
                    color: #8B2332;
                }

                .nav-link svg {
                    width: 1rem;
                    height: 1rem;
                }

                /* Mobile Menu */
                .mobile-nav-menu {
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

                .mobile-nav-menu.active {
                    display: block;
                }

                .mobile-nav-item {
                    border-bottom: 1px solid #E5DBCA;
                }

                .mobile-nav-link {
                    display: block;
                    padding: 1rem 1.5rem;
                    color: #333;
                    text-decoration: none;
                    font-size: 16px;
                    font-weight: 500;
                    transition: background-color 0.2s, color 0.2s;
                }

                .mobile-nav-link:hover,
                .mobile-nav-link:active {
                    background-color: #EAE4D5;
                    color: #8B2332;
                }

                /* Mobile Menu Toggle */
                .mobile-menu-btn {
                    display: block;
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 0.5rem;
                    color: #333;
                    transition: color 0.2s;
                }

                .mobile-menu-btn:hover {
                    color: #8B2332;
                }

                .mobile-menu-btn svg {
                    width: 24px;
                    height: 24px;
                }

                @media (min-width: 768px) {
                    .mobile-menu-btn {
                        display: none;
                    }
                }

                /* 响应式优化 */
                @media (min-width: 640px) {
                    .logo-main {
                        font-size: 26px;
                    }
                    .logo-sub {
                        font-size: 17px;
                    }
                }

                @media (min-width: 1024px) {
                    .container {
                        padding: 0 2rem;
                    }
                    .header-content {
                        padding: 0.75rem 2rem;
                    }
                    .nav-menu {
                        gap: 2rem;
                    }
                }
            </style>
        `;
        
        document.head.insertAdjacentHTML('beforeend', styles);
    }

    // ========== 插入Header HTML ==========
    function insertHeaderHTML() {
        const headerHTML = `
            <header>
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

                        <!-- Mobile Menu Button -->
                        <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="打开菜单">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>

                    <!-- Mobile Navigation Menu -->
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

    // ========== 滚动隐藏功能 ==========
    function initScrollHide() {
        let lastScrollTop = 0;
        const header = document.querySelector('header');
        const scrollThreshold = 100;
        const scrollDelta = 5;
        
        window.addEventListener('scroll', function() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (Math.abs(lastScrollTop - scrollTop) <= scrollDelta) {
                return;
            }
            
            if (scrollTop < scrollThreshold) {
                header.classList.remove('header-hidden');
                lastScrollTop = scrollTop;
                return;
            }
            
            if (scrollTop > lastScrollTop) {
                header.classList.add('header-hidden');
            } else {
                header.classList.remove('header-hidden');
            }
            
            lastScrollTop = scrollTop;
        });
    }

    // ========== Mobile Menu 功能 ==========
    function initMobileMenu() {
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileNavMenu = document.getElementById('mobileNavMenu');
        
        if (!mobileMenuBtn || !mobileNavMenu) return;
        
        // 切换mobile menu显示/隐藏
        mobileMenuBtn.addEventListener('click', function() {
            mobileNavMenu.classList.toggle('active');
            
            const icon = mobileMenuBtn.querySelector('svg path');
            if (mobileNavMenu.classList.contains('active')) {
                icon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
                mobileMenuBtn.setAttribute('aria-label', '关闭菜单');
            } else {
                icon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
                mobileMenuBtn.setAttribute('aria-label', '打开菜单');
            }
        });

        // 点击菜单项后关闭mobile menu
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileNavMenu.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('svg path');
                icon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
                mobileMenuBtn.setAttribute('aria-label', '打开菜单');
            });
        });

        // 点击页面其他地方关闭mobile menu
        document.addEventListener('click', function(event) {
            if (!mobileMenuBtn.contains(event.target) && !mobileNavMenu.contains(event.target)) {
                if (mobileNavMenu.classList.contains('active')) {
                    mobileNavMenu.classList.remove('active');
                    const icon = mobileMenuBtn.querySelector('svg path');
                    icon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
                    mobileMenuBtn.setAttribute('aria-label', '打开菜单');
                }
            }
        });
    }

    // ========== 初始化所有功能 ==========
    window.initHeader = function() {
        // 插入CSS
        insertHeaderStyles();
        
        // 插入HTML
        insertHeaderHTML();
        
        // 等待DOM完全加载后初始化功能
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

    // 自动初始化（如果需要）
    // 如果想要自动加载，取消下面这行的注释
    // window.initHeader();

})();
