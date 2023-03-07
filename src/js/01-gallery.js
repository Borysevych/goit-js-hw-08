import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryRef = document.querySelector('.gallery');
const galleryMarkup = createGalleryItemsMarkUp(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryItemsMarkUp(galleryItems) {
    
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
        `;
    }).join('');
}

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionsDelay: 250 });
