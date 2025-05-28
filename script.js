/* Общие стили */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
}

/* Шапка */
.header {
  background-color: #0077b3;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header .logo img {
  width: 120px;
}

.header .nav {
  display: flex;
}

.header .nav a {
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  margin: 0 5px;
  font-weight: bold;
}

.header .nav a:hover {
  background-color: #005f8b;
  border-radius: 5px;
}

.header .search input {
  padding: 8px;
  border-radius: 5px;
  border: none;
}

/* Основной контент */
main {
  padding: 20px;
}

.top-news {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.main-news {
  width: 60%;
}

.main-news h2 {
  font-size: 24px;
  color: #333;
}

.main-news-image {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 15px;
}

.news-list {
  width: 35%;
}

.news-item {
  background-color: white;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.news-item h3 {
  font-size: 18px;
  color: #0077b3;
}

.news-item p {
  color: #555;
}

.news-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
}

/* Подвал */
.footer {
  background-color: #0077b3;
  color: white;
  text-align: center;
  padding: 10px;
  margin-top: 20px;
}

3. JavaScript (script.js)

В этом файле мы будем динамически загружать новости с картинками и ссылками.

document.addEventListener('DOMContentLoaded', function() {
  const newsData = [
    {
      title: "Новости 1",
      description: "Краткое описание новости 1...",
      image: "https://via.placeholder.com/300x200",
      link: "https://kg.akipress.org/news/1"
    },
    {
      title: "Новости 2",
      description: "Краткое описание новости 2...",
      image: "https://via.placeholder.com/300x200",
      link: "https://kg.akipress.org/news/2"
    },
    {
      title: "Новости 3",
      description: "Краткое описание новости 3...",
      image: "https://via.placeholder.com/300x200",
      link: "https://kg.akipress.org/news/3"
    }
  ];

  const newsList = document.getElementById('newsList');

  newsData.forEach(news => {
    const newsItem = document.createElement('div');
    newsItem.classList.add('news-item');

    newsItem.innerHTML = `
      <img src="${news.image}" alt="${news.title}" class="news-image">
      <h3><a href="${news.link}" target="_blank">${news.title}</a></h3>
      <p>${news.description}</p>
    `;

    newsList.appendChild(newsItem);
  });
});
