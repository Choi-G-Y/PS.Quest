const square = document.getElementById('square');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
let rotationInterval;

startButton.addEventListener('click', () => {
    if (!rotationInterval) {
        startRotation();
    }
});

stopButton.addEventListener('click', () => {
    stopRotation();
});

function startRotation() {
    square.classList.add('rotating');
    rotationInterval = setInterval(() => {
        rotateSquare(1);
    }, 500);
}

function stopRotation() {
    clearInterval(rotationInterval);
    rotationInterval = null;
    square.classList.remove('rotating');
}

function rotateSquare(angle) {
    const currentRotation = getRotationAngle(square);
    const newRotation = currentRotation + angle;
    square.style.transform = `rotate(${newRotation}deg)`;
}

function getRotationAngle(element) {
    const transform = window.getComputedStyle(element).getPropertyValue('transform');
    const matrix = transform.replace('matrix(', '').replace(')', '').split(',');
    const angle = Math.round(Math.atan2(+matrix[1], +matrix[0]) * (180 / Math.PI));
    return angle < 0 ? 360 + angle : angle;
}