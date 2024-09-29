function toggleMenu() {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

function fadeOutItem(item) {
    item.style.transition = 'opacity 1s';
    item.style.opacity = '0';
    item.addEventListener('transitionend', function() {
        item.style.display = 'none';
        checkIfAllItemsGone();
    });
}

function checkIfAllItemsGone() {
    var menu = document.getElementById('menu');
    var items = menu.getElementsByTagName('li');
    var allGone = true;
    for (var i = 0; i < items.length; i++) {
        if (items[i].style.display !== 'none') {
            allGone = false;
            break;
        }
    }
    if (allGone) {
        var message = document.getElementById('message');
        message.style.display = 'block';
    }
}