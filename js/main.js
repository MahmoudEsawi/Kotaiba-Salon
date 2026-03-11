// main.js

document.addEventListener('DOMContentLoaded', () => {

    // Splash Screen Logic
    const splashScreen = document.getElementById('splash-screen');
    if (splashScreen) {
        setTimeout(() => {
            splashScreen.style.opacity = '0';
            setTimeout(() => {
                splashScreen.style.display = 'none';
                document.body.style.overflow = 'auto'; // Re-enable scrolling
            }, 500);
        }, 1500); // 1.5 seconds loading preview
    } else {
        document.body.style.overflow = 'auto';
    }

    // Modal logic
    const imageModal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const modalClose = document.querySelector(".modal-close");

    window.openImage = function(src) {
        modalImage.src = src;
        imageModal.classList.add("active");
        document.body.style.overflow = "hidden";
    };

    window.closeImage = function(e) {
        if (e.target.id === 'imageModal' || e.target.classList.contains('modal-close')) {
            imageModal.classList.remove("active");
            document.body.style.overflow = "auto";
        }
    };

    // Slider logic
    let slides = document.querySelectorAll(".slide");
    let current = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) slide.classList.add('active');
        });
    }

    window.nextSlide = function() {
        current = (current + 1) % slides.length;
        showSlide(current);
    };

    window.prevSlide = function() {
        current = (current - 1 + slides.length) % slides.length;
        showSlide(current);
    };

    setInterval(nextSlide, 4000);

    // Mobile Menu
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    if(mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Navigation (Switching sections based on click or scrolling to them)
    // The previous implementation was hiding/showing sections (SPA like).
    // Let's refine it to smooth scroll to the sections instead, which works better with the "scroll to top" button.
    const links = document.querySelectorAll('.nav-links a');
    const productsSec = document.getElementById('products');
    
    // We will show all sections to allow normal scrolling architecture
    // Remove the display none from products if it has it in CSS/inline.
    if(productsSec) {
        productsSec.style.display = 'block'; 
    }

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if(href.startsWith('#')) {
                e.preventDefault();
                const sectionId = href.substring(1);
                const target = document.getElementById(sectionId);
                
                if(target) {
                    const headerOffset = 85; 
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
                
                // Close mobile menu if open
                if (window.innerWidth <= 768 && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    const icon = mobileBtn.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    });

    // Scroll to Top Logic
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if(scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                scrollToTopBtn.classList.add("show");
            } else {
                scrollToTopBtn.classList.remove("show");
            }
        });

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});
