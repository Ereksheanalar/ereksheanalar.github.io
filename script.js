const modal = document.getElementById("myModal");
const btn = document.getElementById("openModal");
const closeBtn = document.querySelector(".close");
const themeSwitcher = document.getElementById("themeSwitcher");
const body = document.body;

// Устанавливаем начальную тему
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
  body.classList.add("dark-theme");
  themeSwitcher.textContent = "Переключить на светлую тему";
} else {
  body.classList.add("light-theme");
  themeSwitcher.textContent = "Переключить на темную тему";
}

// Открытие модального окна
btn.onclick = () => {
  modal.classList.add("show");
};

// Закрытие модального окна
closeBtn.onclick = () => {
  modal.classList.remove("show");
};

window.onclick = (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
};

// Переключение темы
themeSwitcher.onclick = () => {
  body.classList.toggle("dark-theme");
  body.classList.toggle("light-theme");

  // Изменяем текст кнопки в зависимости от текущей темы
  if (body.classList.contains("dark-theme")) {
    themeSwitcher.textContent = "Переключить на светлую тему";
  } else {
    themeSwitcher.textContent = "Переключить на темную тему";
  }
};

