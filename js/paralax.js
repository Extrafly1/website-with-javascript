document.addEventListener('mousemove', function(e) {
    let container = document.getElementById('particles-js');
    let containerRect = container.getBoundingClientRect();
    let offsetX = e.clientX - containerRect.left;
    let offsetY = e.clientY - containerRect.top;
    let dx = 0.5 - offsetX / containerRect.width;
    let dy = 0.5 - offsetY / containerRect.height;
    container.style.transform = 'translate(' + dx * 150 + 'px, ' + dy * 150 + 'px)';
});