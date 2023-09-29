// Q1
function multiply(x, y) {
    return x * y;
}

// Q2
function isEven(num) {
    return num % 2 === 0;
}

// Q3
const subtract = function(a, b) {
    return a - b;
};
const difference = subtract;

// Q4
const greeting = function(name) {
    return `Hello, ${name}!`;
};

// Q5
function calculate(x, y) {
    const squareSum = function(a, b) {
        return (a + b) * (a + b);
    };
    return squareSum(x, y);
}

// Q6
function average(num1, num2, num3) {
    const calcAvg = function(a, b, c) {
        return (a + b + c) / 3;
    };
    return calcAvg(num1, num2, num3);
}


// Q7
const multiplyArrow = (a, b) => a * b;

// Q8
const greetArrow = name => `Hello, ${name}!`;

// Q9
const squareArrow = x => x * x;

// Q10
const isEvenArrow = num => num % 2 === 0;

// Q11
const findMax = numbers => Math.max(...numbers);

// Q12
const addTwoNumbers = (a, b) => {
    const sum = a + b;
    return sum;
};

