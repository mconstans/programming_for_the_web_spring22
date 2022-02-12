const cards = [];
function setup() {
    createCanvas(1000, 1000);
}
function draw() {
    background('MidnightBlue');
    fill('Tomato');
    textSize(35);
    textFont('Viaoda Libre');
    text('Megan\'s Memory Game', 340, 50);
    text('of Scandinavian Folk Animals', 300, 100);
    text('Time remaining:', 65, 170);
    text('Score:', 750, 170);
    noLoop();
    fill(0);
    for (let j = 0.99; j < 3; j++) {
        for (let i = 0.48; i < 6; i++) {
            const newCard = { x: i * 145, y: j * 195, width: 130, height: 180};
            rect(newCard.x, newCard.y, newCard.width, newCard.height);
            cards.push(newCard);
            }
    }
}
console.log('cards', cards);
