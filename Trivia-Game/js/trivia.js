/* JavaScript for Trivia Game.
This script is loaded by the index.html file and will display questions and possible answers that users can select from.
The game will display a new random question when the user clicks a radio button to choose an answer and keep track of the user's score.
The game will highlight the correct answer in Green, if the selected answer is incorrect: the right answer will still be hilkglighted in Green but the selected answeer will be highlighted in Red*/

let currentQuestionIndex = 0;
let score = 0;
let totalQuestions = 10;
let selectedQuestions = [];
let selectedTheme = null;
let themeButtons = [];
let roundTimer = null;

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const scoreElement = document.getElementById('score');
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const startButton = document.getElementById('start-button');
const numQuestionsInput = document.getElementById('num-questions');
const pageTitle = document.getElementById('page-title');
const questionsConfig = document.getElementById('questions-config');
const stopButton = document.getElementById('stop-button');

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
    themeButtons = Array.from(document.querySelectorAll('.theme-button'));
    
    // Theme selection handlers
    themeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            themeButtons.forEach(b => b.classList.remove('selected'));
            e.target.classList.add('selected');
            selectedTheme = e.target.dataset.theme;
            pageTitle.innerText = `${selectedTheme} Trivia Game`;
            questionsConfig.style.display = 'block';
        });
    });
    
    startButton.addEventListener('click', initializeGame);
    stopButton.addEventListener('click', stopRound);
});

function initializeGame() {
    if (!selectedTheme) {
        alert('Please select a theme');
        return;
    }
    
    totalQuestions = parseInt(numQuestionsInput.value) || 10;
    
    const availableQuestions = Array.isArray(window.triviaQuestions) ? window.triviaQuestions : [];

    // Filter questions by selected theme
    const themeQuestions = availableQuestions.filter(q => q.theme === selectedTheme);
    
    if (themeQuestions.length === 0) {
        alert(`No questions available for ${selectedTheme} theme.`);
        return;
    }
    
    // Repeat the available theme questions as needed so the round lasts the requested number of questions.
    const repeatedQuestions = [];
    while (repeatedQuestions.length < totalQuestions) {
        repeatedQuestions.push(...themeQuestions);
    }
    selectedQuestions = repeatedQuestions.slice(0, totalQuestions);
    
    // Hide start screen, show game screen
    startScreen.style.display = 'none';
    gameScreen.style.display = 'block';
    
    startGame();
}

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    updateScoreDisplay();
    showQuestion();
}

function stopRound() {
    clearRoundTimer();
    resetToThemeSelection();
}

function resetToThemeSelection() {
    gameScreen.style.display = 'none';
    startScreen.style.display = 'block';
    questionsConfig.style.display = 'none';
    numQuestionsInput.value = 10;
    questionElement.innerText = '';
    resetState();
    scoreElement.innerText = 'Score: 0/0';
    themeButtons.forEach(b => b.classList.remove('selected'));
    selectedTheme = null;
    selectedQuestions = [];
    currentQuestionIndex = 0;
    score = 0;
    totalQuestions = 10;
    pageTitle.innerText = 'Trivia Game';
}

function updateScoreDisplay() {
    scoreElement.innerText = `Score: ${score}/${totalQuestions}`;
}

function showQuestion() {
    resetState();
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('button');
        button.dataset.correct = index === currentQuestion.answer;
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
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';
    
    // Disable all buttons
    const allButtons = document.querySelectorAll('#answer-buttons .button');
    allButtons.forEach(button => button.disabled = true);
    
    // Highlight selected button
    if (correct) {
        selectedButton.classList.add('correct');
        score++;
    } else {
        selectedButton.classList.add('incorrect');
        // Find and highlight the correct answer in green
        allButtons.forEach(button => {
            if (button.dataset.correct === 'true') {
                button.classList.add('correct');
            }
        });
    }
    
    updateScoreDisplay();
    
    clearRoundTimer();

    // Wait 1.5 seconds before showing next question
    roundTimer = setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < selectedQuestions.length) {
            showQuestion();
        } else {
            showFinalScore();
        }
    }, 1500);
}

function clearRoundTimer() {
    if (roundTimer) {
        clearTimeout(roundTimer);
        roundTimer = null;
    }
}

function showFinalScore() {
    resetState();
    questionElement.innerText = `Game Over! Your final score is ${score}/${totalQuestions}.`;
    const restartButton = document.createElement('button');
    restartButton.innerText = 'Play Again';
    restartButton.classList.add('button');
    restartButton.addEventListener('click', resetToThemeSelection);
    answerButtonsElement.appendChild(restartButton);
}
