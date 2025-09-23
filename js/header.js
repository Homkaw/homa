document.addEventListener("DOMContentLoaded", () => {
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const mainNav = document.getElementById("mainNav");

  hamburgerBtn.addEventListener("click", () => {
    mainNav.classList.toggle("active");
    hamburgerBtn.classList.toggle("active");
  });

  // закрытие меню при клике по ссылке
  document.querySelectorAll("#mainNav a").forEach(link => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("active");
      hamburgerBtn.classList.remove("active");
    });
  });
});
