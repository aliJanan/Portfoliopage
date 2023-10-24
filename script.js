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


/* AUTO TYPE JS START */
var typed = new typed(".auto-type", {
  strings: ["frontend development", "backend development", "web designing", "android development", "web development"],
  loop: true,
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 500
});
/* AUTO TYPE JS END */


