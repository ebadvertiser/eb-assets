// English Booster - Main JavaScript

// Header HTML
const headerHTML = `
<header>
    <nav>
        <div class="container">
            <div class="flex">
                <!-- Logo -->
                <a href="index.html" class="logo">
                    <img src="assets/images/english-booster-logo-merah.png" alt="English Booster Logo" class="logo-image">
                    <h1>English Booster</h1>
                </a>
                
                <!-- Desktop Navigation -->
                <div class="desktop-nav-container">
                    <a href="index.html" class="desktop-nav-item">Beranda</a>
                    <div class="desktop-nav-item dropdown-parent">
                        Program
                        <i class="fas fa-chevron-down dropdown-icon"></i>
                        <div class="desktop-dropdown">
                            <div class="desktop-dropdown-item dropdown-parent">
                                Program Online
                                <i class="fas fa-chevron-right submenu-icon"></i>
                                <div class="desktop-submenu">
                            <a href="#programs" class="desktop-submenu-item">Semua Program</a>
                            <a href="#programs" class="desktop-submenu-item">Kids</a>
                            <a href="#programs" class="desktop-submenu-item">Teen</a>
                            <a href="#programs" class="desktop-submenu-item">TOEFL</a>
                            <a href="#programs" class="desktop-submenu-item">Easy-Peasy</a>
                            <a href="#programs" class="desktop-submenu-item">Private</a>
                        </div>
                            </div>
                            <div class="desktop-dropdown-item dropdown-parent">
                                Program Offline
                                <i class="fas fa-chevron-right submenu-icon"></i>
                                <div class="desktop-submenu">
                                    <a href="#programs" class="desktop-submenu-item">Paket 2 Minggu</a>
                                    <a href="#programs" class="desktop-submenu-item">Paket 1 Bulan</a>
                                    <a href="#programs" class="desktop-submenu-item">Paket 2 Bulan</a>
                                    <a href="#programs" class="desktop-submenu-item">Paket 3 Bulan</a>
                                    <a href="#programs" class="desktop-submenu-item">TOEFL</a>
                                    <a href="#programs" class="desktop-submenu-item">S1 2 Tahun (RPL)</a>
                                    <a href="#programs" class="desktop-submenu-item">Cruis Ship</a>
                                </div>
                            </div>
                            <div class="desktop-dropdown-item dropdown-parent">
                                Program Rombongan
                                <i class="fas fa-chevron-right submenu-icon"></i>
                                <div class="desktop-submenu">
                                    <a href="#programs" class="desktop-submenu-item">English Trip</a>
                                    <a href="#programs" class="desktop-submenu-item">Special English Day</a>
                                    <a href="#programs" class="desktop-submenu-item">Teacher Visit</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="desktop-nav-item dropdown-parent">
                        Cabang
                        <i class="fas fa-chevron-down dropdown-icon"></i>
                        <div class="desktop-dropdown">
                            <a href="#contact" class="desktop-dropdown-item">Malang</a>
                            <a href="#contact" class="desktop-dropdown-item">Sidoarjo</a>
                            <a href="#contact" class="desktop-dropdown-item">Nganjuk</a>
                        </div>
                    </div>
                    <a href="#alumni" class="desktop-nav-item">Alumni</a>
                    <a href="/blog/" class="desktop-nav-item">Blog</a>
                    <a href="#affiliate" class="desktop-nav-item">Affiliate</a>
                    <a href="#karir" class="desktop-nav-item">Karir</a>
                    <a href="#contact" class="desktop-nav-item">Kontak</a>
                    <a href="https://wa.me/6282231050500?text=Halo,%20saya%20tertarik%20dengan%20program%20English%20Booster" class="desktop-cta-button">Daftar Sekarang</a>
                </div>
                
                <!-- Mobile Menu Toggle -->
                <button class="mobile-menu-toggle lg:hidden" id="mobile-menu-toggle">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
        </div>
    </nav>
    
    <!-- Mobile Navigation -->
    <div class="mobile-nav-backdrop" id="mobile-nav-backdrop"></div>
    <div class="mobile-nav-bg" id="mobile-nav">
        <div class="p-6">
            <a href="index.html" class="mobile-nav-item">Beranda</a>
            <div class="mobile-dropdown-parent">
                <div class="mobile-nav-item mobile-dropdown-toggle">
                    Program
                    <i class="fas fa-chevron-down mobile-dropdown-icon"></i>
                </div>
                <div class="mobile-dropdown-content">
                    <div class="mobile-submenu-parent">
                        <div class="mobile-dropdown-item mobile-submenu-toggle">
                            Program Online
                            <i class="fas fa-chevron-down mobile-submenu-icon"></i>
                        </div>
                        <div class="mobile-submenu-content">
                            <a href="#programs" class="mobile-submenu-item">Semua Program</a>
                            <a href="#programs" class="mobile-submenu-item">Kids</a>
                            <a href="#programs" class="mobile-submenu-item">Teen</a>
                            <a href="#programs" class="mobile-submenu-item">TOEFL</a>
                            <a href="#programs" class="mobile-submenu-item">Easy-Peasy</a>
                            <a href="#programs" class="mobile-submenu-item">Private</a>
                        </div>
                    </div>
                    <div class="mobile-submenu-parent">
                        <div class="mobile-dropdown-item mobile-submenu-toggle">
                            Program Offline
                            <i class="fas fa-chevron-down mobile-submenu-icon"></i>
                        </div>
                        <div class="mobile-submenu-content">
                            <a href="#programs" class="mobile-submenu-item">Paket 2 Minggu</a>
                            <a href="#programs" class="mobile-submenu-item">Paket 1 Bulan</a>
                            <a href="#programs" class="mobile-submenu-item">Paket 2 Bulan</a>
                            <a href="#programs" class="mobile-submenu-item">Paket 3 Bulan</a>
                            <a href="#programs" class="mobile-submenu-item">TOEFL</a>
                            <a href="#programs" class="mobile-submenu-item">S1 2 Tahun (RPL)</a>
                            <a href="#programs" class="mobile-submenu-item">Cruis Ship</a>
                        </div>
                    </div>
                    <div class="mobile-submenu-parent">
                        <div class="mobile-dropdown-item mobile-submenu-toggle">
                            Program Rombongan
                            <i class="fas fa-chevron-down mobile-submenu-icon"></i>
                        </div>
                        <div class="mobile-submenu-content">
                            <a href="#programs" class="mobile-submenu-item">English Trip</a>
                            <a href="#programs" class="mobile-submenu-item">Special English Day</a>
                            <a href="#programs" class="mobile-submenu-item">Teacher Visit</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mobile-dropdown-parent">
                <div class="mobile-nav-item mobile-dropdown-toggle">
                    Cabang
                    <i class="fas fa-chevron-down mobile-dropdown-icon"></i>
                </div>
                <div class="mobile-dropdown-content">
                    <a href="#contact" class="mobile-dropdown-item">Malang</a>
                    <a href="#contact" class="mobile-dropdown-item">Sidoarjo</a>
                    <a href="#contact" class="mobile-dropdown-item">Nganjuk</a>
                </div>
            </div>
            <a href="#alumni" class="mobile-nav-item">Alumni</a>
            <a href="/blog/" class="mobile-nav-item">Blog</a>
            <a href="#affiliate" class="mobile-nav-item">Affiliate</a>
            <a href="#karir" class="mobile-nav-item">Karir</a>
            <a href="#contact" class="mobile-nav-item">Kontak</a>
            <a href="https://wa.me/6282231050500?text=Halo,%20saya%20tertarik%20dengan%20program%20English%20Booster" class="mobile-cta-button">Daftar Sekarang</a>
        </div>
    </div>
</header>
`;

// Footer HTML
const footerHTML = `
<footer class="footer">
    <div class="container">
        <div class="footer-content">
            <div class="footer-section">
                <h3>English Booster</h3>
                <p>Lembaga kursus bahasa Inggris terpercaya yang berdedikasi membantu Anda meningkatkan kemampuan berbahasa Inggris dengan metode pembelajaran yang efektif dan menyenangkan.</p>
                <div class="social-links">
                    <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                    <a href="https://instagram.com/kampunginggrisbooster" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                    <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                    <a href="https://tiktok.com/@kampunginggrisbooster" aria-label="TikTok"><i class="fab fa-tiktok"></i></a>
                </div>
            </div>
            
            <div class="footer-section">
                <h3>Program Kami</h3>
                <a href="#programs">TOEFL Booster</a>
                <a href="#programs">General English</a>
                <a href="#programs">Conversation Class</a>
                <a href="#programs">Business English</a>
            </div>
            
            <div class="footer-section">
                <h3>Informasi</h3>
                <a href="#about">Tentang Kami</a>
                <a href="#programs">Jadwal Kelas</a>
                <a href="#contact">Lokasi</a>
                <a href="#contact">Testimoni</a>
            </div>
            
            <div class="footer-section">
                <h3>Kontak</h3>
                <p><i class="fas fa-phone"></i> +62 822-3105-0500</p>
                <p><i class="fas fa-envelope"></i> info@englishbooster.id</p>
                <p><i class="fas fa-map-marker-alt"></i> Jl. Asparaga No.100 Tegalsari, Tulungrejo, Pare, Kediri, Jawa Timur</p>
                <a href="https://wa.me/6282231050500?text=Halo,%20saya%20tertarik%20dengan%20program%20English%20Booster">Konsultasi Gratis</a>
            </div>
        </div>
        
        <div class="footer-bottom">
            <p>&copy; 2025 English Booster. All rights reserved. | Designed with ❤️ for better English learning experience.</p>
        </div>
    </div>
</footer>

<!-- Floating WhatsApp Button -->
<a href="https://wa.me/6282231050500?text=Halo,%20saya%20tertarik%20dengan%20program%20English%20Booster" class="whatsapp-float" target="_blank" aria-label="Chat WhatsApp">
    <i class="fab fa-whatsapp"></i>
</a>
`;

// CTA Section HTML (untuk melengkapi konten)
const ctaSectionHTML = `
<section class="cta-section" id="contact">
    <div class="container">
        <h2>Siap Meningkatkan Bahasa Inggris Anda?</h2>
        <p>Bergabunglah dengan ribuan siswa yang telah merasakan peningkatan signifikan dalam kemampuan bahasa Inggris mereka.</p>
        <div class="cta-buttons">
            <a href="https://wa.me/6282231050500?text=Halo,%20saya%20tertarik%20dengan%20program%20English%20Booster" class="btn-primary">Daftar via WhatsApp</a>
            <a href="tel:+6282231050500" class="btn-secondary">Hubungi Kami</a>
        </div>
    </div>
</section>
`;

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function () {
    // Insert Header
    const headerPlaceholder = document.getElementById('header-placeholder') || document.getElementById('header');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerHTML;
    }

    // Insert Footer
    const footerPlaceholder = document.getElementById('footer-placeholder') || document.getElementById('footer');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }

    // Insert CTA Section
    const ctaPlaceholder = document.getElementById('cta-placeholder');
    if (ctaPlaceholder) {
        ctaPlaceholder.innerHTML = ctaSectionHTML;
    }

    // Initialize UX enhancements
    initSmoothScrolling();
    initActiveNavigation();
    initScrollToTop(); // Disabled to prevent duplicate 'Beranda' text

    // Mobile Menu Toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileNavBackdrop = document.getElementById('mobile-nav-backdrop');

    if (mobileMenuToggle && mobileNav && mobileNavBackdrop) {
        mobileMenuToggle.addEventListener('click', function () {
            mobileNav.classList.toggle('active');
            mobileNavBackdrop.classList.toggle('active');
            document.body.classList.toggle('overflow-hidden');



            // Toggle icon
            const icon = mobileMenuToggle.querySelector('i');
            if (mobileNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close mobile menu when backdrop is clicked
        mobileNavBackdrop.addEventListener('click', function () {
            mobileNav.classList.remove('active');
            mobileNavBackdrop.classList.remove('active');
            document.body.classList.remove('overflow-hidden');

            const icon = mobileMenuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });

        // Close mobile menu when nav item is clicked (excluding dropdown toggles)
        const mobileNavItems = document.querySelectorAll('.mobile-nav-item:not(.mobile-dropdown-toggle), .mobile-cta-button, .mobile-submenu-item');
        mobileNavItems.forEach(item => {
            item.addEventListener('click', function () {
                mobileNav.classList.remove('active');
                mobileNavBackdrop.classList.remove('active');
                document.body.classList.remove('overflow-hidden');

                const icon = mobileMenuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });

        // Mobile dropdown functionality
        const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
        mobileDropdownToggles.forEach(toggle => {
            toggle.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();

                const dropdownContent = this.nextElementSibling;
                const isActive = this.classList.contains('active');

                // Close all other dropdowns
                mobileDropdownToggles.forEach(otherToggle => {
                    if (otherToggle !== this) {
                        otherToggle.classList.remove('active');
                        otherToggle.nextElementSibling.classList.remove('active');
                    }
                });

                // Toggle current dropdown
                if (isActive) {
                    this.classList.remove('active');
                    dropdownContent.classList.remove('active');
                } else {
                    this.classList.add('active');
                    dropdownContent.classList.add('active');
                }
            });
        });

        // Mobile submenu functionality
        const mobileSubmenuToggles = document.querySelectorAll('.mobile-submenu-toggle');
        mobileSubmenuToggles.forEach(toggle => {
            toggle.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();

                const submenuContent = this.nextElementSibling;
                const isActive = this.classList.contains('active');

                // Close all other submenus in the same dropdown
                const parentDropdown = this.closest('.mobile-dropdown-content');
                const otherSubmenuToggles = parentDropdown.querySelectorAll('.mobile-submenu-toggle');
                otherSubmenuToggles.forEach(otherToggle => {
                    if (otherToggle !== this) {
                        otherToggle.classList.remove('active');
                        otherToggle.nextElementSibling.classList.remove('active');
                    }
                });

                // Toggle current submenu
                if (isActive) {
                    this.classList.remove('active');
                    submenuContent.classList.remove('active');
                } else {
                    this.classList.add('active');
                    submenuContent.classList.add('active');
                }
            });
        });
    }


});

// UX Enhancement Functions
function initSmoothScrolling() {
    // Enhanced smooth scrolling for all anchor links
    document.addEventListener('click', function (e) {
        const target = e.target.closest('a[href^="#"]');
        if (target && target.getAttribute('href').startsWith('#')) {
            const href = target.getAttribute('href');
            if (href.length > 1) {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    const headerHeight = document.querySelector('header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight - 20;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });

                    // Add visual feedback
                    target.classList.add('nav-clicked');
                    setTimeout(() => target.classList.remove('nav-clicked'), 200);
                }
            }
        }
    });
}

function initActiveNavigation() {
    // Enhanced active navigation based on scroll position
    const sections = document.querySelectorAll('section[id], .hero[id]');
    const navLinks = document.querySelectorAll('.desktop-nav-item, .mobile-nav-item');

    function updateActiveNav() {
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remove active class from all nav items
                navLinks.forEach(link => link.classList.remove('active'));

                // Add active class to current section's nav item
                const activeLink = document.querySelector(`a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav(); // Initial call
}

function initScrollToTop() {
    // Enhanced scroll to top functionality
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollToTopBtn);

    scrollToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Show/hide scroll to top button
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });
}



// Polyfill for matches method - Enhanced version
function matchesSelector(element, selector) {
    // Check if element exists and is a valid DOM element
    if (!element || !element.nodeType || element.nodeType !== 1) {
        return false;
    }

    // Try modern matches method first
    if (typeof element.matches === 'function') {
        return element.matches(selector);
    }

    // Try vendor prefixed versions
    if (typeof element.msMatchesSelector === 'function') {
        return element.msMatchesSelector(selector);
    }

    if (typeof element.webkitMatchesSelector === 'function') {
        return element.webkitMatchesSelector(selector);
    }

    if (typeof element.mozMatchesSelector === 'function') {
        return element.mozMatchesSelector(selector);
    }

    // Fallback for very old browsers
    try {
        const matches = (element.document || element.ownerDocument).querySelectorAll(selector);
        let i = matches.length;
        while (--i >= 0 && matches.item(i) !== element) { }
        return i > -1;
    } catch (e) {
        return false;
    }
}
