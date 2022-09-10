/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */
/*
//Global Variables
*/
const sections = document.querySelectorAll("section");
const nav = document.getElementById("navbar__list");
const navBar = document.getElementById("navbar__list");

//nav bar
sections.forEach((section) => {
  const sectionNav = `<li><a href='#${section.id}'class='sectionNav nav_${section.id}'>${section.id}</a></li>`;
  nav.insertAdjacentHTML("afterbegin", sectionNav);
});

//active nav and section
//callback function
const callFunction = function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("your-active-class");
      document
        .querySelector(`.Nav_${entry.target.id}`)
        .classList.add("activeNav");
    } else {
      entry.target.classList.remove("your-active-class");
      document
        .querySelector(`.Nav_${entry.target.id}`)
        .classList.remove("activeNav");
    }
  });
};
const options = {
  threshold: 0.45,
};
//Intersection
const sectionObserver = new IntersectionObserver(callFunction, options);

//observe
sections.forEach(function (section) {
  sectionObserver.observe(section);
});
/*
//fade Nav
*/
const fadeHover = function (e) {
  if (e.target.classList.contains("sectionNav")) {
    const siblings = e.target.closest("nav").querySelectorAll(".sectionNav");
    siblings.forEach((el) => {
      if (el !== e.target) el.style.opacity = this;
    });
  }
};
////////////////////
//Event Handler
//fade animation
nav.addEventListener("mouseover", fadeHover.bind(0.5));
nav.addEventListener("mouseout", fadeHover.bind(1));
// smooth scrolling

navBar.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("sectionNav")) {
    document
      .querySelector(e.target.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  }
});
