const slideshowImages = document.querySelectorAll(".slideshow-container .slideshow-img")
const nextImageDelay = 3000
let currentImageCounter = 0;
slideshowImages[currentImageCounter].style.opacity = 1;
setInterval(nextImage, nextImageDelay);

function nextImage() {
    slideshowImages[currentImageCounter].style.zIndex = -2;
    const tempCounter = currentImageCounter;
    setTimeout(() => {
        slideshowImages[tempCounter].style.opacity = 0;
    },1000);
    currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;
    slideshowImages[currentImageCounter].style.opacity = 1;
    slideshowImages[currentImageCounter].style.zIndex = -1;
}



const slideshowImages2 = document.querySelectorAll(".DOCS .DOCS-img")
const nextImageDelay2 = 3000
let currentImageCounter2 = 0;
slideshowImages2[currentImageCounter2].style.opacity = 1;
setInterval(nextImage2, nextImageDelay2);

function nextImage2() {
    slideshowImages2[currentImageCounter2].style.zIndex = -2;
    const tempCounter2 = currentImageCounter2;
    setTimeout(() => {
        slideshowImages2[tempCounter2].style.opacity = 0;
    },1000);
    currentImageCounter2 = (currentImageCounter2 + 1) % slideshowImages2.length;
    slideshowImages2[currentImageCounter2].style.opacity = 1;
    slideshowImages2[currentImageCounter2].style.zIndex = -1;
}
let textElements = document.getElementsByClassName('text');
let textArray = ['3 Years Course', '2 Years Course'];
let currentTextIndex = 0;

function nextText() {
    currentTextIndex = (currentTextIndex + 1) % textArray.length;
    for (var i = 0; i < textElements.length; i++) {
        textElements[i].innerText = textArray[currentTextIndex];
    }
}

setInterval(nextText, 3000);