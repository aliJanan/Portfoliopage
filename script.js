/*SCROLL REVEAL */
const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

const reveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      revealElements[i].classList.add("revealed");
    }
  }
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);


/** HEADER | active header when window scroll down to 100px */
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});




/* AUTO TYPE JS START */
document.addEventListener("DOMContentLoaded", function() {
  var typed = new Typed(".auto-type", {
    strings: ["Web Designer", "Frontend Developer", "Backend Developer", "UI/UX Designer"],
    loop: true,
    typeSpeed: 150,
    backSpeed: 150
  });
});
/* AUTO TYPE JS END */


