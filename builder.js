/* your quiz builder functionality goes here */
const addForm = document.getElementById('add-form');
const inputs = document.querySelectorAll('input');
const create = document.getElementById('create');
const add = document.getElementById('add');
const questionBox = document.getElementById('question-box'); 
let currentQuestions = JSON.parse(sessionStorage.questions);

console.log(currentQuestions);
currentQuestions.forEach(question => {
    const questionDiv = document.createElement('div');
    const incorrect = question.incorrectAnswers.map(answer => `<p>Incorrect: ${answer}</p>`)
    questionDiv.innerHTML = `<p>Question: <span>${question.question}</span></p>
    <p>Category: ${question.category}
    <p>Correct Answer: ${question.correctAnswer}</p>
    ${incorrect.join('')}
    <button class="edit">Edit</button><button class="delete">Delete</button>`;
    questionBox.appendChild(questionDiv);
    document.querySelector('.delete').addEventListener('click', (event) => {
        event.preventDefault();

        const current = event.target.closest('div').children[0].children[0].innerHTML;
        currentQuestions = currentQuestions.filter(question => question.question !== current);
        sessionStorage.questions = currentQuestions;
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
            addForm.style.display = 'none';
            create.style.display = 'contents';
        }
})