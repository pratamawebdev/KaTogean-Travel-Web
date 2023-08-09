/* Navbar - Scroll Start */

const navBar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const windowPosition = window.scrollY > 0;
  navBar.classList.toggle("scrolling-active", windowPosition);
});

/* Navbar - Scroll End */

/* Intro Start */
/*
let intro = document.querySelector(".intro");
let logo = document.querySelector(".logo");
let logoSpan = document.querySelectorAll(".logo-parts");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    logoSpan.forEach((span, index) => {
      setTimeout(() => {
        span.classList.add("active");
      }, (index + 1) * 100);
    });

    setTimeout(() => {
      logoSpan.forEach((span, index) => {
        setTimeout(() => {
          span.classList.remove("active");
          span.classList.add("fade");
        }, (span + 1) * 50);
      });
    }, 2000);

    setTimeout(() => {
      intro.style.top = "-100vh";
    }, 2300);
  });
});
*/
/* Intro End */

/* Alert Message */
var myAlert = document.getElementById("myAlert");
myAlert.style.display = "none";

function myFunction() {
  myAlert.style.display = "block";
}
