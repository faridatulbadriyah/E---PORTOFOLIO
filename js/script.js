(function() {
    'use strict';

    // ============================================
    // 1. BACK TO TOP
    // ============================================
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 400) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ============================================
    // 2. NAVBAR SCROLL EFFECT
    // ============================================
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ============================================
    // 3. MOBILE MENU
    // ============================================
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('open');
    });

    // Close menu on link click (mobile)
    navLinks.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('open');
        });
    });

// ============================================
// 4. ACTIVE NAV LINK (scroll spy) - UPDATED
// ============================================
const sections = document.querySelectorAll('section[id]');
const navLinkItems = document.querySelectorAll('.nav-links a.nav-link, .dropdown-link');

function updateActiveLink() {
    let currentId = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(function(section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            currentId = section.getAttribute('id');
        }
    });

    // Update main nav links
    document.querySelectorAll('.nav-links > li > a.nav-link').forEach(function(link) {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentId) {
            link.classList.add('active');
        }
    });

    // Update dropdown links
    document.querySelectorAll('.dropdown-link').forEach(function(link) {
        link.classList.remove('active');
        // Check if link href matches current section
        const href = link.getAttribute('href');
        if (href && href.includes('#' + currentId)) {
            link.classList.add('active');
        }
        // Also highlight dropdown toggle if any child is active
        if (link.classList.contains('active')) {
            const parentDropdown = link.closest('.dropdown');
            if (parentDropdown) {
                const toggle = parentDropdown.querySelector('.dropdown-toggle');
                if (toggle) toggle.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', updateActiveLink);
window.addEventListener('load', updateActiveLink);

    // ============================================
    // 5. THEME TOGGLE (Dark Mode) - DIPERBAIKI
    // ============================================
    const themeToggle = document.getElementById('themeToggle');
    const root = document.documentElement;
    
    // Cek preferensi sistem atau local storage
    const savedTheme = localStorage.getItem('theme');
    let darkMode = false;
    
    if (savedTheme === 'dark') {
        darkMode = true;
    } else if (savedTheme === 'light') {
        darkMode = false;
    } else {
        // Cek preferensi sistem
        darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    // Fungsi untuk apply tema
    function applyTheme(isDark) {
        if (isDark) {
            root.setAttribute('data-theme', 'dark');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            themeToggle.title = 'Aktifkan mode terang';
            localStorage.setItem('theme', 'dark');
        } else {
            root.removeAttribute('data-theme');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            themeToggle.title = 'Aktifkan mode gelap';
            localStorage.setItem('theme', 'light');
        }
        darkMode = isDark;
    }

    // Apply tema awal
    applyTheme(darkMode);

    // Toggle tema
    themeToggle.addEventListener('click', function() {
        applyTheme(!darkMode);
    });

    // ============================================
    // 6. CURRENT YEAR in footer
    // ============================================
    const yearEl = document.getElementById('currentYear');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // ============================================
    // 7. TOPIC ACCORDION
    // ============================================
    const topicDetails = document.querySelectorAll('.topic-accordion details');

    topicDetails.forEach(function(details) {
        details.addEventListener('toggle', function() {
            if (!details.open) return;

            topicDetails.forEach(function(otherDetails) {
                if (otherDetails !== details) {
                    otherDetails.removeAttribute('open');
                }
            });
        });
    });

    // ============================================
    // 8. CONTACT FORM
    // ============================================
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Simple validation
            const inputs = this.querySelectorAll('input, textarea');
            let isValid = true;

            inputs.forEach(function(input) {
                if (input.hasAttribute('required') && !input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#c0392b';
                    input.style.boxShadow = '0 0 0 3px rgba(192, 57, 43, 0.15)';
                } else {
                    input.style.borderColor = '';
                    input.style.boxShadow = '';
                }
            });

            if (isValid) {
                // Show success message
                const btn = this.querySelector('.btn');
                const originalText = btn.textContent;
                btn.textContent = '✓ Terkirim!';
                btn.style.background = '#2d7d46';
                btn.style.boxShadow = '0 4px 16px rgba(45, 125, 70, 0.30)';

                // Reset form
                this.reset();

                setTimeout(function() {
                    btn.textContent = originalText;
                    btn.style.background = '';
                    btn.style.boxShadow = '';
                }, 3000);
            }
        });

        // Remove error style on input
        contactForm.querySelectorAll('input, textarea').forEach(function(input) {
            input.addEventListener('input', function() {
                this.style.borderColor = '';
                this.style.boxShadow = '';
            });
        });
    }

})();

// ============================================
// DROPDOWN MENU
// ============================================
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');

if (dropdownToggle && dropdownMenu) {
    // Toggle dropdown on click
    dropdownToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const isOpen = dropdownMenu.classList.toggle('open');
        this.classList.toggle('active');
        
        // Close other dropdowns if any
        document.querySelectorAll('.dropdown-menu.open').forEach(function(menu) {
            if (menu !== dropdownMenu) {
                menu.classList.remove('open');
                document.querySelector('.dropdown-toggle.active')?.classList.remove('active');
            }
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!dropdownToggle.parentElement.contains(e.target)) {
            dropdownMenu.classList.remove('open');
            dropdownToggle.classList.remove('active');
        }
    });

    // Close dropdown on link click (mobile)
    dropdownMenu.querySelectorAll('.dropdown-link').forEach(function(link) {
        link.addEventListener('click', function() {
            dropdownMenu.classList.remove('open');
            dropdownToggle.classList.remove('active');
            
            // Close mobile menu if open
            if (navLinks && navLinks.classList.contains('open')) {
                navLinks.classList.remove('open');
                if (menuToggle) menuToggle.classList.remove('active');
            }
        });
    });

    // Hover effect for desktop
    let hoverTimeout;
    const dropdownItem = dropdownToggle.parentElement;
    
    dropdownItem.addEventListener('mouseenter', function() {
        if (window.innerWidth > 640) {
            clearTimeout(hoverTimeout);
            dropdownMenu.classList.add('open');
            dropdownToggle.classList.add('active');
        }
    });
    
    dropdownItem.addEventListener('mouseleave', function() {
        if (window.innerWidth > 640) {
            hoverTimeout = setTimeout(function() {
                dropdownMenu.classList.remove('open');
                dropdownToggle.classList.remove('active');
            }, 200);
        }
    });
}