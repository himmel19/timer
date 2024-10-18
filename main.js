document.getElementById('startButton').addEventListener('click', function() {
    const timeInput = document.getElementById('timeInput').value;
    let timeRemaining = parseInt(timeInput);

    if (isNaN(timeRemaining) || timeRemaining <= 0) {
        alert("Пожалуйста, введите корректное количество секунд.");
        return;
    }

    const timerDisplay = document.getElementById('timerDisplay');

    timerDisplay.innerText = `Осталось времени: ${timeRemaining} секунд`;

    const countdown = setInterval(function() {
        timeRemaining--;
        timerDisplay.innerText = `Осталось времени: ${timeRemaining} секунд`;

        if (timeRemaining <= 0) {
            clearInterval(countdown);
            timerDisplay.innerText = "Время вышло!";
        }
    }, 1000);
});