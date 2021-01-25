import './styles.css';

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const buttons = {
    start: document.querySelector('[data-action=start]'),
    stop: document.querySelector('[data-action=stop]'),
}

buttons.start.addEventListener('click', onStart);
buttons.stop.addEventListener('click', onStop);

let colorInterval = null;

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function onStart() {
    changeColor();
}

function onStop() {
    clearInterval(colorInterval);
}

function changeColor() {
    const interval = 1000;
    colorInterval = setInterval(() => {
        let newColorIndex = randomIntegerFromInterval(0, (colors.length - 1));
        document.body.style.backgroundColor = colors[newColorIndex];
    }, interval);
}
