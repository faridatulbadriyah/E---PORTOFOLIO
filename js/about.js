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

    if (backToTop) {
        backToTop.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

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

    if (menuToggle && navLinks) {
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
    }

// ============================================
// 4. ACTIVE NAV LINK (scroll spy) - FIXED
// ============================================

// CEK APAKAH ADA SECTION DI HALAMAN INI
const hasSections = document.querySelectorAll('section[id]').length > 0;

function updateActiveLink() {
    // JIKA TIDAK ADA SECTION, SKIP (biarkan active tetap di tempatnya)
    if (!hasSections) {
        return;
    }

    let currentId = '';
    const scrollPos = window.scrollY + 120;

    document.querySelectorAll('section[id]').forEach(function(section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            currentId = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links > li > a.nav-link').forEach(function(link) {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentId) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveLink);
window.addEventListener('load', updateActiveLink);
    // ============================================
    // 5. THEME TOGGLE (Dark Mode)
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
    // 7. CONTACT FORM
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

    // ============================================
    // 8. DROPDOWN MENU
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

    // ============================================
    // 9. CARD HOVER EFFECT - Float & Shadow
    // ============================================
    const hoverCards = document.querySelectorAll(
        '.about-copy-card, .vision-card, .skill-card, .project-card, .place-card, .gallery-card, .info-box'
    );

    hoverCards.forEach(function(card) {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            this.style.transform = 'translateY(-8px) scale(1.01)';
            this.style.boxShadow = '0 20px 60px rgba(77, 14, 19, 0.15), 0 8px 24px rgba(77, 14, 19, 0.08)';
            this.style.backgroundColor = 'var(--color-surface)';
            this.style.borderColor = 'rgba(77, 14, 19, 0.12)';
            this.style.zIndex = '10';
            
            if (document.documentElement.getAttribute('data-theme') === 'dark') {
                this.style.backgroundColor = 'rgba(45, 33, 37, 0.85)';
                this.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.5), 0 8px 24px rgba(238, 228, 218, 0.05)';
                this.style.borderColor = 'rgba(238, 228, 218, 0.12)';
            }
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
            this.style.backgroundColor = '';
            this.style.borderColor = '';
            this.style.zIndex = '';
            
            if (document.documentElement.getAttribute('data-theme') === 'dark') {
                this.style.backgroundColor = '';
                this.style.boxShadow = '';
                this.style.borderColor = '';
            }
        });
    });

    // ============================================
    // 10. CAROUSEL (untuk halaman tentang saya)
    // ============================================
    const carousel = document.getElementById('photoCarousel');
    
    if (carousel) {
        const track = carousel.querySelector('.carousel-track');
        const slides = carousel.querySelectorAll('.carousel-slide');
        const prevBtn = carousel.querySelector('.carousel-control.prev');
        const nextBtn = carousel.querySelector('.carousel-control.next');
        const dots = carousel.querySelectorAll('.carousel-dot');
        
        let currentIndex = 0;
        const totalSlides = slides.length;
        let autoplayInterval = null;
        let isTransitioning = false;

        function goToSlide(index) {
            if (isTransitioning) return;
            if (index < 0) index = totalSlides - 1;
            if (index >= totalSlides) index = 0;
            
            isTransitioning = true;
            currentIndex = index;
            
            track.style.transform = 'translateX(-' + (currentIndex * 100) + '%)';
            
            dots.forEach(function(dot, i) {
                dot.classList.toggle('active', i === currentIndex);
            });
            
            setTimeout(function() {
                isTransitioning = false;
            }, 600);
        }

        function nextSlide() {
            goToSlide(currentIndex + 1);
        }

        function prevSlide() {
            goToSlide(currentIndex - 1);
        }

        function startAutoplay() {
            if (autoplayInterval) clearInterval(autoplayInterval);
            autoplayInterval = setInterval(nextSlide, 5000);
        }

        function stopAutoplay() {
            if (autoplayInterval) {
                clearInterval(autoplayInterval);
                autoplayInterval = null;
            }
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                stopAutoplay();
                nextSlide();
                startAutoplay();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                stopAutoplay();
                prevSlide();
                startAutoplay();
            });
        }

        dots.forEach(function(dot, i) {
            dot.addEventListener('click', function() {
                stopAutoplay();
                goToSlide(i);
                startAutoplay();
            });
        });

        if (carousel) {
            carousel.addEventListener('mouseenter', stopAutoplay);
            carousel.addEventListener('mouseleave', startAutoplay);
        }

        // Touch support
        let touchStartX = 0;
        let touchEndX = 0;

        if (carousel) {
            carousel.addEventListener('touchstart', function(e) {
                touchStartX = e.changedTouches[0].screenX;
                stopAutoplay();
            }, { passive: true });

            carousel.addEventListener('touchend', function(e) {
                touchEndX = e.changedTouches[0].screenX;
                const diff = touchStartX - touchEndX;
                if (Math.abs(diff) > 50) {
                    if (diff > 0) {
                        nextSlide();
                    } else {
                        prevSlide();
                    }
                }
                startAutoplay();
            }, { passive: true });
        }

        // Keyboard support
        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft') {
                stopAutoplay();
                prevSlide();
                startAutoplay();
            } else if (e.key === 'ArrowRight') {
                stopAutoplay();
                nextSlide();
                startAutoplay();
            }
        });

        // Initialize
        goToSlide(0);
        startAutoplay();
    }

    // ============================================
    // 11. INTERSECTION OBSERVER - Scroll Animation
    // ============================================
    if ('IntersectionObserver' in window) {
        const animateElements = document.querySelectorAll(
            '.about-copy-card, .purpose-quote, .vision-card, .skill-card, .project-card, .place-card, .gallery-card, .about-page-hero, .info-box'
        );

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        animateElements.forEach(function(el) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            observer.observe(el);
        });

        // Trigger for elements already visible
        setTimeout(function() {
            animateElements.forEach(function(el) {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight) {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }
            });
        }, 100);
    }

})();