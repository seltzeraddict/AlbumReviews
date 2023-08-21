const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const blogBody = document.querySelector(".blog");
const hamburgerImg = document.querySelector(".mobile-nav-toggle");
const topSidebar = document.querySelector(".sidebar");

const menuItems = document.querySelectorAll('.menu_ulist li a');


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
});




// if (window.innerWidth > 900) {
//     const menuItems = document.querySelectorAll('.menu_ulist li a');

//     document.addEventListener('mousemove', (e) => {
//         menuItems.forEach((item) => {
//             const rect = item.getBoundingClientRect();
//             const centerX = rect.left + rect.width / 2;
//             const centerY = rect.top + rect.height / 2;

//             const dx = e.clientX - centerX;
//             const dy = e.clientY - centerY;

//             const distance = Math.sqrt(dx * dx + dy * dy);

//             const maxDistance = Math.sqrt(window.innerWidth**2 + window.innerHeight**2);

//             const opacity = .9 - (distance / maxDistance) * 1;

//             item.style.opacity = opacity;
//         });
//     });
// }

if (window.innerWidth > 900) {
    const menuItems = document.querySelectorAll('.menu_ulist li a');

    document.addEventListener('mousemove', (e) => {
        menuItems.forEach((item) => {
            const rect = item.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const dx = e.clientX - centerX;
            const dy = e.clientY - centerY;

            const distance = Math.sqrt(dx * dx + dy * dy);

            const minOpacity = 0.3;
            const maxOpacity = 0.96;

            if (distance <= 300) {
                const maxDistance = 300;
                const opacityRange = maxOpacity - minOpacity;
                const opacity = maxOpacity - (distance / maxDistance) * opacityRange;
                item.style.opacity = opacity;
            } else {
                item.style.opacity = minOpacity; // Set the opacity to minOpacity if the distance is more than 300px
            }
        });
    });
}
