const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote-btn');

newQuoteBtn.addEventListener('click', getQuote);

async function getQuote() {
  quoteText.textContent = 'Loading...';
  quoteAuthor.textContent = '';

  try {
    const response = await fetch('/api/quote'); // call Flask route
    const data = await response.json();

    if (data.error) throw new Error(data.error);

    quoteText.textContent = `"${data.content}"`;
    quoteAuthor.textContent = `— ${data.author}`;
  } catch (err) {
    quoteText.textContent = 'Failed to fetch quote.';
    quoteAuthor.textContent = '';
    console.error(err);
  }
}

getQuote();
