const generate = document.getElementById('generate');
const quotes = document.getElementById('quote');

const request = async () => {
  // Fetch from API
  const res = await fetch(
    'https://api.whatdoestrumpthink.com/api/v1/quotes/random'
  );
  // Generate the Data
  const data = await res.json();
  // Display the Data
  quotes.textContent = data.message;
};

// Generate the Quotes
generate.addEventListener('click', request);
