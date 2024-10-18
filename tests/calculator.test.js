const assert = require('assert');
const calculator = require('../calculator');

// Test memory functions
describe('Calculator Memory Functions', function() {
    it('should store and recall memory correctly', function() {
        calculator.memoryStore(10);
        const memoryValue = calculator.memoryRecall();
        assert.strictEqual(memoryValue, 10);
    });

    it('should clear memory', function() {
        calculator.memoryStore(5);
        calculator.memoryClear();
        const memoryValue = calculator.memoryRecall();
        assert.strictEqual(memoryValue, 0);
    });

    it('should add to memory', function() {
        calculator.memoryStore(5);
        calculator.memoryAdd(5);
        const memoryValue = calculator.memoryRecall();
        assert.strictEqual(memoryValue, 10);
    });

    it('should subtract from memory', function() {
        calculator.memoryStore(10);
        calculator.memorySubtract(3);
        const memoryValue = calculator.memoryRecall();
        assert.strictEqual(memoryValue, 7);
    });
});

// Test calculation functions
describe('Calculator Calculation Functions', function() {
    it('should return 2 when calculating square root of 4', function() {
        const res = calculator.calculateSquareRoot(4);
        assert.strictEqual(res, 2);
    });

    it('should return 25 when calculating square of 5', function() {
        const res = calculator.calculateSquare(5);
        assert.strictEqual(res, 25);
    });

    it('should return 0.5 when calculating reciprocal of 2', function() {
        const res = calculator.calculateReciprocal(2);
        assert.strictEqual(res, 0.5);
    });

    it('should return natural logarithm of e as 1', function() {
        const res = calculator.naturalLog(Math.E);
        assert.strictEqual(res, 1);
    });

    it('should return sine of 0 as 0', function() {
        const res = calculator.sine(0);
        assert.strictEqual(res, 0);
    });

    it('should return cosine of 0 as 1', function() {
        const res = calculator.cosine(0);
        assert.strictEqual(res, 1);
    });

    it('should return tangent of 0 as 0', function() {
        const res = calculator.tangent(0);
        assert.strictEqual(res, 0);
    });
});

// Add your tests here

// End-to-end tests for UI and functionality
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

describe('Calculator UI and Functionality', function() {
    let window;
    let document;
    let display;
    let memoryDisplay;

    before(function(done) {
        JSDOM.fromFile('index.html', {
            runScripts: 'dangerously',
            resources: 'usable'
        }).then(dom => {
            window = dom.window;
            document = window.document;
            // Wait for scripts to load
            window.onload = function() {
                display = document.getElementById('display');
                memoryDisplay = document.getElementById('memoryDisplay');
                done();
            };
        }).catch(done);
    });

    it('should display number when button is clicked', function() {
        const button7 = document.querySelector('button[onclick="appendToDisplay(\'7\')"]');
        button7.click();
        assert.strictEqual(display.value, '7');
    });

    it('should perform addition correctly', function() {
        const button2 = document.querySelector('button[onclick="appendToDisplay(\'2\')"]');
        const buttonPlus = document.querySelector('button[onclick="appendToDisplay(\'+\')"]');
        const button3 = document.querySelector('button[onclick="appendToDisplay(\'3\')"]');
        const buttonEqual = document.querySelector('button[onclick="calculateResult()"]');

        // Clear display first
        const clearButton = document.querySelector('button[onclick="clearDisplay()"]');
        clearButton.click();

        button2.click();
        buttonPlus.click();
        button3.click();
        buttonEqual.click();

        assert.strictEqual(display.value, '5');
    });

    it('should clear the display when C button is clicked', function() {
        const button1 = document.querySelector('button[onclick="appendToDisplay(\'1\')"]');
        const clearButton = document.querySelector('button[onclick="clearDisplay()"]');

        button1.click();
        assert.strictEqual(display.value, '1');

        clearButton.click();
        assert.strictEqual(display.value, '');
    });

    it('should delete last character when DEL button is clicked', function() {
        const button1 = document.querySelector('button[onclick="appendToDisplay(\'1\')"]');
        const button2 = document.querySelector('button[onclick="appendToDisplay(\'2\')"]');
        const deleteButton = document.querySelector('button[onclick="deleteLast()"]');

        button1.click();
        button2.click();
        assert.strictEqual(display.value, '12');

        deleteButton.click();
        assert.strictEqual(display.value, '1');
    });

    it('should store and recall memory', function() {
        const button5 = document.querySelector('button[onclick="appendToDisplay(\'5\')"]');
        const memoryStoreButton = document.querySelector('button[onclick="memoryStore()"]');
        const memoryRecallButton = document.querySelector('button[onclick="memoryRecall()"]');
        const clearButton = document.querySelector('button[onclick="clearDisplay()"]');

        button5.click();
        memoryStoreButton.click();
        assert.strictEqual(memoryDisplay.value, 'Memory: 5');

        clearButton.click();
        memoryRecallButton.click();
        assert.strictEqual(display.value, '5');
    });

    // TODO: Add more UI tests?
});
