// using animation instead of rotation

const secondsHand = document.querySelector('#secondhand');
const minutesHand = document.querySelector('#minutehand');
const hoursHand = document.querySelector('#hourhand');
const now = new Date();

function moveHands() {
    const secs = now.getSeconds();
    const mins = now.getMinutes() * 60;
    const hours = now.getHours() * 3600;

    secondsHand.style.animationDelay = '-' + secs + 's';
    minutesHand.style.animationDelay = '-' + mins + 's';
    hoursHand.style.animationDelay = '-' + hours + 's';
}

moveHands();