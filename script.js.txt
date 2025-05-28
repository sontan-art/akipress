document.addEventListener('DOMContentLoaded', function () {
  const newsList = document.getElementById('newsList');
  
  // Mock News Data (можно заменить на реальный API)
  const newsData = [
    { title: 'Новости 1', text: 'Описание новости 1', image: 'https://via.placeholder.com/300' },
    { title: 'Новости 2', text: 'Описание новости 2', image: 'https://via.placeholder.com/300' },
    { title: 'Новости 3', text: 'Описание новости 3', image: 'https://via.placeholder.com/300' },
  ];

  // Отображение новостей
  function renderNews(news) {
    newsList.innerHTML = '';
    news.forEach(item => {
      const newsCard = document.createElement('div');
      newsCard.classList.add('news-card');
      newsCard.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      `;
      newsList.appendChild(newsCard);
    });
  }

  renderNews(newsData);

  // Поиск новостей
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', function () {
    const query = searchInput.value.toLowerCase();
    const filteredNews = newsData.filter(news => 
      news.title.toLowerCase().includes(query) || news.text.toLowerCase().includes(query)
    );
    renderNews(filteredNews);
  });
});
