const quizData = [
    {
        question: "Who is the main character of Attack on Titan?",
        options: ["Eren", "Mikasa", "Armin", "Levi"],
        answer: "Eren"
    },
    {
        question: "What is the name of Eren's titan form?",
        options: ["Colossal Titan", "Armored Titan", "Attack Titan", "Founding Titan"],
        answer: "Attack Titan"
    },
    {
        question: "What is the name of Eren's titan form?",
        options: ["Colossal Titan", "Armored Titan", "Attack Titan", "Founding Titan"],
        answer: "Attack Titan"
    },
    // Add more questions here
];

let currentQuestionIndex = 0;
let score = 0;

const startBtn = document.getElementById('start-btn');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const resultElement = document.getElementById('result');

startBtn.addEventListener('click', startQuiz);

function startQuiz() {
    startBtn.classList.add('hide');
    resultElement.innerText = '';
    quizContainer.classList.remove('hide');
    showQuestion();
}

function showQuestion() {
    resetState();
    const question = quizData[currentQuestionIndex];
    questionElement.innerText = question.question;
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option');
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedOption = e.target.innerText;
    const correctAnswer = quizData[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizContainer.classList.add('hide');
    resultContainer.classList.remove('hide');
    resultElement.innerText = `You scored ${score} out of ${quizData.length}!`;
}
