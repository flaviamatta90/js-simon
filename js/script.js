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
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.

var numeroUtente = [];
var listaNumeri= [];

setTimeout( function(){
  var i = 0;
  while (i < 5) {
    var numeroUtente = parseInt(prompt ("Inserisci i numeri che hai visualizzato"));
    i++;
    console.log(numeroUtente);
  }

  for (var i = 0; i < numeroUtente.length; i++){

    if (arr.includes(numeroUtente[i]))
    {
      listaNumeri.push(numeroUtente[i]);
    }
  }

  alert("Hai indovinato " + listaNumeri.length + " numeri");

}, 1000 );



}
);
