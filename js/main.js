// js/main.js

const translations = {
    ar: {
        pageTitle: "صالون كتيبة - Salon Kotaiba",
        logoTitle: "Kotaiba Salon",
        logoDesc: "صالون الحلاقة الراقي",
        navHome: "الرئيسية",
        navOffers: "العروض",
        navServices: "الخدمات",
        navProducts: "منتجاتنا",
        heroTitle: "مرحباً بكم في صالون Kotaiba",
        heroDesc: "نقدم لكم أفضل خدمات الحلاقة والعناية بالشعر والبشرة",
        servicesSectionTitle: "خدماتنا المميزة",
        srv1Title: "خدمة الحلاقة",
        srv1Desc: "حلاقة احترافية بأحدث التقنيات والأدوات المعقمة. نقدم قصات عصرية وكلاسيكية تناسب جميع الأذواق والأعمار مع الاهتمام بأدق التفاصيل.",
        srv2Title: "تنظيف البشرة",
        srv2Desc: "تنظيف عميق للبشرة لإزالة الشوائب والرؤوس السوداء. جلسة مريحة ومنعشة تترك البشرة نظيفة ومشرقة مع استخدام تقنيات حديثة وآمنة.",
        srv3Title: "غسيل الشعر",
        srv3Desc: "غسيل احترافي للشعر بشامبو مخصص حسب نوع الشعر مع تدليك مريح لفروة الرأس. خدمة منعشة تترك الشعر نظيفاً وصحياً ورائحة جميلة.",
        offersSectionTitle: "عروضنا الخاصة",
        off1Title: "حلاقة شعر ولحية",
        off1Desc: "عرض مميز يشمل حلاقة الشعر وتهذيب اللحية بأسلوب احترافي. خدمة شاملة بسعر مناسب.",
        off2Title: "حلاقة مع تنظيف البشرة",
        off2Desc: "باقة متكاملة تشمل الحلاقة وجلسة تنظيف عميق للبشرة. تجربة فاخرة للعناية الشاملة.",
        off3Title: "الباقة الملكية الكاملة",
        off3Desc: "تجربة فاخرة شاملة: حلاقة + تهذيب لحية + غسيل شعر + تنظيف بشرة + ماسك. كل ما تحتاجه في جلسة واحدة.",
        off3Price: "50 بدلا من 75 VIP",
        prodSectionTitle: "منتجاتنا المميزة",
        prod1Title: "ماكينة حلاقة VGR V-393 (2 في 1)",
        prod1Desc: "مقاومة للماء، قابلة للشحن، مع رؤوس متعددة وحلاقة دقيقة وسهلة الاستخدام.",
        prod1Price: "15 JD",
        prod2Title: "VGR V-989",
        prod2Desc: "ماكينة احترافية تعمل سلكياً ولاسلكياً، شاشة LED، وضع تيربو، بطارية تدوم 180 دقيقة.",
        prod2Price: "15 JD",
        prod3Title: "واكس بلاست سبايدر",
        prod3Desc: "ثبات قوي ولمعان طبيعي لشعر أنيق طوال اليوم.",
        prod3Price: "3 JD",
        prod4Title: "ENERGY Original Hair Cream",
        prod4Desc: "لمعان طبيعي وثبات مثالي لتصفيف يدوم طويلاً.",
        prod4Price: "3 JD",
        prod5Title: "Geemy",
        prod5Desc: "ماكينة حلاقة شعر الانف والاذن (مقاومة للماء).",
        prod5Price: "6 JD",
        prod6Title: "💈ELEGANCE Matte Wax",
        prod6Desc: "واكس لتثبيت الشعر دون لمعان.",
        prod6Price: "3 JD",
        prod7Title: "Elegance Splash Body Spray",
        prod7Desc: "عطر جسم منعش برائحة مميزة تدوم طويلاً.",
        prod7Price: "5 JD",
        prod8Title: "💈ELEGANCE Gel",
        prod8Desc: "جل لتثبيت الشعر مدعم بالفيتامينات لعناية إضافية وحماية من الجفاف.",
        prod8Price: "3 JD",
        footerContact: "معلومات الاتصال",
        footerMap: "موقعنا على الخريطة",
        footerFollow: "تابعنا على",
        footerAbout: "صالون Kotaiba",
        footerDesc: "نقدم أفضل خدمات الحلاقة والعناية بالشعر بأحدث التقنيات والأساليب العصرية.",
        footerCopy: "2025 © Kotaiba Salon. All rights reserved.",
        toggleLangBtn: "English",
        scrollToTopTitle: "العودة للأعلى",
        whatsappTitle: "تواصل معنا عبر واتساب"
    },
    en: {
        pageTitle: "Kotaiba Salon - Premium Barber",
        logoTitle: "Kotaiba Salon",
        logoDesc: "Premium Barber Salon",
        navHome: "Home",
        navOffers: "Offers",
        navServices: "Services",
        navProducts: "Products",
        heroTitle: "Welcome to Kotaiba Salon",
        heroDesc: "We offer the best haircut, hair, and skin care services",
        servicesSectionTitle: "Our Premium Services",
        srv1Title: "Haircut Service",
        srv1Desc: "Professional haircuts with the latest techniques and sterilized tools. Modern and classic styles suitable for all tastes and ages, with attention to detail.",
        srv2Title: "Skin Care",
        srv2Desc: "Deep skin cleansing to remove impurities and blackheads. A comfortable and refreshing session leaving skin clean and radiant using safe, modern techniques.",
        srv3Title: "Hair Wash",
        srv3Desc: "Professional hair wash with custom shampoo according to hair type, plus a relaxing scalp massage. Leaves hair clean, healthy, and smelling amazing.",
        offersSectionTitle: "Special Offers",
        off1Title: "Hair & Beard Cut",
        off1Desc: "Special offer including haircut and professional beard trim. Comprehensive service at an affordable price.",
        off2Title: "Haircut & Skin Care",
        off2Desc: "Complete package including haircut and a deep skin cleansing session. A luxurious comprehensive care experience.",
        off3Title: "Full Royal Package",
        off3Desc: "A complete luxury experience: Haircut + Beard trim + Hair wash + Skin care + Mask. Everything you need in one session.",
        off3Price: "50 instead of 75 VIP",
        prodSectionTitle: "Our Featured Products",
        prod1Title: "VGR V-393 Trimmer (2 in 1)",
        prod1Desc: "Waterproof, rechargeable, with multiple attachments for a precise and easy shave.",
        prod1Price: "15 JD",
        prod2Title: "VGR V-989 Trimmer",
        prod2Desc: "Professional corded/cordless trimmer, LED display, turbo mode, 180 minutes battery.",
        prod2Price: "15 JD",
        prod3Title: "Blast Spider Wax",
        prod3Desc: "Strong hold and natural shine for an elegant style all day long.",
        prod3Price: "3 JD",
        prod4Title: "ENERGY Original Hair Cream",
        prod4Desc: "Natural shine and perfect hold for long-lasting styling.",
        prod4Price: "3 JD",
        prod5Title: "Geemy Nose Trimmer",
        prod5Desc: "Nose and ear hair trimmer (Waterproof).",
        prod5Price: "6 JD",
        prod6Title: "💈ELEGANCE Matte Wax",
        prod6Desc: "Hair styling wax for a strong hold without shine.",
        prod6Price: "3 JD",
        prod7Title: "Elegance Splash Body Spray",
        prod7Desc: "Refreshing body spray with a distinctive scent that lasts.",
        prod7Price: "5 JD",
        prod8Title: "💈ELEGANCE Gel",
        prod8Desc: "Hair styling gel enriched with vitamins for extra care and dryness protection.",
        prod8Price: "3 JD",
        footerContact: "Contact Information",
        footerMap: "Our location on the map",
        footerFollow: "Follow Us",
        footerAbout: "Kotaiba Salon",
        footerDesc: "We provide the best haircut and hair care services using the latest techniques and modern styles.",
        footerCopy: "2025 © Kotaiba Salon. All rights reserved.",
        toggleLangBtn: "عربي",
        scrollToTopTitle: "Back to Top",
        whatsappTitle: "Contact us on WhatsApp"
    }
};

document.addEventListener('DOMContentLoaded', () => {

    // Language Toggle Logic
    const langBtn = document.getElementById('langToggleBtn');
    let currentLang = 'ar';

    function setLanguage(lang) {
        currentLang = lang;
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                if (el.tagName === 'TITLE') {
                    document.title = translations[lang][key];
                } else if (el.tagName === 'A' && el.hasAttribute('title') && key.includes('Title')) {
                    el.title = translations[lang][key];
                } else if (el.tagName === 'BUTTON' && el.hasAttribute('title') && key.includes('Title')) {
                    el.title = translations[lang][key];
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });
    }

    if (langBtn) {
        langBtn.addEventListener('click', () => {
            const newLang = currentLang === 'ar' ? 'en' : 'ar';
            setLanguage(newLang);
        });
    }


    // Splash Screen Logic
    const splashScreen = document.getElementById('splash-screen');
    if (splashScreen) {
        setTimeout(() => {
            splashScreen.style.opacity = '0';
            setTimeout(() => {
                splashScreen.style.display = 'none';
                document.body.style.overflow = 'auto'; // Re-enable scrolling
            }, 500);
        }, 1500);
    } else {
        document.body.style.overflow = 'auto';
    }

    // Modal logic
    const imageModal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");

    window.openImage = function (src) {
        modalImage.src = src;
        imageModal.classList.add("active");
        document.body.style.overflow = "hidden";
    };

    window.closeImage = function (e) {
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

    window.nextSlide = function () {
        current = (current + 1) % slides.length;
        showSlide(current);
    };

    window.prevSlide = function () {
        current = (current - 1 + slides.length) % slides.length;
        showSlide(current);
    };

    setInterval(nextSlide, 4000);

    // Mobile Menu
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    if (mobileBtn && navLinks) {
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

    // Navigation (Smooth scroll)
    const links = document.querySelectorAll('.nav-links a');
    const productsSec = document.getElementById('products');

    if (productsSec) {
        productsSec.style.display = 'block';
    }

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const sectionId = href.substring(1);
                const target = document.getElementById(sectionId);

                if (target) {
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
    if (scrollToTopBtn) {
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
