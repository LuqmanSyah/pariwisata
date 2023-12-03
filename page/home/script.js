
// Scroll navbar
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("nav");
  navbar.classList.toggle("scrolled", window.scrollY > 0);
});

// Hamburger menu
const menuIcon = document.getElementById("menu-icon");
const navList = document.getElementById("nav-list");
menuIcon.addEventListener("click", () => {
  navList.classList.toggle("hidden")
});
