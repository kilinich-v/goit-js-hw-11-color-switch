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

class RandomColors {
    constructor(colors, interval) {
        this.colors = colors;
        this.interval = interval;
        this.intervalId = null;
        this.isActive = false;
    }

    start() {
        if (this.isActive) {
            return;
        }
        this.changeColor();
        this.isActive = true;
    }

    stop() {
        clearInterval(this.intervalId);
        this.isActive = false;
    }

    changeColor() {
        this.intervalId = setInterval(() => {
            let newColorIndex = this.randomIntegerFromInterval(0, (this.colors.length - 1));
            document.body.style.backgroundColor = colors[newColorIndex];
        }, this.interval);
    }

    randomIntegerFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}

const changeColors = new RandomColors(colors, 1000);

buttons.start.addEventListener('click', changeColors.start.bind(changeColors));
buttons.stop.addEventListener('click', changeColors.stop.bind(changeColors));