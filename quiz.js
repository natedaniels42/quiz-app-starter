//Your quiz functionality goes here



let index = 0;
let score = 0;
let questionIndices = [];
let answerIndices = [];
let currentQuestion = {};
let currentQuestions = JSON.parse(sessionStorage.questions);

const answerBox = document.getElementById('answer-box');
const question = document.getElementById('question');
const answers = document.getElementsByClassName('answer');
const questionNumber = document.getElementById('question-number');
const scoreNumber = document.getElementById('score');
const next = document.getElementById('next');
const gameOver = document.getElementById('game-over');
const final = document.getElementById('final');
const gameBoard = document.getElementById('game-board');
const playAgain = document.getElementById('play-again');

scoreNumber.innerHTML = score;

const shuffler = (num) => {
    const indexArr = [];
    
    while (indexArr.length < num) {
        const randomIndex = Math.floor(Math.random() * num);
        
        if (!indexArr.includes(randomIndex)) {
            indexArr.push(randomIndex);
        }
    }
    return indexArr;
}



console.log(currentQuestions);


const buildQuestion = () => {
    if (index < 5) {
        questionNumber.innerHTML = index + 1;
        currentQuestion = currentQuestions[questionIndices[index]];
        console.log(currentQuestion);
        for (let i = 0; i < answers.length; i++) {
            answers[i].removeAttribute('style');
        }
        question.innerHTML = currentQuestion.question;
        
        currentAnswers = currentQuestion.incorrectAnswers
        .concat(currentQuestion.correctAnswer);
        
        
        answerIndices = shuffler(4);
        
        for (let i = 0; i < answers.length; i++) {
            answers[i].innerHTML = currentAnswers[answerIndices[i]];
            answers[i].addEventListener('click', answerListener);
        }
    } else {
        gameOver.style.display = 'contents';
        gameBoard.style.display = 'none';
        final.innerHTML = score;
    }
    
}

const answerListener = (event) => {
    if (event.target.innerHTML === currentQuestion.correctAnswer) {
        event.target.style.backgroundColor = 'green';
        score++;
            scoreNumber.innerHTML = score;
    } else {
        event.target.style.backgroundColor = 'red';
    }
    next.style.display = 'contents';
};

next.addEventListener('click', (event) => {
    event.preventDefault();
    
    const answerListener = (event) => {
        if (event.target.innerHTML === currentQuestion.correctAnswer) {
            event.target.style.backgroundColor = 'green';
            score++;
                scoreNumber.innerHTML = score;
        } else {
            event.target.style.backgroundColor = 'red';
        }
        next.style.display = 'contents';
    };

    for (let i = 0; i < answers.length; i++) {
        answers[i].removeEventListener('click', answerListener);
    }
    
    index++;
    buildQuestion();
})

playAgain.addEventListener('click', (event) => {
    event.preventDefault();
    
    score = 0;
    index = 0;
    gameOver.style.display = 'none';
    gameBoard.style.display = 'contents';
    playGame();
})

const playGame = () => {
    questionIndices = shuffler(currentQuestions.length);
    buildQuestion();
}

playGame();