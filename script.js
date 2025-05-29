document.addEventListener('DOMContentLoaded', () => {
  let allNews = [];

  function renderNews(newsList) {
    const container = document.getElementById('news-container');
    const latestNews = document.getElementById('latest-news');

    container.innerHTML = '';
    latestNews.innerHTML = '';

    newsList.forEach((item, index) => {
      // Вывод последних новостей
      if (index < 5) {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerHTML = `<a href="${item.link}" target="_blank">${item.title}</a>`;
        latestNews.appendChild(li);
      }

      // Карточка новости
      const col = document.createElement('div');
      col.className = 'col-md-4';
      col.innerHTML = `
        <div class="card mb-4 shadow-sm">
          <img src="${item.image}" class="card-img-top" alt="Новость">
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">${item.description}</p>
            <span class="badge bg-secondary">${item.category}</span>
            <a href="${item.link}" target="_blank" class="btn btn-outline-primary btn-sm mt-2 w-100">Читать далее</a>
          </div>
        </div>
      `;
      container.appendChild(col);
    });
  }

  fetch('news.json')
    .then(response => response.json())
    .then(data => {
      allNews = data.news;
      renderNews(allNews);
    })
    .catch(err => {
      console.error('Ошибка загрузки новостей:', err);
    });

  // Фильтрация новостей по категориям
  const filter = document.getElementById('categoryFilter');
  filter.addEventListener('change', () => {
    const selected = filter.value;
    if (selected === 'all') {
      renderNews(allNews);
    } else {
      const filtered = allNews.filter(item => item.category === selected);
      renderNews(filtered);
    }
  });
});
