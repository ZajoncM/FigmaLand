const navPanel = document.querySelector(".nav-panel");
const links = [...document.querySelectorAll(".nav-panel__link")];

document.querySelector(".burger").addEventListener("click", () => {
  showNavigation();
});

document.querySelector(".close-btn").addEventListener("click", () => {
  hideNavigation();
});

document.querySelector(".nav-panel__link").addEventListener("click", () => {
  hideNavigation();
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    hideNavigation();
  });
});

const showNavigation = () => {
  navPanel.classList.add("active");
  document.body.classList.add("-no-scroll");
};

const hideNavigation = () => {
  navPanel.classList.remove("active");
  document.body.classList.remove("-no-scroll");
};
