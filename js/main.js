const nav = document.querySelector(".nav-links");
const toggleBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelectorAll(".nav-link");

toggleBtn.addEventListener("click", function () {
  nav.classList.toggle("open");
});

for (let navLink of navLinks) {
  navLink.addEventListener("click", function () {
    nav.classList.remove("open");
  });
}

let modeBtn = document.getElementById("dark-light");

modeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

window.addEventListener("scroll", function () {
  toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.style.bottom = "20px";
  } else {
    backtop.style.bottom = "-50px";
  }
}

window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.getElementById("navbar");

function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
    navbar.classList.remove("navbar-shrink");
  }
}
