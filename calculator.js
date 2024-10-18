/**
 * Calculates the square root of a given value.
 * @param {number} value - The value to calculate the square root of.
 * @returns {number} - The square root of the input value.
 */
function calculateSquareRoot(value) {
    return Math.sqrt(value);
}

/**
 * Calculates the square of a given value.
 * @param {number} value - The value to square.
 * @returns {number} - The square of the input value.
 */
function calculateSquare(value) {
    return value * value;
}

/**
 * Calculates the reciprocal of a given value.
 * @param {number} value - The value to find the reciprocal of.
 * @returns {number} - The reciprocal of the input value.
 */
function calculateReciprocal(value) {
    return 1 / value;
}

/**
 * Calculates the natural logarithm (base e) of a given value.
 * @param {number} value - The value to calculate the natural logarithm of.
 * @returns {number} - The natural logarithm of the input value.
 */
function naturalLog(value) {
    return Math.log(value);
}

/**
 * Calculates the sine of a given angle (in radians).
 * @param {number} value - The angle in radians.
 * @returns {number} - The sine of the input angle.
 */
function sine(value) {
    return Math.sin(value);
}

/**
 * Calculates the cosine of a given angle (in radians).
 * @param {number} value - The angle in radians.
 * @returns {number} - The cosine of the input angle.
 */
function cosine(value) {
    return Math.cos(value);
}

/**
 * Calculates the tangent of a given angle (in radians).
 * @param {number} value - The angle in radians.
 * @returns {number} - The tangent of the input angle.
 */
function tangent(value) {
    return Math.tan(value);
}

module.exports = {
    calculateSquareRoot,
    calculateSquare,
    calculateReciprocal
};
