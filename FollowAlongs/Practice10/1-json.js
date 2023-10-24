const fs = require('fs');

// Creating a JavaScript Object
const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
};

// Converting Object to JSON and logging
const bookJSON = JSON.stringify(book);
console.log(bookJSON);

// Parsing JSON to Object and logging a property
const bookParsed = JSON.parse(bookJSON);
console.log(bookParsed.title);

// Writing JSON to a file
fs.writeFileSync('1-json.json', bookJSON);

// Reading JSON from a file, parsing, and logging
const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
console.log(dataJSON);

const data = JSON.parse(dataJSON);
console.log(data);
