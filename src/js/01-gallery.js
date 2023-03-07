import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const markup = galleryItems.reduce(
    (acc, { original, preview, description }) =>
      (acc += `<li>
    <a class="gallery__item" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a>
  </li>`),
    ''
  );
  
  galleryContainer.insertAdjacentHTML('beforeend', markup);
  
  // use library SimpleLightbox
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt', 
    captionPosition: 'bottom', 
    captionDelay: 250,
    close: false,  //show the close button or not
  });

  //2nd
//   const galleryContainer = document.querySelector('.gallery');
// // console.log(galleryContainer);
// const itemsMarkup = createGalleryItemsMarkup(galleryItems);
// galleryContainer.insertAdjacentHTML('beforeend', itemsMarkup);

// // rendered items
// function createGalleryItemsMarkup(items) {
//   return items.map(({ preview, original, description }) => {
//     return `
//   <a class="gallery__item" href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       alt="${description}"
//     />
//   </a>
// `
//   }).join('');
// }
// // use library SimpleLightbox
// const lightbox = new SimpleLightbox('.gallery a', {
//   captionsData: 'alt', 
//   captionPosition: 'bottom', 
//   captionDelay: 250,
//   close: false,  //show the close button or not
// });