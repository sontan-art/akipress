const newsData = [
  {
    title: "Проблемы экологии в Центральной Азии",
    description: "Проблемы экологии в Центральной Азии становятся все более актуальными. Как они влияют на развитие региона и что делают власти...",
    image: "news1.jpg",
    link: "https://kg.akipress.org/news1"
  },
  {
    title: "Политическая ситуация в Кыргызстане",
    description: "Политическая ситуация в Кыргызстане: анализ текущих событий и прогнозы на ближайшие годы. Важные политические инициативы и их последствия...",
    image: "news2.jpg",
    link: "https://kg.akipress.org/news2"
  },
  {
    title: "Социальные реформы и их влияние",
    description: "Социальные реформы, внедряемые в Кыргызстане, меняют жизнь людей. Какие изменения ждут страну в сфере здравоохранения и образования...",
    image: "news3.jpg",
    link: "https://kg.akipress.org/news3"
  }
];

// Функция для отображения новостей
function renderNews() {
  const newsList = document.querySelector('.news-list');
  newsList.innerHTML = '';  // Очистить существующие новости

  newsData.forEach(news => {
    const newsItem = document.createElement('div');
    newsItem.classList.add('news-item');

    newsItem.innerHTML = `
      <img src="${news.image}" alt="${news.title}" class="news-image"/>
      <h3><a href="${news.link}" target="_blank">${news.title}</a></h3>
      <p>${news.description}</p>
      <a href="${news.link}" target="_blank">Читать
