const questions = [
    {question: "What is the value of a twenty dollar bill?", answer: "twenty"},
    {question: "What is the lastname of the Joe Biden, the president of the United States?", answer: "Biden"},
    {question: "How many sides are there to a 6 sided-die?", answer: "6"},
    {question: "How many states make up lower 48 of the United States?", answer: "48"}
]

const questionLength = questions.length;

const questionIndex = Math.floor(Math.random() * questionLength);

const answer = window.prompt(questions[questionIndex].question);

window.alert('You answered ' + answer + '. The correct answer is ' + questions[questionIndex].answer + '.');

//if(answer === questions[questionIndex].answer) {
    //window.alert("Correct! Great Job!");}
