/* your quiz builder functionality goes here */



let index = 0;

const answerBox = document.getElementById('answer-box');
const question = document.getElementById('question');
const answers = document.getElementsByClassName('answer');

const shuffler = (type = 'a') => {
    const indexArr = [];
    
    while (indexArr.length < 4) {
        const randomIndex = Math.floor(Math.random() * (type === 'q' ? questions.length : 4));
        
        if (!indexArr.includes(randomIndex)) {
            indexArr.push(randomIndex);
        }
    }
    return indexArr;
}

const questionIndices = shuffler('q');
const answerIndices = shuffler();


question.innerHTML = questions[questionIndices[index]].question;

currentAnswers = questions[questionIndices[index]].incorrectAnswers
    .concat(questions[questionIndices[index]].correctAnswer);

for (let i = 0; i < answers.length; i++) {
    answers[i].innerHTML = currentAnswers[answerIndices[i]];

}
