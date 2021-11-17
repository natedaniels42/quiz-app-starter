/* your quiz builder functionality goes here */
const questionIndices = [];



let index = 0;

const answerBox = document.getElementById('answer-box');
const question = document.getElementById('question');
const answers = document.getElementsByClassName('answer');

while (questionIndices.length < 5) {
    const randomIndex = Math.floor(Math.random() * questions.length);
    if (!questionIndices.includes(randomIndex)) {
        questionIndices.push(randomIndex);
    }
}

console.log(questionIndices)

question.innerHTML = questions[questionIndices[index]].question;


for (let i = 0; i < answers.length; i++) {
    if (i === 3) {
        console.log('works');
        answers[i].innerHTML = questions[questionIndices[index]].correctAnswer;
    } else {
        answers[i].innerHTML = questions[questionIndices[index]].incorrectAnswers[i];
    }
}
