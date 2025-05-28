const newsData = [
  {
    title: "Новости 1",
    description: "Краткое описание новости 1...",
    image: "https://github.com/ваш_пользователь/ваш_репозиторий/raw/main/images/news1.jpg",
    link: "https://kg.akipress.org/news/1"
  },
  {
    title: "Новости 2",
    description: "Краткое описание новости 2...",
    image: "https://github.com/ваш_пользователь/ваш_репозиторий/raw/main/images/news2.jpg",
    link: "https://kg.akipress.org/news/2"
  },
  {
    title: "Новости 3",
    description: "Краткое описание новости 3...",
    image: "https://github.com/ваш_пользователь/ваш_репозиторий/raw/main/images/news3.jpg",
    link: "https://kg.akipress.org/news/3"
  }
];

// Функция для отображения новостей
function renderNews() {
  const newsList = document.getElementById('newsList');
  newsList.innerHTML = '';  // Очистить существующие новости

  newsData.forEach(news => {
    const newsItem = document.createElement('div');
    newsItem.classList.add('news-item');

    newsItem.innerHTML = `
      <img src="${news.image}" alt="${news.title}" class="news-image"/>
      <h3 class="news-title">${news.title}</h3>
      <p class="news-description">${news.description}</p>
      <a href="${news.link}" class="read-more">Читать полностью</a>
    `;

    newsList.appendChild(newsItem);
  });
}

// Загрузить новости при старте
renderNews();
