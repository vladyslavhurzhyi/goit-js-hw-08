// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const galleryRef = document.querySelector('.gallery');

const pictures = galleryItems.forEach(({ preview, original, description }) => {
    const markup = /*html*/ ` <li class="gallery_item"><a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a></li>`;

    galleryRef.insertAdjacentHTML('beforeend', markup);
});

let gallery = new SimpleLightbox('.gallery a', {
    captionType: 'attr',
    captionsData: 'alt',
    captionDelay: 250,
});
