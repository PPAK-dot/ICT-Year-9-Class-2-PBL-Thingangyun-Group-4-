// HERO TEXT ANIMATION

const heroTextElements = document.querySelectorAll(
    ".prevention-hero .hero-label, " +
    ".prevention-hero h1, " +
    ".prevention-hero p, " +
    ".prevention-hero .red-button"
);

const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

if (!prefersReducedMotion) {

    heroTextElements.forEach((element, index) => {

        element.animate(
            [
                {
                    opacity: 0,
                    transform: "translateY(25px)"
                },
                {
                    opacity: 1,
                    transform: "translateY(0)"
                }
            ],
            {
                duration: 800,
                delay: 150 + index * 130,
                easing: "cubic-bezier(0.16, 1, 0.3, 1)",
                fill: "both"
            }
        );

    });

}

// SEARCH POPUP

const searchBtn = document.getElementById("searchBtn");
const searchPopup = document.getElementById("searchPopup");
const closeSearch = document.getElementById("closeSearch");
const searchInput = document.getElementById("searchInput");
const searchForm = document.getElementById("searchForm");


// Open search popup

if (searchBtn && searchPopup) {

    searchBtn.addEventListener("click", () => {

        searchPopup.classList.add("show");

        if (searchInput) {
            searchInput.focus();
        }

    });

}


// Close search popup

if (closeSearch && searchPopup) {

    closeSearch.addEventListener("click", () => {

        searchPopup.classList.remove("show");

    });

}


// Close when clicking outside the search box

if (searchPopup) {

    searchPopup.addEventListener("click", (event) => {

        if (event.target === searchPopup) {
            searchPopup.classList.remove("show");
        }

    });

}


// Close using Escape key

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape" && searchPopup) {
        searchPopup.classList.remove("show");
    }

});


// Search form

if (searchForm && searchInput) {

    searchForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const query = searchInput.value.trim();

        if (!query) return;

        const searchURL =
            "https://www.google.com/search?q=" +
            encodeURIComponent(query + " FireWise fire safety");

        window.open(searchURL, "_blank");

        searchPopup.classList.remove("show");

    });

}
