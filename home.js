var images = []; //create a local variable named images
var time = 1800;//set the transition time in milli-second
var i = 0;//initializing value of i to 0

images[0] = 'images/tech1.jpg';
images[1] = 'images/tech2.jpg';
images[2] = 'images/tech3.jpg';
images[3] = 'images/tech4.jpg';

function changeImg() {  //declae the function to start the image from 0 index value that is image number 1
    document.slide.src = images[i];

    if (i < images.length - 1) {  
        i++;
    } else {
        i = 0;
    }
    setTimeout('changeImg()', time);
}
window.onload = changeImg;
