var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0;

function increment() {
    if (currentNumber < 10) {
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
    color();
}

function decrement() {
    if (currentNumber > -10) {
        currentNumber = currentNumber - 1;    
        currentNumberWrapper.innerHTML = currentNumber;
    }
    color();
}

function color() {
    if (currentNumber >= 0) {
        currentNumberWrapper.style.color = 'blue';
    }
    else {
        currentNumberWrapper.style.color = 'red';
    }
}