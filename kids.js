// Play alphabet sounds
function playSound(letter) {
    const audio = new Audio(`sounds/${letter}.mp3`);
    audio.play();
}

// Check math answer
function checkAnswer(answer) {
    const feedback = document.getElementById('math-feedback');
    if (answer === 2) {
        feedback.textContent = "right! Well done!";
        feedback.style.color = 'blue';
    } else {
        feedback.textContent = "Try again!";
        feedback.style.color = 'red';
    }
}
    document.addEventListener("DOMContentLoaded", function() {
        // Add any interactive elements or controls here if needed in the future
    });



