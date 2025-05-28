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
