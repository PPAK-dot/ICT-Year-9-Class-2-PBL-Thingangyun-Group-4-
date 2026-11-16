// Js
document.addEventListener("DOMContentLoaded", () => {

  /* NAVBAR*/
  const currentPage = window.location.pathname
    .split("/")
    .pop()
    .toLowerCase();

  document.querySelectorAll(".fire-navbar .nav-link").forEach(link => {
    const linkPage = link.getAttribute("href");

    if (
      linkPage &&
      linkPage.split("/").pop().toLowerCase() === currentPage
    ) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    } else {
      link.classList.remove("active");
      link.removeAttribute("aria-current");
    }
  });

  const learnMoreButtons = document.querySelectorAll(
    ".emergency-step-card .step-link"
  );

  learnMoreButtons.forEach(link => {
    link.addEventListener("click", () => {
      const targetId = link.getAttribute("href");

      if (targetId && targetId.startsWith("#")) {
        const target = document.querySelector(targetId);

        if (target) {
          target.classList.add("safety-highlight");

          window.setTimeout(() => {
            target.classList.remove("safety-highlight");
          }, 1600);
        }
      }
    });
  });


  /* EMERGENCY GUIDE*/
  const safetyReminder = document.querySelector("#safety-reminder");

  if (safetyReminder) {
    safetyReminder.setAttribute("tabindex", "-1");
  }


  /* FOOTER */
  //  automatically update copyright year
  document.querySelectorAll(".footer-bottom p").forEach(footerText => {
    footerText.innerHTML = footerText.innerHTML.replace(
      /©\s*\d{4}/,
      `© ${new Date().getFullYear()}`
    );
  });


  /* ACCESSIBILITY*/
  document.addEventListener("keydown", event => {
    if (event.key === "Tab") {
      document.body.classList.add("keyboard-navigation");
    }
  });

  document.addEventListener("pointerdown", () => {
    document.body.classList.remove("keyboard-navigation");
  });

});
