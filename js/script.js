// 1 Un alert espone 5 numeri casuali diversi.



// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
setTimeout( function(){
  var i = 0;
  while (i < 5) {
    var numeroUtente = parseInt(prompt ("Inserisci i numeri che hai visualizzato"));
    i++;
    console.log(numeroUtente);
  }
}, 30000 );


// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
