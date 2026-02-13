/*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById("nav-menu");
const toggleMenu = document.getElementById("nav-toggle");
const closeMenu = document.getElementById("nav-close");

// SHOW
toggleMenu.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});

// HIDDEN
closeMenu.addEventListener("click", () => {
    navMenu.classList.remove("show");
});

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    navMenu.classList.remove("show");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*====== SCROLL SECTIONS ACTIVE LINK ======*/
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav__list a");

    window.addEventListener("scroll", () => {
        const currentScroll = window.scrollY;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 50;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute("id");

            navLinks.forEach((link) => {
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

// =============== active-Service onClick ========== */
const toggles = document.querySelectorAll(".services__toggle");

toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
        toggle.parentNode.classList.toggle("active-service");
    });
});
