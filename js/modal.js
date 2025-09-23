const modal = document.getElementById("projectModal");
const modalClose = document.getElementById("modalClose");
const modalImg = modal.querySelector(".modal-img");
const modalTitle = modal.querySelector(".modal-title");
const modalDesc = modal.querySelector(".modal-desc");
const modalLink = modal.querySelector("a");

// Находим все кнопки "Подробнее"
const projectButtons = document.querySelectorAll(".portfolio-card .btn");

// Массив проектов (можно расширять)
const projects = [
  {
    title: "Сайт для ремонта квартир",
    img: "./img/portfolio1.jpg",
    desc: "Адаптивная вёрстка и оптимизация для клиента.",
    link: "http://remarster.ru/"
  },
  {
    title: "Сайт для Астрахань Цифровой",
    img: "./img/portfolio2.jpg",
    desc: "Адаптивная вёрстка и оптимизация для цифровых волонтёров.",
    link: "https://astrakhandigital.ru/"
  },
  {
    title: "Сайт для покупки печенек",
    img: "./img/portfolio3.jpg",
    desc: "Учебный проект с классным дизайном и версткой.",
    link: "https://homkaw.github.io/cookie/"
  }
];

// Открытие модалки
projectButtons.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const project = projects[index];
    modalImg.src = project.img;
    modalTitle.textContent = project.title;
    modalDesc.textContent = project.desc;
    modalLink.href = project.link;
    modal.classList.add("active");
  });
});

// Закрытие
modalClose.addEventListener("click", () => {
  modal.classList.remove("active");
});

// Клик по фону
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});
