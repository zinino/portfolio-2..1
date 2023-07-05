const navToggle = document.querySelector(".nav-toggle");
const Nav = document.querySelector(".nav");
const navLink = document.querySelectorAll(".nav-link");
const liveBlack = document.getElementById("live");

liveBlack.addEventListener("click", function () {
  alert(
    "site deploying in progress sorry for the inconvienence it will be back soon :)"
  );
});
navToggle.addEventListener("click", function () {
  document.body.classList.toggle("nav-open");
});

navLink.forEach(function (link) {
  link.addEventListener("click", function () {
    document.body.classList.remove("nav-open");
  });
});
