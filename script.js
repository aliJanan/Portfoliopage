/** Event listener on multiple elements */
const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}


/** NAVBAR TOGGLE FOR MOBILE */
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);


/** HEADER | active header when window scroll down to 100px */
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});


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
document.addEventListener("DOMContentLoaded", function() {
  var typed = new Typed(".auto-type", {
    strings: ["Web Designer", "Frontend Developer", "Backend Developer", "UI/UX Designer"],
    loop: true,
    typeSpeed: 150,
    backSpeed: 150, 
    showCursor: false
  });
});



document.addEventListener("DOMContentLoaded", function() {
  var typed = new Typed(".auto-typing-skill", {
    strings: ["My Skills"],
    loop: true,
    typeSpeed: 150,
    backSpeed: 150, 
    showCursor: false
  });
});


document.addEventListener("DOMContentLoaded", function() {
  var typed = new Typed(".auto-typing-about", {
    strings: ["About Me"],
    loop: true,
    typeSpeed: 150,
    backSpeed: 150, 
    showCursor: false
  });
});
/* AUTO TYPE JS END */





/* ALERT CONTACT ME START */
function showAlert(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Display a simple alert
  alert("Thank you for your contact!");

  // Reset the form inputs
  document.querySelector('.contact-form').reset();
}

/* ALERT CONTACT ME END */