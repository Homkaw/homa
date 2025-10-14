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
  },
  {
    title: "Сайт по заказу реплик картин",
    img: "./img/portfolio4.jpg",
    desc: "Проект был создан в свободное время для тренировки",
    link: "https://homkaw.github.io/cookie/"
  },
  {
    title: "Сайт на 23 февраля",
    img: "./img/portfolio5.jpg",
    desc: "Проект был создан в свободное время для праздника",
    link: "https://homkaw.github.io/23/"
  },
  {
    title: "Сайт разработки игр",
    img: "./img/portfolio6.jpg",
    desc: "Учебный проект для сокурсника.",
    link: "https://homkaw.github.io/igry/"
  },
  {
    title: "Сайт Астория",
    img: "./img/portfolio7.jpg",
    desc: "Учебный проект созданный на 2 курсе.",
    link: "https://homkaw.github.io/astoria/"
  },
  {
    title: "Сайт Сказочный лес",
    img: "./img/portfolio8.jpg",
    desc: "Проект для тренировки",
    link: "https://homkaw.github.io/fairy/"
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
