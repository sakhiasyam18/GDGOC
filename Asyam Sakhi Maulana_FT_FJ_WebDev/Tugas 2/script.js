document.addEventListener("DOMContentLoaded", () => {
  // Dark Mode Toggle
  const darkModeToggle = document.getElementById("darkModeToggle");
  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark") ? "dark" : "light"
    );
  });

  // Check saved theme or system preference
  if (
    localStorage.getItem("theme") === "dark" ||
    (!localStorage.getItem("theme") &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.body.classList.add("dark");
  }

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Slider Functionality
  const sliderWrapper = document.getElementById("sliderWrapper");
  const slides = document.querySelectorAll(".slide");
  const prevSlide = document.getElementById("prevSlide");
  const nextSlide = document.getElementById("nextSlide");
  let currentIndex = 0;
  const totalSlides = slides.length;

  function showSlide(index) {
    sliderWrapper.style.transform = `translateX(-${index * 100}%)`;
  }

  function next() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }

  function prev() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
  }

  nextSlide.addEventListener("click", next);
  prevSlide.addEventListener("click", prev);

  // Auto Slide
  setInterval(next, 3000);

  // Project Filter
  const projectFilter = document.getElementById("projectFilter");
  const projectGrid = document.getElementById("projectGrid");
  const projectItems = projectGrid.getElementsByTagName("div");

  projectFilter.addEventListener("change", (e) => {
    const filter = e.target.value;
    Array.from(projectItems).forEach((item) => {
      if (
        filter === "all" ||
        item.querySelector("h3").textContent.toLowerCase().includes(filter)
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
