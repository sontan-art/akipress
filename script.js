function formatDateDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
}

function formatDateTime(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleTimeString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit'
  });
}

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
          <div class="date-time mb-2">
            <i class="bi bi-calendar-event"></i> <span>${formatDateDate(item.date)}</span>
            <i class="bi bi-clock"></i> <span>${formatDateTime(item.date)}</span>
          </div>
          <span class="badge">${item.category}</span>
          <p class="card-text">${item.description}</p>
          <a href="${item.link}" target="_blank" class="btn btn-primary mt-auto">Читать далее</a>
        </div>
      </div>
    `;
    newsContainer.appendChild(col);
  });
}
