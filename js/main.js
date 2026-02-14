/*===== MENU SHOW & HIDDEN =====*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navOverlay = document.getElementById("nav-overlay");

function openMenu() {
    navMenu.classList.add("show");
    navOverlay.classList.add("show");
    navToggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
}

function closeMenu() {
    navMenu.classList.remove("show");
    navOverlay.classList.remove("show");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
}

navToggle.addEventListener("click", openMenu);
navClose.addEventListener("click", closeMenu);
navOverlay.addEventListener("click", closeMenu);

// Close menu on Escape key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navMenu.classList.contains("show")) {
        closeMenu();
        navToggle.focus();
    }
});

/*===== CLOSE MENU ON NAV LINK CLICK =====*/
const navLinks = document.querySelectorAll(".nav__link");
navLinks.forEach((link) => link.addEventListener("click", closeMenu));

/*====== SCROLL SECTIONS ACTIVE LINK ======*/
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section[id]");
    const allNavLinks = document.querySelectorAll(".nav__list a");

    window.addEventListener("scroll", () => {
        const currentScroll = window.scrollY;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute("id");

            allNavLinks.forEach((link) => {
                if (link.getAttribute("href") === `#${sectionId}`) {
                    if (currentScroll >= sectionTop && currentScroll < sectionTop + sectionHeight) {
                        link.classList.add("active");
                    } else {
                        link.classList.remove("active");
                    }
                }
            });
        });
    });
});

/*===== SERVICES ACCORDION TOGGLE =====*/
const toggles = document.querySelectorAll(".services__toggle");

toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
        const parent = toggle.closest(".services__content");
        const isActive = parent.classList.contains("active-service");

        parent.classList.toggle("active-service");
        toggle.setAttribute("aria-expanded", isActive ? "false" : "true");
    });
});
