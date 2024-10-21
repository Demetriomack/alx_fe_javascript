// Function to display a random quote
function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    const quoteDisplay = document.getElementById('quoteDisplay');
    quoteDisplay.innerHTML = `
        <p>"${randomQuote.text}"</p>
        <p><strong>Category:</strong> ${randomQuote.category}</p>
    `;
}

<div>
<input id="newQuoteText" type="text" placeholder="Enter a new quote" />
<input id="newQuoteCategory" type="text" placeholder="Enter quote category" />
<button onclick="addQuote()">Add Quote</button>
</div>
