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

    const image = document.createElement('img');
    image.src = news.image;
    image.alt = news.title;
    image.classList.add('news-image');
    image.loading = "lazy";  // Ленивая загрузка

    const title = document.createElement('h3');
    title.classList.add('news-title');
    title.textContent = news.title;

    const description = document.createElement('p');
    description.classList.add('news-description');
    description.textContent = news.description;

    const link = document.createElement('a');
    link.href = news.link;
    link.classList.add('read-more');
    link.textContent = 'Читать полностью';

    newsItem.appendChild(image);
    newsItem.appendChild(title);
    newsItem.appendChild(description);
    newsItem.appendChild(link);

    newsList.appendChild(newsItem);
}

// Загрузить новости при старте
renderNews();
