import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const gallery = document.querySelector('.gallery');

const items = [];

galleryItems.map(element => {
const galleryItem =  document.createElement('div');
galleryItem.className = 'gallery__item';
const galleryLink = document.createElement('a');
galleryLink.className = 'gallery__link';
galleryLink.href = element.original;
const galleryImage = document.createElement('img');
galleryImage.className = 'gallery__image';
galleryImage.src = element.preview;
galleryImage.alt = element.description;
galleryImage.setAttribute('data-source', element.original);

galleryItem.append(galleryLink);
galleryLink.append(galleryImage);

items.push(galleryItem);

})
gallery.append(...items);



const handleGalleryClick = (e) => {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return
        }
    
        const currentImage = e.target.getAttribute('data-source'); 

        const instance = basicLightbox.create(`
        <img src = "${currentImage}" width = '800' height = '600' />
`)

instance.show();

const closeByKeyboard = (e) => {
    if (e.key === 'Escape') {
        instance.close()
    }
}

gallery.addEventListener('keydown' , closeByKeyboard);

};

gallery.addEventListener('click' , handleGalleryClick);
    

    
