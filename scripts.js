let display = document.getElementById('display');
let memoryDisplay = document.getElementById('memoryDisplay');
let memory = 0;

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function runSquareRoot() {
    const v = calculateSquareRoot(display.value);
    display.value = v;
}

function runSquare() {
    const v = calculateSquare(display.value);
    display.value = v;
}

function runReciprocal() {
    const v = calculateReciprocal(display.value);
    display.value = v;
}

function memoryStore() {
    memory = parseFloat(display.value) || 0;
    memoryDisplay.value = 'Memory: ' + memory;
}

function memoryRecall() {
    display.value = memory;
}

function memoryClear() {
    memory = 0;
    memoryDisplay.value = 'Memory: ' + memory;
}

function memoryAdd() {
    memory += parseFloat(display.value) || 0;
    memoryDisplay.value = 'Memory: ' + memory;
}

function memorySubtract() {
    memory -= parseFloat(display.value) || 0;
    memoryDisplay.value = 'Memory: ' + memory;
}
