import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const input = form.querySelector("input[name='search-text']");

form.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();

  const query = input.value.trim();

  // Перевірка на пустий рядок
  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query.',
      position: 'topRight',
    });
    return;
  }

  // Очищаємо галерею і показуємо loader
  clearGallery();
  showLoader();

  // Виклик API
  getImagesByQuery(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.info({
          title: 'No results',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      createGallery(data.hits);
    })
    .catch(() => {
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Try again later.',
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
    });
}
