const navToggle = document.querySelector(".nav-toggle");
const Nav = document.querySelector(".nav");
const navLink = document.querySelectorAll(".nav-link");

navToggle.addEventListener("click", function () {
  document.body.classList.toggle("nav-open");
});

navLink.forEach(function (link) {
  link.addEventListener("click", function () {
    document.body.classList.remove("nav-open");
  });
});
