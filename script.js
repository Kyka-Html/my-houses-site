document.addEventListener("DOMContentLoaded", () => {
  // 1. Сообщение в консоль (для проверки, что файл подключен)
  console.log("Сайт Каркас-Мастер 2026 успешно запущен!");

  // 2. Плавный переход по ссылкам-якорям (если они появятся)
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // 3. Можно добавить эффект появления карточек при скролле
  const cards = document.querySelectorAll(".f-card");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  cards.forEach((card) => {
    card.style.opacity = 0;
    card.style.transform = "translateY(20px)";
    card.style.transition = "all 0.6s ease-out";
    observer.observe(card);
  });
});
