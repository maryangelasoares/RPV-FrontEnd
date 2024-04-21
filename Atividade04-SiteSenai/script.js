const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownMenu = document.querySelector(".dropdown-menu");

dropdownToggle.addEventListener("click", () => {
  dropdownMenu.classList.toggle("active");
  dropdownToggle.setAttribute("aria-expanded", dropdownMenu.classList.contains("active"));
});

