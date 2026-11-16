
document.addEventListener("DOMContentLoaded", () => {

    /* NAVBAR: HIGHLIGHT CURRENT PAGE */

    const currentPage = window.location.pathname
        .split("/")
        .pop()
        .toLowerCase();

    document.querySelectorAll(".fire-navbar .nav-link").forEach(link => {

        const linkPage = link.getAttribute("href");

        if (!linkPage) return;

        const pageName = linkPage.split("/").pop().toLowerCase();

        if (pageName === currentPage) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        } else {
            link.classList.remove("active");
            link.removeAttribute("aria-current");
        }

    });


    /* HERO CAROUSEL */

    const heroCarousel = document.getElementById("heroCarousel");

    let carouselInstance = null;

    if (heroCarousel && window.bootstrap) {

        carouselInstance = bootstrap.Carousel.getOrCreateInstance(
            heroCarousel,
            {
                interval: 5500,
                pause: "hover",
                wrap: true
            }
        );

    }


    /* Hero Animation Text */

    function animateHeroText(slide) {

        if (!slide) return;

        const heroContent = slide.querySelector(".hero-content");

        if (!heroContent) return;

        heroContent.classList.remove("hero-text-animate");

        // Restart the animation
        void heroContent.offsetWidth;

        heroContent.classList.add("hero-text-animate");

    }

    if (heroCarousel) {

        const firstSlide = heroCarousel.querySelector(
            ".carousel-item.active"
        );

        animateHeroText(firstSlide);

        heroCarousel.addEventListener("slid.bs.carousel", event => {

            animateHeroText(event.relatedTarget);

        });

    }


    /* Search Popup */

    const searchBtn = document.getElementById("searchBtn");
    const searchPopup = document.getElementById("searchPopup");
    const closeSearch = document.getElementById("closeSearch");
    const searchInput = document.getElementById("searchInput");

    function openSearch() {

        if (!searchPopup) return;

        searchPopup.classList.add("show");

        searchPopup.setAttribute("aria-hidden", "false");

        searchInput?.focus();

    }

    function hideSearch() {

        if (!searchPopup) return;

        searchPopup.classList.remove("show");

        searchPopup.setAttribute("aria-hidden", "true");

    }

    searchBtn?.addEventListener("click", openSearch);

    closeSearch?.addEventListener("click", hideSearch);


    // Close when clicking outside the search box

    searchPopup?.addEventListener("click", event => {

        if (event.target === searchPopup) {
            hideSearch();
        }

    });


    // Close with Escape key

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {
            hideSearch();
        }

    });


    /* SEARCH FORM */

    const searchForm = document.getElementById("searchForm");

    searchForm?.addEventListener("submit", event => {

        event.preventDefault();

        const query = searchInput.value.trim().toLowerCase();

        if (!query) return;

        const searchableSections = [
            {
                keywords: ["about", "firewise", "issue", "background"],
                url: "FireWise_About.html"
            },
            {
                keywords: ["news", "recent fires", "updates"],
                url: "FireWise_News.html"
            },
            {
                keywords: ["prevention", "prevent", "electrical", "cooking", "hazards"],
                url: "FireWise_Prevention.html"
            },
            {
                keywords: ["emergency", "evacuation", "safety guide"],
                url: "FireWise_Emergency_Guide.html"
            },
            {
                keywords: ["organization", "resources", "fire services"],
                url: "FireWise_Organizations.html"
            }
        ];

        const result = searchableSections.find(section =>
            section.keywords.some(keyword => query.includes(keyword))
        );

        if (result) {

            window.location.href = result.url;

        } else {

            alert(
                "No matching page was found. Please try searching for About, News, Prevention, Emergency Guide, or Organizations."
            );

        }

    });


    /*SMOOTH SCROLLING*/

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", event => {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* FOOTER: AUTOMATIC COPYRIGHT YEAR */

    document.querySelectorAll(".copyright").forEach(footerText => {

        footerText.innerHTML = footerText.innerHTML.replace(
            /©\s*\d{4}/,
            `© ${new Date().getFullYear()}`
        );

    });


    /* ACCESSIBILITY */

    document.addEventListener("keydown", event => {

        if (event.key === "Tab") {
            document.body.classList.add("keyboard-navigation");
        }

    });

    document.addEventListener("pointerdown", () => {

        document.body.classList.remove("keyboard-navigation");

    });


    /* REDUCED MOTION */

    const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );

    if (reducedMotion.matches && carouselInstance) {

        carouselInstance.pause();

    }

});

