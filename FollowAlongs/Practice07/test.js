// Q1
for (let i = 2; i <= 10; i+=2) {
    console.log(i);
}

// Q2
for (let i = 5; i >= 1; i--) {
    console.log(i);
}

// Q3
const numbers1 = [1, 2, 3, 4, 5];
let sum1 = 0;
for (const number of numbers1) {
    sum1 += number;
}
console.log(sum1);

// Q4
const student = { name: 'John', age: 20, grade: 'A' };
for (const key in student) {
    console.log(key);
}

// Q5
const book = { title: 'Harry Potter', author: 'J.K. Rowling', year: 1997 };
for (const key in book) {
    console.log(book[key]);
}

// Q6
const colors = ['red', 'green', 'blue', 'yellow'];
for (const color of colors) {
    console.log(color);
}

// Q7
const numbers2 = [1, 2, 3, 4, 5];
let sum2 = 0;
for (const number of numbers2) {
    sum2 += number;
}
console.log(sum2);

// Q8
const temperatures = [32, 68, 75, 82, 56];
temperatures.forEach(function(temperature) {
    const celsius = (temperature - 32) * 5/9;
    console.log(celsius);
});

// Q9
const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston'];
const populations = { 'New York': 8398748, 'Los Angeles': 3990456, 'Chicago': 2705994, 'Houston': 2320268 };
cities.forEach(function(city) {
    console.log(`${city}: ${populations[city]}`);
});

// Q10
for (let i = 1; i <= 5; i++) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
        pattern += '*';
    }
    console.log(pattern);
}
