const quotes = [
    { 
      quote : 'It always seems impossible until is done.',
      author: 'Nelson Mandela'    
    },
    {
      quote: 'Life is what happens when you\'re busy making other plans.',
      author: 'Jhon Lennon'
    },
    {
      quote: 'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
      author: 'Benjamin Franklin'
    },
    {
      quote: 'The future belongs to those who believe in the beauty of their dreams.',
      author: 'Eleanor Roosevelt'
    },
    {
      quote: 'Whoever is happy will make others happy too.',
      author: 'Anne Frank'
    }
    ];
    
    document.getElementById('btn2').onclick = function(){
    let randomDisplay = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('author').innerHTML = randomDisplay.quote;
    document.getElementById('quote').innerHTML = randomDisplay.author;
    };