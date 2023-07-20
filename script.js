const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

/* Activate the .hamburger and .nav-menu when the hamburger button is clicked */
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle ("active");
    navMenu.classList.toggle("active");

    /* If navMenu is active, adjust the top position */
    if(navMenu.classList.contains("active")) {
        let hamburgerBottom = hamburger.getBoundingClientRect().bottom + window.pageYOffset;
        navMenu.style.top = `${hamburgerBottom}px`;
    }
})

/* Remove the active class after the /hamburger or .nav-menu is clicked */
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", (event) => {
    const subMenu = n.nextElementSibling;

    /* Toggle the display property */
    subMenu.style.display = subMenu.style.display === "block" ? "none" : "block";
    subMenu.classList.toggle("sub-menu-open");
    n.parentElement.classList.toggle("nav-item-active");

    /* If navMenu is active, adjust the top position */
    if(navMenu.classList.contains("active")) {
        let hamburgerBottom = hamburger.getBoundingClientRect().bottom + window.pageYOffset;
        navMenu.style.top = `${hamburgerBottom}px`;
    }
}));


/* Clickable featured pets carousel */
document.addEventListener("DOMContentLoaded", function() {
    const carouselSlide = document.querySelector(".carousel-slide");
    const carouselItems = document.querySelectorAll(".carousel-item");
    const prevButton = document.querySelector(".carousel-control.prev");
    const nextButton = document.querySelector(".carousel-control.next");
    const itemWidth = carouselItems[0].offsetWidth;
    const itemsPerPage = 3;
    let currentPosition = 0;
  
    prevButton.addEventListener("click", function() {
      currentPosition -= itemWidth * itemsPerPage;
      if (currentPosition < 0) {
        currentPosition = (carouselItems.length - itemsPerPage) * itemWidth;
      }
      carouselSlide.style.transform = `translateX(-${currentPosition}px)`;
    });
  
    nextButton.addEventListener("click", function() {
      currentPosition += itemWidth * itemsPerPage;
      if (currentPosition > (carouselItems.length - itemsPerPage) * itemWidth) {
        currentPosition = 0;
      }
      carouselSlide.style.transform = `translateX(-${currentPosition}px)`;
    });
  });

  /* <article> */
document.querySelector('.learn-more').addEventListener('click', function() {
    alert('You clicked "Learn more"');
});

  