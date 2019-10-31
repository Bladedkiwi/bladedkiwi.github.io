//grab all images
const allImages = document.querySelectorAll('img[data-src]');
//parameters for Intersectional Observer
const imgAccents = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};
//Setting the grounds for Intersection Observer
const loadedImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');};
};
//checking the browser compatibility and display when necessary
if ('IntersectionObserver' in window) {
    const imgLook = new IntersectionObserver((items, imgLook) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadedImages(item.target);
                imgLook.unobserve(item.target);
            }
        });
    }, imgAccents);
    allImages.forEach((img) => {
        imgLook.observe(img);
    });
} else {
    allImages.forEach((img) => {
        loadedImages(img)
    });
}
