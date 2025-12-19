/**
 * Portfolio Animations - Nicolas Rannou
 * Animations au scroll et effets interactifs
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // ==================== INTERSECTION OBSERVER POUR ANIMATIONS AU SCROLL ====================
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optionnel : arrêter d'observer après l'animation
                // animateOnScroll.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observer tous les éléments avec la classe animate-on-scroll
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        animateOnScroll.observe(element);
    });

    // ==================== PARALLAX SUBTIL SUR LE HERO ====================
    const hero = document.querySelector('.bg-bureau');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.3;
            hero.style.backgroundPositionY = `calc(50% + ${rate}px)`;
        });
    }

    // ==================== EFFET DE GLOW SUR LES CARDS AU HOVER ====================
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // ==================== SMOOTH SCROLL POUR LES ANCRES ====================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ==================== ANIMATION DES COMPTEURS (SI UTILISÉ) ====================
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(start);
            }
        }, 16);
    }

    // ==================== EFFET TYPING (SI UTILISÉ) ====================
    function typeWriter(element, text, speed = 50) {
        let i = 0;
        element.textContent = '';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // ==================== NAVIGATION STICKY AVEC EFFET ====================
    let lastScroll = 0;
    const backButton = document.querySelector('.back-button');
    
    if (backButton) {
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                backButton.style.transform = 'translateY(0)';
                backButton.style.opacity = '1';
            } else {
                backButton.style.transform = 'translateY(-10px)';
                backButton.style.opacity = '0.8';
            }
            
            lastScroll = currentScroll;
        });
    }

    // ==================== GESTION DU CARROUSEL (PAGE PROJET) ====================
    const carousel = document.getElementById('projectCarousel');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    if (carousel && thumbnails.length > 0) {
        // Mettre à jour les miniatures actives
        carousel.addEventListener('slid.bs.carousel', function(event) {
            const activeIndex = event.to;
            
            thumbnails.forEach((thumb, index) => {
                thumb.classList.toggle('active', index === activeIndex);
            });
        });
        
        // Clic sur les miniatures
        thumbnails.forEach((thumbnail, index) => {
            thumbnail.addEventListener('click', function() {
                const bsCarousel = bootstrap.Carousel.getInstance(carousel) || new bootstrap.Carousel(carousel);
                bsCarousel.to(index);
                
                thumbnails.forEach(thumb => thumb.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }

    // ==================== EFFET DE REVEAL AU SCROLL POUR LES IMAGES ====================
    const projectImages = document.querySelectorAll('.project-img, .project-carousel');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });

    projectImages.forEach(img => {
        img.style.opacity = '0';
        img.style.transform = 'translateY(30px)';
        img.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        imageObserver.observe(img);
    });

    // ==================== CURSOR PERSONNALISÉ (OPTIONNEL) ====================
    // Décommenter si vous voulez un curseur personnalisé
    /*
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    document.querySelectorAll('a, button, .project-card').forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
    });
    */

    // ==================== LAZY LOADING DES IMAGES ====================
    const lazyImages = document.querySelectorAll('img[data-src]');
    const lazyImageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                lazyImageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => lazyImageObserver.observe(img));

    // ==================== ANIMATION DES SKILL TAGS AU HOVER ====================
    const skillTags = document.querySelectorAll('.skill-tag, .skills-tags span');
    skillTags.forEach((tag, index) => {
        tag.style.animationDelay = `${index * 0.1}s`;
    });

    // ==================== CONSOLE MESSAGE ====================
    console.log('%c👋 Portfolio de Nicolas Rannou', 'font-size: 20px; font-weight: bold; color: #6366f1;');
    console.log('%cMerci de visiter mon portfolio !', 'font-size: 14px; color: #22d3ee;');
});

// ==================== PRELOADER (OPTIONNEL) ====================
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});



