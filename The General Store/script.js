document.addEventListener("DOMContentLoaded", function () {
    // Toggle search form
    const searchBtn = document.getElementById("search-btn");
    const searchForm = document.querySelector(".search-form");
    searchBtn.addEventListener("click", function () {
        searchForm.classList.toggle("active");
    });

    // Toggle shopping cart
    const cartBtn = document.getElementById("cart-btn");
    const shoppingCart = document.querySelector(".shopping-cart");
    cartBtn.addEventListener("click", function () {
        shoppingCart.classList.toggle("active");
    });

    // Toggle login form
    const loginBtn = document.getElementById("login-btn");
    const loginForm = document.querySelector(".login-form");
    loginBtn.addEventListener("click", function () {
        loginForm.classList.toggle("active");
    });

    // Smooth scrolling for navbar links
    const navbarLinks = document.querySelectorAll(".navbar a");
    navbarLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").slice(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth",
            });
        });
    });
});
