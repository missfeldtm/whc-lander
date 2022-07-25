const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-drawer");

const closeMenu = document.getElementById("js-close-nav");

let menuState = false;

function toggleMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

  menuState = true;
}

hamburger.addEventListener("click", () => {
  toggleMenu();
});

closeMenu.addEventListener("click", () => {
  toggleMenu();
});

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) =>
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// listen for DOMContentLoaded event in teh document
document.addEventListener("DOMContentLoaded", function () {
  // do things after the DOM loads partially
  console.log("DOM is loaded");

  let scrollText = document.querySelectorAll(".card__scroll");
  let readMore = document.querySelectorAll(".card__copy");
  let slides = document.querySelectorAll(".swiper-slide");
  console.log(scrollText);

  readMore.forEach((element, index) => {
    console.log(index);
    element.addEventListener("click", () => {
      console.log("click");
      readMore[index].classList.toggle("expand");
      slides[index].classList.toggle("expand--card");
    });
  });
});
