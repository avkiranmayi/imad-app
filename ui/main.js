console.log('Loaded!');

// Change the text of the main-text div

var element = document.getElementById('main-text');

element.innerHTML = 'New Value';

// Move the image

function moveRight() {
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
};

var img = document.getElementById('madi');
img.onclick = function () {
    //var interval = setInterval(moveRight, 100)
    img.style.marginLeft = '100px';
};