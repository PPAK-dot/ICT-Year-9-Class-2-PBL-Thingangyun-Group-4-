// About Us JS
document.addEventListener("DOMContentLoaded", () => {

    // Highlight the current navigation page
    const currentPage = window.location.pathname
        .split("/")
        .pop()
        .toLowerCase();

    document.querySelectorAll(".fire-navbar .nav-link").forEach(link => {
        const linkPage = link.getAttribute("href")
            ?.split("/")
            .pop()
            .toLowerCase();

        if (linkPage === currentPage) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        } else {
            link.classList.remove("active");
            link.removeAttribute("aria-current");
        }
    });


    // Automatically update copyright year
    const year = document.getElementById("copyrightYear");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    // Search popup
    const searchButton = document.getElementById("searchButton");
    const searchPopup = document.getElementById("searchPopup");
    const closeSearch = document.getElementById("closeSearch");
    const searchInput = document.getElementById("searchInput");
    const searchForm = document.getElementById("searchForm");

    if (searchButton && searchPopup) {
        searchButton.addEventListener("click", () => {
            searchPopup.classList.add("show");
            searchInput?.focus();
        });
    }

    if (closeSearch && searchPopup) {
        closeSearch.addEventListener("click", () => {
            searchPopup.classList.remove("show");
        });
    }

    if (searchPopup) {
        searchPopup.addEventListener("click", event => {
            if (event.target === searchPopup) {
                searchPopup.classList.remove("show");
            }
        });
    }

    // Close search with Escape
    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            searchPopup?.classList.remove("show");
        }
    });

    // Basic search submission
    if (searchForm && searchInput) {
        searchForm.addEventListener("submit", event => {
            event.preventDefault();

            const query = searchInput.value.trim();

            if (query) {
                window.location.href =
                    "https://www.google.com/search?q=" +
                    encodeURIComponent(query + " fire safety");
            }
        });
    }


    // Smooth scrolling for internal section links
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


    // Keyboard navigation accessibility
    document.addEventListener("keydown", event => {
        if (event.key === "Tab") {
            document.body.classList.add("keyboard-navigation");
        }
    });

    document.addEventListener("pointerdown", () => {
        document.body.classList.remove("keyboard-navigation");
    });

});
