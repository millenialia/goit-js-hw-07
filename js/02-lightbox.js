import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const makeGalleryMarkup = ({ preview, original, description}) => `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}"/></a></li>`

const galleryEl = document.querySelector('.gallery')

const makeGalleryTable = galleryItems
    .map(makeGalleryMarkup)
    .join('')

galleryEl.insertAdjacentHTML('afterbegin', makeGalleryTable)

var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
 });
    
