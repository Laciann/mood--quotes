
let rand = document.getElementById('rand');
let quoteText = document.getElementById('quoteText');
let quoteAuthor = document.getElementById('quoteAuthor');

const quotes = [
 [['Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.'],['Abhishek']],
 [['you like direflies'],['Jack Handey']],
];

rand.onclick =  (e) => {
    randomIndex = Math.round(Math.random()*(quotes.length-1))
    quoteData = quotes[randomIndex];
    quote = quoteData[randomIndex];
    author = quoteData[1][0];
    quoteText.textContent = quote;
    quoteAuthor.textContent = author;
};

