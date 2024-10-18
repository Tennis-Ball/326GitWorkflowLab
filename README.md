# COMPSCI 326 Git Workflow Lab

## Lab Description

This project considers the topic of real-world collaboration workflows in git
and GitHub for software development in agile teams. Components of collaboration
workflows that will be touched upon include development branches, production
branches, feature branches, pull requests, code reviews, and ticket tracking.
While there are discrete workflows that teams follow, it is also important to
emphasize that standard workflow definitions are completely up to the individual
teams/companies. These standards are, in fact, most often altered to better fit
the work environment at hand. The presented workflow components serve as a
foundation for learning how to customize the optimal workflow for a development
team.

## Intended learning outcomes (ILOs)

Students are expected to distinguish between different types of workflows for
managing a git repository and know how to deal with merge conflicts. They will
also learn how to communicate with other team members in a git setting to get
changes implemented and pushed. They’ll understand the importance of tests in
ensuring the production branch is reliably functional.

## Features

- Basic arithmetic operations: `+`, `-`, `*`, `/`
- Clear (`Clear`) and delete last character (`Del`) buttons
- Memory storage (`Store`), memory recall (`Recall`), and memory clear (`Reset`)
  functionality
- Error handling for invalid inputs

### Implemented Features:

- [x] Display for calculator operations
- [x] Basic arithmetic functions
- [x] Clear and Delete buttons

### TODO Features:

- [x] Implement square root function
- [x] Implement square function
- [x] Add keyboard support for number input
- [x] Improve the design (CSS styling)
- [x] Memory Store (`MS`), Recall (`MR`), and Clear (`MC`)

### Bugs:
- [x] Fix reciprocal function

## Roadmap

The goal of this project is to create a fully functioning and visually appealing
JavaScript calculator, while encouraging contributions and learning. Below is
the roadmap for future improvements and features:

1. **Basic Calculator Expansion**:
   - [x] Implement scientific calculator functions like square root, square, and
         reciprocal.
   - [x] Add more advanced memory functions, such as memory addition and
         subtraction (`M+`, `M-`).

2. **UI/UX Improvements**:
   - [x] Design a more user-friendly and modern UI.
   - [x] Add responsiveness for mobile devices.

3. **Input & Error Handling**:
   - [x] Enable keyboard input for numbers and operations.
   - [x] Improve error handling with better feedback for the user.

4. **Testing**:
   - [x] Add unit tests for core functions.
   - [x] Implement end-to-end tests for UI and functionality.

5. **Documentation**:
   - [x] Write detailed function explanations for new features.
   - [x] Create usage examples in the `README`.

## How to Set Up The Lab

1. Fork the template
2. Add all contributing TAs to the list of repository contributors
3. Create ticket in Issue's tab
4. Clone your fork:
   ```bash
   git clone https://github.com/your-username/js-calculator.git
   ```
5. Create a new branch with name matching corresponding issue:
   ```bash
   git checkout -b feature/my-feature
   ```

6. Make your changes and commit them:
7. Push your changes to your fork:
   ```bash
   git push origin feature/my-feature
   ```

## Presentation Instructions

Two TAs will present this lab case study to a group of students. If presented on Zoom, the TAs will take turns sharing their screens presenting the steps they are taking in the following workflow:

1. (TA #1) Select 2 issues from the list above and create corresponding GitHub issues. Include descriptions, tags, and assignments in the issues. Assing one issue to yourself and one issue to the other TA.
2. (TA #1) Create the branch corresponding to the issue assigned to yourself. Make and push any changes to complete the issue. Don't forget about adding and running tests in the tests file. Create a pull request for the branch and assign the TA #2 as a reviewer.
3. (TA #2) Create the branch corresponding to the issue assigned to yourself. Make and push any changes to complete the issue. Don't forget about adding and running tests in the tests file. Create a pull request for the branch and assign the TA #1 as a reviewer.
4. (TA #2) Review the PR from TA #1 and create any necessary comments.
5. (TA #1) Respond to the TA #1 comments and make any additional commits to fix the changes.
6. (TA #1) Take a look at TA #2's PR, and approve/merge it if everything looks good.
7. (TA #2) Approve/merge TA #1's PR.

## Usage Examples

Below are some examples demonstrating how to use the calculator application, both from a user's perspective and as a developer integrating the calculator's functions into your own code.

### Using the Calculator Interface

1. **Basic Operations**:
   - **Addition**: Click on the numbers and the `+` button to perform addition.
     ```plaintext
     Press: 2 + 3 =
     Result: 5
     ```
   - **Subtraction**: Use the `−` button for subtraction.
     ```plaintext
     Press: 7 − 4 =
     Result: 3
     ```
   - **Multiplication**: Use the `×` button for multiplication.
     ```plaintext
     Press: 5 × 6 =
     Result: 30
     ```
   - **Division**: Use the `÷` button for division.
     ```plaintext
     Press: 8 ÷ 2 =
     Result: 4
     ```

2. **Advanced Functions**:
   - **Square Root**: Use the `√` button to calculate the square root of a number.
     ```plaintext
     Enter: 9
     Press: √
     Result: 3
     ```
   - **Square**: (Assuming a square button is implemented)
     ```plaintext
     Enter: 4
     Press: x²
     Result: 16
     ```
   - **Reciprocal**: (Assuming a reciprocal button is implemented)
     ```plaintext
     Enter: 5
     Press: 1/x
     Result: 0.2
     ```
   - **Natural Logarithm**: (Assuming an `ln` button is implemented)
     ```plaintext
     Enter: 2.71828182846
     Press: ln
     Result: 1
     ```
   - **Trigonometric Functions**: (Assuming `sin`, `cos`, `tan` buttons are implemented)
     ```plaintext
     Enter: 0
     Press: sin
     Result: 0
     ```
     ```plaintext
     Enter: 0
     Press: cos
     Result: 1
     ```
     ```plaintext
     Enter: 0
     Press: tan
     Result: 0
     ```

3. **Memory Functions**:
   - **Memory Store (`MS`)**: Stores the current value in memory.
     ```plaintext
     Enter: 10
     Press: MS
     Memory Display: Memory: 10
     ```
   - **Memory Recall (`MR`)**: Recalls the value stored in memory to the display.
     ```plaintext
     Press: MR
     Display Shows: 10
     ```
   - **Memory Clear (`MC`)**: Clears the stored memory value.
     ```plaintext
     Press: MC
     Memory Display: Memory: 0
     ```
   - **Memory Add (`M+`)**: Adds the current value to the memory.
     ```plaintext
     Enter: 5
     Press: M+
     Memory Display: Memory: 15
     ```
   - **Memory Subtract (`M−`)**: Subtracts the current value from the memory.
     ```plaintext
     Enter: 3
     Press: M−
     Memory Display: Memory: 12
     ```

4. **Keyboard Support**:
   - **Numeric Input**: Use number keys (`0`–`9`) to enter numbers.
   - **Operations**: Use `+`, `-`, `*`, `/`, and `.` keys for operations.
   - **Calculate Result**: Press `Enter` or `=` to compute the result.
   - **Delete Last Character**: Press `Backspace` to delete the last character.
   - **Clear Display**: Press `Escape` to clear the display.

5. **Error Handling**:
   - **Invalid Calculations**: If an invalid operation is performed, an error message will be displayed.
     ```plaintext
     Example: 5 ÷ 0 =
     Display Shows: Error: Division by zero
     ```
   - **Invalid Input**: For nonsensical inputs, the calculator provides feedback.
     ```plaintext
     Example: Press: + + =
     Display Shows: Error: Invalid input
     ```

### Integrating Calculator Functions in Code

You can use the calculator's functions in your own JavaScript projects by importing them from `calculator.js`.

```javascript
const {
    calculateSquareRoot,
    calculateSquare,
    calculateReciprocal,
    naturalLog,
    sine,
    cosine,
    tangent
} = require('./calculator');

// Example usage:

// Calculate the square root of 16
let sqrtValue = calculateSquareRoot(16); // Returns 4

// Calculate the square of 5
let squareValue = calculateSquare(5); // Returns 25

// Calculate the reciprocal of 2
let reciprocalValue = calculateReciprocal(2); // Returns 0.5

// Calculate the natural logarithm of Euler's number
let lnValue = naturalLog(Math.E); // Returns 1

// Calculate the sine of 90 degrees (converted to radians)
let sineValue = sine(Math.PI / 2); // Returns 1

// Calculate the cosine of 0 degrees
let cosineValue = cosine(0); // Returns 1

// Calculate the tangent of 45 degrees (converted to radians)
let tangentValue = tangent(Math.PI / 4); // Returns 1
