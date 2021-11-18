/* your quiz builder functionality goes here */
const addForm = document.getElementById('add-form');
const inputs = document.querySelectorAll('input');
const create = document.getElementById('create');
const add = document.getElementById('add');
const questionBox = document.getElementById('question-box'); 
const error = document.getElementById('error');
const deleteButton = document.getElementsByClassName('delete');
let currentQuestions = JSON.parse(sessionStorage.questions);

console.log(currentQuestions);

currentQuestions.forEach(question => {
    const questionDiv = document.createElement('div');
    const incorrect = question.incorrectAnswers.map(answer => `<p>Incorrect: ${answer}</p>`)
    questionDiv.innerHTML = `<p>Question: <span>${question.question}</span></p>
    <p>Category: ${question.category}
    <p>Correct Answer: ${question.correctAnswer}</p>
    ${incorrect.join('')}
    <button class="delete">Delete</button>`;
    questionBox.appendChild(questionDiv);
    questionDiv.children[6].addEventListener('click', (event) => {
        event.preventDefault();

        let current = questionDiv.children[0].children[0].innerHTML;
        console.log(current);
        currentQuestions = currentQuestions.filter(question => question.question !== current);
        sessionStorage.questions = JSON.stringify(currentQuestions);
        console.log(currentQuestions);
    })
})

create.addEventListener('click', (event) => {
    addForm.style.display = 'contents';
    create.style.display = 'none';
})

addForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    if (data.question  
        && data.correctAnswer
        && data.incorrect1 
        && data.incorrect2 
        && data.incorrect3
        && data.category) {
            const incorrect = [data.incorrect1, data.incorrect2, data.incorrect3];
            delete data.incorrect1;
            delete data.incorrect2;
            delete data.incorrect3;
            data.incorrectAnswers = incorrect;
        
            currentQuestions.push(data);
            console.log(currentQuestions);
            sessionStorage.questions = JSON.stringify(currentQuestions);
            for (let i = 0; i < inputs.length; i++) {
                inputs[i].value = '';
            }

            error.innerHTML = '';
            addForm.style.display = 'none';
            create.removeAttribute('style');
        } else {
            error.innerHTML = 'All fields are required';
        }
})

