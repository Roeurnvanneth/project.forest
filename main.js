// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// ScrollReveal animations for page elements
ScrollReveal().reveal(".text-center", {
  delay: 200,
  duration: 1000,
  distance: "50px",
  opacity: 0,
});
ScrollReveal().reveal(".card", {
  delay: 200,
  duration: 1000,
  distance: "50px",
  opacity: 0,
});
ScrollReveal().reveal(".btn", {
  delay: 500,
  duration: 1500,
  distance: "50px",
  opacity: 0,
});

// Sticky Navbar Effect
window.onscroll = function () {
  stickyNavbar();
};

var navbar = document.querySelector(".navbar");
var sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// Toggle Navbar on small screens
document.addEventListener("DOMContentLoaded", function () {
  const navbarToggle = document.querySelector(".navbar-toggler");
  const navbarMenu = document.querySelector("#navbarNav");

  navbarToggle.addEventListener("click", function () {
    navbarMenu.classList.toggle("collapse");
  });
});

// Newsletter Signup Form Validation
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const firstName = document.getElementById("first-name").value;
  const email = document.getElementById("email").value;

  if (firstName === "" || email === "") {
    alert("Please fill out both fields.");
    return;
  }

  // You can handle the form submission (e.g., sending data to the server here)
  alert("Thank you for signing up!");
});

// Adding a simple animation to the "Donate Now" button
document.querySelector(".btn-success").addEventListener("click", function () {
  alert("Thank you for considering a donation!");
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Social Media Icon Click (Opens Links)
document.querySelectorAll(".bi").forEach((icon) => {
  icon.addEventListener("click", function () {
    const platform = this.classList[1]; // Get platform name (like 'bi-facebook')
    const url = `https://www.${platform}.com`;
    window.open(url, "_blank");
  });
});
// JavaScript to trigger the typing effect
document.addEventListener("DOMContentLoaded", function() {
    const text = `A platform for the   \t trillion trees community This is the Small tree.`;
    let i = 0;
    const heroTextElement = document.getElementById("heroText");
    const typeWriter = () => {
        if (i < text.length) {
            heroTextElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    typeWriter();
});
