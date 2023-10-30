function getRandomInt() {
    return Math.floor(Math.random() * 8) + 1;
}

function clearText() {
    document.getElementById("userName").textContent = "";
    document.getElementById("userPhoto").src = "images/client.jpg";
    document.getElementById("userMessage").textContent = "";
}

// function processText(text) {
//     return text.replace(/\./g, '!') + '\n';
// }
function processText(text) {
    // Replace period (.) with 3 exclamation points (!!!)
    text = text.replace(/\./g, '!!!');

    // Add a new line after three exclamation points.
    // Using $& to reference the whole matched string (in this case, '!!!').
    text = text.replace(/!!!/g, '$&\n');

    return text;
}

// function textToArray(text) {
//     return text.split('\n');
// }
function textToArray(text) {
    // Adding extra exclamation marks followed by a newline at the end of each sentence
    text = text.replace(/!!!\n/g, '!!!\n!!!\n');

    // Split the text data by the newline character to create an array of sentences
    return text.split('\n').filter(sentence => sentence.trim() !== ''); 
}

// function appendText(textArray) {
//     const cardElement = document.getElementById("userMessage");
//     textArray.forEach(sentence => {
//         const spanElement = document.createElement("span");
//         spanElement.textContent = sentence;
//         cardElement.appendChild(spanElement);
//     });
// }

function appendText(textArray) {
    // Get the paragraph element inside the card to append the content
    const cardTextElement = document.querySelector(".card .card-text");
    
    // Clear any existing content in the card text
    cardTextElement.innerHTML = "";

    // Loop over each sentence in the text array
    textArray.forEach(sentence => {
        // Create a new span element for each sentence
        const spanElement = document.createElement("span");
        spanElement.style.display = "block"; //
        spanElement.textContent = sentence;
        
        // Append the span element to the paragraph inside the card
        cardTextElement.appendChild(spanElement);
    });
}

function updateClient() {
    let id = getRandomInt();
    fetchUserData(id);
}

function fetchUserData(userId) {
    const apiUrl = `https://64486933e7eb3378ca2e0f51.mockapi.io/api/users/${userId}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data); 

            clearText(); // Clear text and set default image first
            document.getElementById('userPhoto').src = data.avatar;  // Set fetched image
            document.getElementById('userName').textContent = data.name; // Set fetched name

            let processed = processText(data.message);
            let textArr = textToArray(processed);
            appendText(textArr); // Append message
        })
        .catch(error => {
            console.error('There was a problem fetching the user data:', error);
        });
}


document.querySelector(".btn-primary").addEventListener("click", updateClient);
