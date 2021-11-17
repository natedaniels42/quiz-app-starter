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
const category = document.getElementById('category');
const start = document.getElementById('start');

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
start.addEventListener('click', (event) => {
    event.preventDefault();

    gameBoard.style.visibility = 'visible';
    start.style.visibility = 'hidden';
})

const buildQuestion = () => {
    if (index < 5) {
        questionNumber.innerHTML = index + 1;
        currentQuestion = currentQuestions[questionIndices[index]];
        console.log(currentQuestion);
        for (let i = 0; i < answers.length; i++) {
            answers[i].removeAttribute('style');
        }
        question.innerHTML = currentQuestion.question;
        category.innerHTML = currentQuestion.category[0].toUpperCase() + currentQuestion.category.substr(1);

        currentAnswers = currentQuestion.incorrectAnswers
        .concat(currentQuestion.correctAnswer);
        
        
        answerIndices = shuffler(4);
        
        for (let i = 0; i < answers.length; i++) {
            answers[i].innerHTML = currentAnswers[answerIndices[i]];
            answers[i].addEventListener('click', answerListener);
        }
    } else {
        gameOver.style.visibility = 'visible';
        gameBoard.style.visibility = 'hidden';
        final.innerHTML = score;
    }
    
}

const answerListener = (event) => {
    if (event.target.innerHTML === currentQuestion.correctAnswer) {
        event.target.innerHTML += `<img src="checkmark-16.png">`
        score++;
            scoreNumber.innerHTML = score;
    } else {
        event.target.innerHTML += `<img src="red-x.png" width="16px">`;
    }
    next.style.visibility = 'visible';
    for (let i = 0; i < answers.length; i++) {
        answers[i].removeEventListener('click', answerListener);
    }
};

next.addEventListener('click', (event) => {
    event.preventDefault();
    
    const answerListener = (event) => {
        if (event.target.innerHTML === currentQuestion.correctAnswer) {
            event.target.innerHTML += `<img src="checkmark-16.png">`
            score++;
                scoreNumber.innerHTML = score;
        } else {
            event.target.innerHTML += `<img src="red-x.png" width="16px">`;
        }
        next.style.visibility = 'visible';
        for (let i = 0; i < answers.length; i++) {
            answers[i].removeEventListener('click', answerListener);
        }
    };

    next.style.visibility = 'hidden';
    index++;
    buildQuestion();
})

playAgain.addEventListener('click', (event) => {
    event.preventDefault();
    
    score = 0;
    index = 0;
    gameOver.style.visibility = 'hidden';
    gameBoard.style.visibility = 'visible';
    playGame();
})

const playGame = () => {
    questionIndices = shuffler(currentQuestions.length);
    buildQuestion();
}

playGame();