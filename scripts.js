let display = document.getElementById('display');
let memoryDisplay = document.getElementById('memoryDisplay');
let memory = 0;

/**
 * Appends a value to the calculator display.
 * @param {string} value - The value to append.
 */
function appendToDisplay(value) {
    display.value += value;
}

/**
 * Clears the calculator display.
 */
function clearDisplay() {
    display.value = '';
}

/**
 * Deletes the last character from the calculator display.
 */
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

/**
 * Evaluates the expression in the calculator display.
 * Provides error handling for invalid inputs and calculations.
 */
function calculateResult() {
    try {
        let result = eval(display.value);
        if (result === Infinity || result === -Infinity) {
            display.value = 'Error: Division by zero';
        } else if (isNaN(result)) {
            display.value = 'Error: Invalid calculation';
        } else {
            display.value = result;
        }
    } catch (error) {
        display.value = 'Error: Invalid input';
    }
}

/**
 * Calculates the square root of the current display value.
 */
function runSquareRoot() {
    const v = calculateSquareRoot(display.value);
    display.value = v;
}

/**
 * Calculates the square of the current display value.
 */
function runSquare() {
    const v = calculateSquare(display.value);
    display.value = v;
}

/**
 * Calculates the reciprocal of the current display value.
 */
function runReciprocal() {
    const v = calculateReciprocal(display.value);
    display.value = v;
}

/**
 * Stores the current display value into memory.
 */
function memoryStore() {
    memory = parseFloat(display.value) || 0;
    memoryDisplay.value = 'Memory: ' + memory;
}

/**
 * Recalls the value stored in memory to the display.
 */
function memoryRecall() {
    display.value = memory;
}

/**
 * Clears the memory value.
 */
function memoryClear() {
    memory = 0;
    memoryDisplay.value = 'Memory: ' + memory;
}

/**
 * Adds the current display value to the memory value.
 */
function memoryAdd() {
    memory += parseFloat(display.value) || 0;
    memoryDisplay.value = 'Memory: ' + memory;
}

/**
 * Subtracts the current display value from the memory value.
 */
function memorySubtract() {
    memory -= parseFloat(display.value) || 0;
    memoryDisplay.value = 'Memory: ' + memory;
}

/**
 * Handles keyboard input for the calculator.
 */
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (/\d/.test(key)) {
        appendToDisplay(key);
    } else if (key === '+') {
        appendToDisplay('+');
    } else if (key === '-') {
        appendToDisplay('-');
    } else if (key === '*') {
        appendToDisplay('*');
    } else if (key === '/') {
        appendToDisplay('/');
    } else if (key === '.') {
        appendToDisplay('.');
    } else if (key === 'Enter' || key === '=') {
        calculateResult();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});
