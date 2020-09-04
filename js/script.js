// start
$(document).ready(
  function (){

// 1 Un alert espone 5 numeri casuali diversi.
var arr = [];
while(arr.length < 5){
    var numeroRandom = Math.floor(Math.random() * 100) + 1;
    if(arr.indexOf(numeroRandom) === -1) arr.push(numeroRandom);
}
  alert(arr);
  console.log(arr);


// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.

var numeroUtente = [];

setTimeout( function(){

  var numeriUtente = [];

  var i = 0;
  while (i < 5) {
    var numeroUtente = parseInt(prompt ("Inserisci i numeri che hai visualizzato"));
    i++;

    numeriUtente.push(numeroUtente);
  }

  // Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.

  var right =[];

  for (var i = 0; i < numeriUtente.length; i++){

    if (arr.includes(numeriUtente[i]))
    {
      right.push(numeriUtente[i]);
    }
  }

  alert("Hai indovinato " + right.length + " numer*");

}, 30000 );



}
);
