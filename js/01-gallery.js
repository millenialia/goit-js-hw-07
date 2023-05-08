import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);


const makeGalleryMarkup = ({ preview, original, description}) => `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}" /></a></li>`

const galleryEl = document.querySelector('.gallery')


const makeGalleryTable = galleryItems
    .map(makeGalleryMarkup)
    .join('')

galleryEl.insertAdjacentHTML('afterbegin', makeGalleryTable)
    
galleryEl.addEventListener('click', openPicture)


function openPicture(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return
    }
    const currentPicture = event.target.dataset.source
    const instance = basicLightbox.create(`
    <img src=${currentPicture}>
    `)
    instance.show()

    window.addEventListener("keydown", ({ code }) => {
    
        if (code === "Escape") {
            instance.close()
        }
    })

}
