/* your quiz builder functionality goes here */
const addForm = document.getElementById('add-form');
const inputs = document.querySelectorAll('input');

addForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const currentQuestions = JSON.parse(sessionStorage.questions);
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
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
})