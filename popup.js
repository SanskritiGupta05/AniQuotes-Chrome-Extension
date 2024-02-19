document.addEventListener('DOMContentLoaded', function () {

  
  function fetchNewQuote(event) {

  // Prevent the default behavior of the button
  if (event) {
    event.preventDefault();
  }

    fetch('https://my-json-server.typicode.com/SanskritiGupta05/AniQuotes/quotes')
      .then(response => response.json())
      .then(data => {
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomQuote = data[randomIndex];

        document.getElementById('quote').textContent = randomQuote.quote;
        document.getElementById('anime-name').textContent = randomQuote.animeName;
        document.getElementById('anime-image').src = randomQuote.image;
      })
      .catch(error => console.error('Error fetching quotes:', error));
  }

  // Fetch new quote on page load
  fetchNewQuote();

  // Add event listener for the "New Quote" button
  document.getElementById('new-quote-btn').addEventListener('click', fetchNewQuote);
});
