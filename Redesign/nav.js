const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const blogBody = document.querySelector(".blog");
const hamburgerImg = document.querySelector(".mobile-nav-toggle");


navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        hamburgerImg.style.opacity = .6;
    } else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false);
        hamburgerImg.style.opacity = .4;
    }

    console.log(visibility);
});


blogBody.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');

    if (visibility === "false") {
    } else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false);
        hamburgerImg.style.opacity = .4;
    }

    console.log(visibility);
})