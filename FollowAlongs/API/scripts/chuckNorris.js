document.addEventListener('DOMContentLoaded', function() {
    const getJokeButton = document.getElementById("getJokeButton");
    const jokeCategorySelect = document.getElementById("jokeCategory");
    const jokeDisplay = document.getElementById("jokeDisplay");

    // Load categories into the dropdown
    fetch('https://api.chucknorris.io/jokes/categories')
    .then(response => response.json())
    .then(categories => {
        categories.forEach(category => {
            const option = document.createElement("option");
            option.value = category;
            option.text = category.charAt(0).toUpperCase() + category.slice(1);
            jokeCategorySelect.appendChild(option);
        });
    });

    getJokeButton.addEventListener("click", function() {
        let url = 'https://api.chucknorris.io/jokes/random';
        const selectedCategory = jokeCategorySelect.value;

        if (selectedCategory !== "random") {
            url = `https://api.chucknorris.io/jokes/random?category=${selectedCategory}`;
        }

        fetch(url)
        .then(response => response.json())
        .then(joke => {
            jokeDisplay.innerHTML = `<strong>Joke:</strong> ${joke.value}`;
            $("#jokeModal").modal('hide');
        })
        .catch(error => {
            console.error("Error fetching joke: ", error);
            jokeDisplay.innerHTML = "Error fetching joke. Please try again.";
        })
        .finally(() => {
            // Ensure modal and its backdrop are dismissed
            $("#jokeModal").modal('hide');
            $('body').removeClass('modal-open');
            $('.modal-backdrop').remove();
        });
    });
});
