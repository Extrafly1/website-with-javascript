var anim = document.getElementById('anim');
var scale = 1;
var rotate = 0;

function animate() {
    scale = scale === 1 ? 1.5 : 1;
    rotate = rotate === 0 ? 180 : 0;

    anim.style.transition = 'transform 0.5s';
    anim.style.transform = `scale(${scale}) rotate(${rotate}deg)`;

    setTimeout(function() {
        animate();
    }, 500);
}

setTimeout(function() {
    animate();
}, 500);