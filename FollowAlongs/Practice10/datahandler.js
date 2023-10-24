const fs = require('fs');

// Reading and parsing data from JSON file
const dataBuffer = fs.readFileSync('data.json');
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);

// Logging user details
console.log(`${user.name} lives in ${user.city}`);

// Modifying user details
user.name = "Vishrut"; // replace "Your Name" with your actual name
user.city = "Hyderabad"; // replace "Your City" with your actual city

// Converting the modified user object to JSON and saving it back to the file
const userJSON = JSON.stringify(user);
fs.writeFileSync('data.json', userJSON);
