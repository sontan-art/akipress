document.addEventListener('DOMContentLoaded', () => {
  const newsContainer = document.getElementById('news-container');
  const pagination = document.getElementById('pagination');
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearch');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const currentDateTimeElem = document.getElementById('currentDateTime');

  const ITEMS_PER_PAGE = 9;

  let allNews = [];
  let filteredNews = [];
  let currentPage = 1;
  let currentCategory = 'all';

  // Функция для обновления текущей даты и времени
  function updateCurrentDateTime() {
    const now = new Date();
    const options = { 
      weekday: 'long', year: 'numeric', month: 'long', 
      day: 'numeric', hour: '2-digit', minute: '2-digit' 
    };
    const formatted = now.toLocaleDateString('ru-RU', options);
    currentDateTimeElem.textContent = formatted;
  }

  // Обновляем дату и время сразу и каждую минуту
  updateCurrentDateTime();
  setInterval(updateCurrentDateTime, 60000);

  // Загрузка новостей
  fetch('news.json')
    .then(res => res.json())
    .then(data => {
      allNews = data.news;
      filteredNews = [...allNews];
      renderNews();
      renderPagination();
    })
    .catch(err => {
      newsContainer.innerHTML = '<p class="text-danger">Ошибка загрузки новостей.</p>';
      console.error(err);
    });

  // Функция форматирования даты новости
  function formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  // Отрисовка новостей с пагинацией
  function renderNews() {
    newsContainer.innerHTML = '';

    if (filteredNews.length === 0) {
      newsContainer.innerHTML = '<p>Новостей не найдено.</p>';
      pagination.innerHTML = '';
      return;
    }

    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    const newsToShow = filteredNews.slice(start, end);

    newsToShow.forEach(item => {
      const col = document.createElement('div');
      col.className = 'col-md-4 mb-4';
      col.innerHTML = `
        <div class="card h-100">
          <img src="${item.image}" class="card-img-top" alt="${item.title}" />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">${item.description}</p>
            <small class="text-muted mb-2">${formatDate(item.date)}</small>
            <span class="badge bg-secondary mb-2">${item.category}</span>
            <a href="${item.link}" target="_blank" class="btn btn-primary mt-auto">Читать далее</a>
          </div>
        </div>
      `;
      newsContainer.appendChild(col);
    });
  }

  // Отрисовка пагинации
  function renderPagination() {
    pagination.innerHTML = '';
    const pagesCount = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);

    if (pagesCount <= 1) return;

    for (let i = 1; i <= pagesCount; i++) {
      const li = document.createElement('li');
      li.className = 'page-item' + (i === currentPage ? ' active' : '');
      li.innerHTML = `<a class="page-link">${i}</a>`;
      li.addEventListener('click', () => {
        currentPage = i;
        renderNews();
        renderPagination();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      pagination.appendChild(li);
    }
  }

  // Фильтрация по категории
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      currentCategory = link.dataset.category;
      currentPage = 1;

      filterNews();
    });
  });

  // Поиск по заголовкам
  searchInput.addEventListener('input', () => {
    currentPage = 1;
    filterNews();
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    currentPage = 1;
    filterNews();
  });

  function filterNews() {
    const searchTerm = searchInput.value.trim().toLowerCase();

    filteredNews = allNews.filter(item => {
      const matchesCategory = currentCategory === 'all' || item.category === currentCategory;
      const matchesSearch = item.title.toLowerCase().includes(searchTerm);
      return matchesCategory && matchesSearch;
    });

    renderNews();
    renderPagination();
  }
});
