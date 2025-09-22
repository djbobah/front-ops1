// Массивы данных для генерации
const firstNames = [
  "Александр",
  "Мария",
  "Дмитрий",
  "Анна",
  "Сергей",
  "Елена",
  "Андрей",
  "Ольга",
  "Иван",
  "Наталья",
  "Михаил",
  "Ирина",
];
const lastNames = [
  "Иванов",
  "Петрова",
  "Сидоров",
  "Смирнова",
  "Кузнецов",
  "Васильева",
  "Попов",
  "Новикова",
  "Соколов",
  "Морозова",
];
const domains = [
  "gmail.com",
  "yandex.ru",
  "mail.ru",
  "yahoo.com",
  "outlook.com",
];
const cities = [
  "Москва",
  "Санкт-Петербург",
  "Новосибирск",
  "Екатеринбург",
  "Казань",
  "Нижний Новгород",
];
const jobs = [
  "Разработчик",
  "Дизайнер",
  "Менеджер",
  "Аналитик",
  "Маркетолог",
  "Бухгалтер",
  "Инженер",
];

let userCount = 0;

function generateUser() {
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const domain = domains[Math.floor(Math.random() * domains.length)];
  const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${domain}`;
  const age = Math.floor(Math.random() * 50) + 18;
  const city = cities[Math.floor(Math.random() * cities.length)];
  const job = jobs[Math.floor(Math.random() * jobs.length)];
  const phone = `+7 (9${Math.floor(Math.random() * 900) + 100}) ${
    Math.floor(Math.random() * 900) + 100
  }-${Math.floor(Math.random() * 9000) + 1000}`;

  const userCard = document.createElement("div");
  userCard.className = "user-card";
  userCard.innerHTML = `
                <div class="avatar">${firstName[0]}${lastName[0]}</div>
                <h2 class="user-name">${firstName} ${lastName}</h2>
                <ul class="user-details">
                    <li><span class="label">Email:</span> ${email}</li>
                    <li><span class="label">Возраст:</span> ${age} лет</li>
                    <li><span class="label">Город:</span> ${city}</li>
                    <li><span class="label">Профессия:</span> ${job}</li>
                    <li><span class="label">Телефон:</span> ${phone}</li>
                </ul>
            `;

  document.getElementById("usersContainer").appendChild(userCard);
  userCount++;
  document.getElementById("userCount").textContent = userCount;
}

function clearAllUsers() {
  document.getElementById("usersContainer").innerHTML = "";
  userCount = 0;
  document.getElementById("userCount").textContent = userCount;
}

// Генерируем 3 пользователя при загрузке страницы
window.onload = function () {
  for (let i = 0; i < 3; i++) {
    generateUser();
  }
};
