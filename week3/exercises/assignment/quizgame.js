let questionInput;
let currentQuestion;
let submitAnswerButton;
let response;
let responseColor = 'OrangeRed'
let heading;
//quiz questions
let statements = [
    {question: 'What is the last name of Johnny, Moira, David and Alexis?', answer: 'Rose'},
    {question: 'What is the name of the actor who portrayed David?', answer: 'Dan Levy'},
    {question: 'Johnny Rose owns what type of business in Schitt\'s Creek?', answer: 'Motel'},
    {question: 'What is the first name of the vet Alexis fall in love with?', answer: 'Ted'},
    {question: 'What is the name of the motel the Rose family owns in Schitt\'s Creek?', answer: 'Rosebud Motel'},
    {question: 'Who is the Mayor of Schitt\'s Creek?', answer: 'Roland'},
];
function next() {
    if (statements.length < 1) {
        alert('Amazing! You won!');
        return;
    }
const randomIndex = Math.ceil(Math.random() * statements.length - 1);
return statements[randomIndex];
}
function checkQuestion() {
    if (currentQuestion.answer === questionInput.value()) {
        //remove correct answer from list
        statements = statements.filter(statementObj => {
        return currentQuestion.answer !== statementObj.answer;
    });
//this is the correct condition
    response = 'Yes! Great job';
    responseColor = 'DarkBlue';
} else {
    //this is the wrong answer
    response = 'Ewe David... Try another';
    responseColor = 'OrangeRed';
  } 
  currentQuestion = next();
  questionInput.value('');
  if(currentQuestion) {
      message = currentQuestion.question;
    }
}
currentQuestion = next();
let message = currentQuestion.question;

function setup() {
    createCanvas(800, 600);
    // Quiz Title
    textFont("Abril Fatface");
    heading = createElement('h1', ['Megan\'s Fantastic Quiz for Schitt\'s Creek Fans'])
    heading.position(100, 75);
    // Input field
    questionInput = createInput('');
    questionInput.position(100, 360);
    questionInput.size(250, 40);
    // Submit Answer Button
    submitAnswerButton = createButton('Submit Answer');
    submitAnswerButton.position(100, 410);
    submitAnswerButton.size(250, 40);
    //mouse pressed
    submitAnswerButton.mousePressed(checkQuestion);
}

function draw() {
    background("darkturquoise");
    fill('gold');
    textFont("Overpass");
    //question font size
    textSize(24);
    text(message, 90, 275);
    fill(responseColor); 
    text(response, 100, 500);
}