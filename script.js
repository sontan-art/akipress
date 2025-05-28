document.addEventListener('DOMContentLoaded', function() {
  const newsData = [
    {
      title: "Новости 1",
      description: "Описание новости 1...",
      image: "news1.jpg"
    },
    {
      title: "Новости 2",
      description: "Описание новости 2...",
      image: "news2.jpg"
    },
    {
      title: "Новости 3",
      description: "Описание новости 3...",
      image: "news3.jpg"
    }
  ];

  const newsList = document.getElementById('newsList');
  
  newsData.forEach(news => {
    const newsItem = document.createElement('div');
    newsItem.classList.add('news-item');

    newsItem.innerHTML = `
      <img src="${news.image}" alt="${news.title}" class="news-image">
      <h3>${news.title}</h3>
      <p>${news.description}</p>
    `;

    newsList.appendChild(newsItem);
  });
});
