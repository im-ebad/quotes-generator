
const quoteEl=document.querySelector('#quote');
const authorEl=document.querySelector('#author');

const api_url='https://quotes-api-self.vercel.app/quote';

const getQuote = async () => {

	try {
		const response = await fetch(api_url);
		const data = await response.json();

		const quote = data.quote;
		const author = data.author || 'Unknown';

		quoteEl.textContent = quote;
		authorEl.textContent = author;
	}
	catch (error) {
		console.log(error);
		quoteEl.textContent = 'Oops! Something went wrong.';
		authorEl.textContent = '';
	}

}

const newQuoteBtn = document.querySelector('#quote-generator');
newQuoteBtn.addEventListener('click', getQuote);
