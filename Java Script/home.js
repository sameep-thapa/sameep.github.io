
var images = [];
var time = 1800;
var i = 0;


images[2] = 'images/img2.jpg';
images[3] = 'images/img3.jpg';

function changeImg() {
    document.slide.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout('changeImg()', time);
}
window.onload = changeImg