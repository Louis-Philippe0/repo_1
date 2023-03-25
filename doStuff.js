document.addEventListener('DOMContentLoaded', () => {
    let square = document.getElementById('square');
});

const keyMap = {
    'w': 'up',
    'a': 'left',
    's': 'down',
    'd': 'right'
};

document.addEventListener('keydown', (event) => {
    const direction = keyMap[event.key];
    if (direction) {
        move(square, direction, 5);
    }
});

function move(target, direction, distance) {
    if (!(target instanceof HTMLElement)) {
        console.error("Target is not an HTML element", target);
        return;
    }
    if (!["up", "down", "left", "right"].includes(direction)) {
        console.error("Invalid direction", direction);
        return;
    }
    if (!(typeof distance === "number")) {
        console.error("Distance is not a number", distance);
        return;
    }
    const directionMap = {
        up: 'top',
        down: 'top',
        left: 'left',
        right: 'left'
    };
    let currentPos = target.getBoundingClientRect()[directionMap[direction]];

    setInterval(() => {
        currentPos += distance;
        target.style[directionMap[direction]] = currentPos + 'px';
    }, 50);

};