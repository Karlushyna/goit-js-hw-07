import { galleryItems } from "./gallery-items.js"


console.log(galleryItems);



const gallery = document.querySelector('.gallery');
const items = [];

galleryItems.map(element => {
const galleryLink = document.createElement('a');
galleryLink.className = "gallery__item";
galleryLink.href = element.original
const galleryImage = document.createElement('img');
galleryImage.className = "gallery__image";
galleryImage.src = element.preview;
galleryImage.alt = element.description;
galleryImage.setAttribute('title', element.description);

galleryLink.append(galleryImage);
items.push(galleryLink);
})

gallery.append(...items);

new SimpleLightbox('.gallery a', { 
    captionDelay: 250
});



