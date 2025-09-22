import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Галерея
const gallery = document.querySelector('.gallery');

// Індикатор завантаження
const loader = document.querySelector('.loader');

// SimpleLightbox екземпляр
let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

// Створює картки зображень і додає в DOM
export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
        <li class="gallery-item">
          <a href="${largeImageURL}" class="gallery-link">
            <img src="${webformatURL}" alt="${tags}" loading="lazy" />
          </a>
          <div class="info">
            <p><b>Likes:</b> ${likes}</p>
            <p><b>Views:</b> ${views}</p>
            <p><b>Comments:</b> ${comments}</p>
            <p><b>Downloads:</b> ${downloads}</p>
          </div>
        </li>
      `
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);

  // Обов'язково оновлюємо SimpleLightbox
  lightbox.refresh();
}

// Очищає галерею
export function clearGallery() {
  gallery.innerHTML = '';
}

// Показує loader
export function showLoader() {
  loader.classList.remove('hidden');
}

// Ховає loader
export function hideLoader() {
  loader.classList.add('hidden');
}

