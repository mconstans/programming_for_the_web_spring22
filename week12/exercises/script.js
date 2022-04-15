let song;
let bannerImg;
var button;


function preload() {
    bannerImg = loadImage('images/jurassicpark_banner.jpeg');
}

function setup() {
    song = loadSound('sounds/jurassicpark_themesong.mp3');
    createCanvas(1200, 1200);
    image(bannerImg, 0, 0);
    button = createButton('Click to play');
    button.mousePressed(togglePlay);
}
function togglePlay() {
    if(song.isPlaying()) {
        song.stop;
    } else {
        song.play();
    }
}