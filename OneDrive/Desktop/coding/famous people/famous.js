const quotes = [
    { 
      quote : 'Dacă vrei să fii iubit, iubește!'
      author: 'Seneca'    
    },
    {
      quote: 'Nu e nevoie de motiv pentru a iubi.',
      author: 'Paulo Coelho'
    },
    {
      quote: 'Fericirea este în noi, niciodată în jurul nostru.'
      author: 'Mihail Sadoveanul'
        
    },
    {
      quote: 'Oamenii fericiți au memorie scurtă și multe amintiri.
      author: 'Martin Page'
    },
    {
      
    
    document.getElementById('btn2').onclick = function(){
    let randomDisplay = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('author').innerHTML = randomDisplay.quote;
    document.getElementById('quote').innerHTML = randomDisplay.author;
    };
