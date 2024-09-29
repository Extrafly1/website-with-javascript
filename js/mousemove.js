const image = document.querySelector('.image');
const text = document.querySelector('.text');

image.addEventListener('mouseover', function() {
    image.style.opacity = '0';
    text.style.opacity = '1';
});

image.addEventListener('mouseleave', function() {
    image.style.opacity = '1';
    text.style.opacity = '0';
});