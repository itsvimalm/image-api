const form = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const imageResults = document.getElementById('image-results');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const query = searchInput.value;
  searchImages(query);
});

async function searchImages(query) {
  const API_KEY = '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';
  const url = `https://api.openai.com/v1/images/generations=${query}&client_id=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    displayImages(data.results);
  } catch (error) {
    console.error(error);
  }
}

function displayImages(images) {
  imageResults.innerHTML = '';

  images.forEach(function(image) {
    const card = document.createElement('div');
    card.classList.add('image-card');

    const img = document.createElement('img');
    img.src = image.urls.small;
    img.alt = image.alt_description;

    card.appendChild(img);
    imageResults.appendChild(card);
  });
}
