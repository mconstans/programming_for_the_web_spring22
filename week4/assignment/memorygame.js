const DOWN = 'down';
const UP = 'up';
let startingX = 75;
let startingY = 185;
//new array
let cards = [];
const gameState = {
    totalPairs: 8,
    flippedCards: [],
    numMatched: 0,
    attempts: 0,
    waiting: false,
};
//load card images in
let cardback;
let cardfaceArray = [];
function preload() {
    cardback = loadImage('images/cardback3.png');
    cardfaceArray = [
        loadImage('images/bird3.png'),
        loadImage('images/deer2.png'),
        loadImage('images/owl.png'),
        loadImage('images/fox.png'),
        loadImage('images/bird1.png'),
        loadImage('images/cat.png'),
        loadImage('images/rabbit.png'),
        loadImage('images/deer1.png'),
    ]
}
function setup() {
    createCanvas(940, 1000);
    let selectedFaces = [];
    for (let z = 0; z < 8; z++) {
        const randomIdx = floor(random(cardfaceArray.length));
        const face = cardfaceArray[randomIdx];
        selectedFaces.push(face);
        selectedFaces.push(face);
        //remove the used cardface so it doesn't get randomly selected again
        cardfaceArray.splice(randomIdx, 1);
    }
    selectedFaces = shuffleArray(selectedFaces);
    //create loop of columns: i and rows: j
    for (let j = 0; j < 4; j++) {
        for (let i = 0; i < 4; i ++) {
            //returning the item that gets removed & new card creates new instance or 'cookie'
            const faceImage = selectedFaces.pop();
            //new instance or 'cookie'
            cards.push(new Card(startingX, startingY, faceImage));
            startingX +=195;
        }
        // new row starting location/spacing
        startingY += 195;
        startingX = 75;  
    }
}

function draw () {
    background(color(36,57,77));
    cursor('images/mouse1.png');
    fill(color(236,136,114));
    textSize(35);
    textFont('Viaoda Libre');
    text('Megan\'s Memory Game', 300, 50);
    text('of Scandinavian Folk Animals', 260, 100);
    textSize(36);
    text('attempts '+ gameState.attempts, 670, 170);
    text('matches ' + gameState.numMatched, 85, 170);
    if (gameState.numMatched === gameState.totalPairs) {
        fill(color(217,193,118));
        textSize(66);
        text('You Win!!', 320, 170);
        noLoop();
    } else {
        fill(color(217,193,118));
        textSize(66);
        text('Find a Match', 280, 170);
    }
    // if (gameState.numMatched === gameState.totalPairs) {
    //     fill(color(217,193,118));
    //     textSize(66);
    //     text('You Win!!', 320, 170);
    //     noLoop();
    // }
    //if card is matched false, then we will cards will return to cardback
    for (let k = 0; k < cards.length; k++) {
        if (!cards[k].isMatch) {
            cards[k].face = DOWN;
        }
        cards[k].show();
    }
    noLoop();
    gameState.flippedCards.length = 0;
    gameState.waiting = false;
}
function mousePressed () {
    if (gameState.waiting) {
        return;
    }
    //loops through all the cards + flips them if hit
    for (let k = 0; k < cards.length; k++) {
        // first check flipped cards length, and then trigger the flip
        if (gameState.flippedCards.length < 2 && cards[k].didHit(mouseX, mouseY)) {
            console.log('flipped', cards[k]);
            gameState.flippedCards.push(cards[k]);
        }
    }
    if (gameState.flippedCards.length === 2) {
        gameState.attempts++;
        if (gameState.flippedCards[0].cardFaceImg === gameState.flippedCards[1].cardFaceImg) {
            // Cards Match! Mark cards as matched so they don't flip back
            gameState.flippedCards[0].isMatch = true;
            gameState.flippedCards[1].isMatch = true;
            gameState.flippedCards.length = 0;
            // increment the score
            gameState.numMatched++;
            loop();
        } else {
            // if they don't match
            gameState.waiting = true;
              const loopTimeout = window.setTimeout(() => {
                loop();
                window.clearTimeout(loopTimeout);
              }, 1000);
        }
    }
}
//Card Class
class Card {
    constructor (x, y, cardFaceImg) {
        this.x = x;
        this.y = y;
        this.width = 180;
        this.height = 180;
        this.face = DOWN;
        this.cardFaceImg = cardFaceImg;
        this.isMatch = false;
        this.show();
    }
    show() {
        if (this.face === UP || this.isMatch) {
        noStroke();
        rect(this.x, this.y, this.width, this.height);
        image(this.cardFaceImg, this.x, this.y, this.width, this.height);
    } else {
        noStroke();
        rect(this.x, this.y, this.width, this.height);
        //show cardback
        image(cardback, this.x, this.y, this.width, this.height);
    }
    }
    //create defined area for mouse pressed, if inside rect = true, if outside = false
    didHit (mouseX, mouseY) {
        if (mouseX >= this.x && mouseX <= this.x + this.width &&
            mouseY >= this.y && mouseY <= this.y + this.height) {
                this.flip();
                return true;
            } else {
                return false;
            }
    }
    flip () {
        if (this.face === DOWN) {
            this.face = UP;
        } else {
            this.face = DOWN;
        }
    this.show();
    }
}
// RANDOM SHUFFLE
function shuffleArray (cardArray) {
    let counter = cardArray.length;
    while (counter > 0) {
        // pick random idx
        const idx = Math.floor(Math.random() * counter);
        // decrease counter by 1 (decrement)
        counter--;
        // swap with last element
        const temp = cardArray[counter];
        cardArray[counter] = cardArray[idx];
        cardArray[idx] = temp;
    }
    return cardArray;
}
