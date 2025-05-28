// Mock data for news articles
const newsData = [
    {
        title: "Новости 1",
        description: "Описание новости 1. Краткое описание события или информации.",
        image: "https://via.placeholder.com/400x250"
    },
    {
        title: "Новости 2",
        description: "Описание новости 2. Краткое описание события или информации.",
        image: "https://via.placeholder.com/400x250"
    },
    {
        title: "Новости 3",
        description: "Описание новости 3. Краткое описание события или информации.",
        image: "https://via.placeholder.com/400x250"
    },
    {
        title: "Новости 4",
        description: "Описание новости 4. Краткое описание события или информации.",
        image: "https://via.placeholder.com/400x250"
    },
    {
        title: "Новости 5",
        description: "Описание новости 5. Краткое описание события или информации.",
        image: "https://via.placeholder.com/400x250"
    },
    {
        title: "Новости 6",
        description: "Описание новости 6. Краткое описание события или информации.",
        image: "https://via.placeholder.com/400x250"
    }
];

// Function to display news items dynamically
const newsList = document.getElementById('newsList');

newsData.forEach(news => {
    const newsItem = document.createElement('div');
    newsItem.classList.add('news-item');
    newsItem.innerHTML = `
        <img src="${news.image}" alt="${news.title}">
        <h3>${news.title}</h3>
        <p>${news.description}</p>
    `;
    newsList.appendChild(newsItem);
});
