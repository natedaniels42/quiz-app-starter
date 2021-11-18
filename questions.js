//Your quiz questions array of objects goes here
const questions = [
    {
        question: 'What country has the largest population in the world?',
        category: 'geography',
        correctAnswer: 'China',
        incorrectAnswers: ['India', 'USA', 'Russia']
    },
    {
        question: 'What city is home to the Golden Gate Bridge?',
        category: 'geography',
        correctAnswer: 'San Francisco',
        incorrectAnswers: ['Los Angeles', 'Salt Lake City', 'Denver']
    },
    {
        question: 'What is the largest country in the world?',
        category: 'geography',
        correctAnswer: 'Russia',
        incorrectAnswers: ['Canada', 'USA', 'Norway']
    },
    {
        question: 'What is the only US state that is home to no documented poisonous snakes?',
        category: 'geography',
        correctAnswer: 'Alaska',
        incorrectAnswers: ['Montana', 'Wyoming', 'Maine']
    },
    {
        question: 'What is the smallest country in the world?',
        category: 'geography',
        correctAnswer: 'Vatican City',
        incorrectAnswers: ['Monaco', 'Liechtenstein', 'Maldives']
    },
    {
        question: 'Whose death sparked the beginning of World War I?',
        category: 'history',
        correctAnswer: 'Archduke Franz Ferdinand',
        incorrectAnswers: ['Kaiser Wilhelm', 'Archbishop Ussher', 'Queen Victoria']
    },
    {
        question: 'Which was the book written by Niccolo Maciavelli?',
        category: 'history',
        correctAnswer: 'The Prince',
        incorrectAnswers: ['The Once and Future King', 'The Good Earth', 'War and Peace']
    },
    {
        question: 'Who was the first US president to appear on television?',
        category: 'history',
        correctAnswer: 'Franklin D Roosevelt',
        incorrectAnswers: ['Richard Nixon', 'Ronald Reagan', 'Harry S Truman']
    },
    {
        question: 'Which king signed the Magna Carta?',
        category: 'history',
        correctAnswer: 'John',
        incorrectAnswers: ['William', 'Henry VIII', 'James']
    },
    {
        question: 'Which Egyptian pharoah believed in the idea of a single god?',
        category: 'history',
        correctAnswer: 'Akhenaton',
        incorrectAnswers: ['Tutankhamen', 'Nefertiti', 'Cheops']
    },
    {
        question: 'What was the name of the band that sang the "Friends" theme song?',
        category: 'entertainment',
        correctAnswer: 'The Rembrandts',
        incorrectAnswers: ['Weezer', 'Pearl Jam', 'Nirvana']
    },
    {
        question: 'What is the name of the musical that won the Oscar for best picture in 1960 and is based on "Romeo and Juliet"?',
        category: 'entertainment',
        correctAnswer: 'West Side Story',
        incorrectAnswers: ['Follies of 1910', 'Ernest in Love', 'The King and I']
    },
    {
        question: 'Who was orginally cast as the voice of Shrek?',
        category: 'entertainment',
        correctAnswer: 'Chris Farley',
        incorrectAnswers: ['Kevin Nealon', 'Will Ferrell', 'Chris Parnell']
    },
    {
        question: 'Which of these actors did not appear in Pulp Fiction?',
        category: 'entertainment',
        correctAnswer: 'John Turturro',
        incorrectAnswers: ['Bruce Willis', 'Samuel L Jackson', 'Uma Thurman']
    },
    {
        question: 'For which movie did Leonardo DiCaprio win an Oscar for best actor:',
        category: 'entertainment',
        correctAnswer: 'The Revenant',
        incorrectAnswers: ['Blood Diamond', 'The Last King of Scotland', 'Titanic']
    },
    {
        question: 'What is a group of owls called?',
        category: 'animal',
        correctAnswer: 'Parliament', 
        incorrectAnswers: ['Army', 'Bewilderment', 'Surprise']
    },
    {
        question: 'What is the longest a lobster can live?',
        category: 'animal',
        correctAnswer: 'More than 100 years', 
        incorrectAnswers: ['6 months', '5 years', '30 years']
    },
    {
        question: 'In what country is the northernmost wild monkey population in the world?',
        category: 'animal',
        correctAnswer: 'Japan', 
        incorrectAnswers: ['India', 'Spain', 'US']
    },
    {
        question: 'In which mountain range could you find a wild yak?',
        category: 'animal',
        correctAnswer: 'Himalayas', 
        incorrectAnswers: ['Alps', 'Andes', 'Rockies']
    },
    {
        question: 'What type of animal would you find in an apiary?',
        category: 'animal',
        correctAnswer: 'Bees', 
        incorrectAnswers: ['Apes', 'Birds', 'Rabbits']
    }
]
if (!sessionStorage.questions) {
    sessionStorage.questions = JSON.stringify(questions);

}