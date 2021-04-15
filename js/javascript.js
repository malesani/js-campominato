var max = 100;
var numBombs = 16; 
 
var tentativi = max - numBombs;
var cont_bombs = BombsGenerator(numBombs, max)
var arr_numeriGiocati = []

//ciclo per finire il gioco 

var gioco_finito = false 
while(gioco_finito === false){
  var numero = parseInt(prompt("digita un numero"))

  if(arr_numeriGiocati.includes(numero) === true){

    alert("hai gia inserito questo numero")

  }else if (cont_bombs.includes(numero) === true){
    
    alert("Hai perso!\nHai fatto "+ arr_numeriGiocati.length + " tentativi");
     console.log("Tentativi fatti: ("+arr_numeriGiocati.length+") "+ arr_numeriGiocati.join() + "\nIl numero che ti ha fatto perdere è stato il "+ numero);
     console.log(cont_bombs + " las bombas son")
     gioco_finito = true;
     
  }else if( numero > max){ // il numero non deve essere supriore al limite (100)

    alert("Attenzione! Il numero è superiore a "+max+".\nRiprova!")

  }else if( numero < 1 ){ // il numero non deve essere inferiore a 1

    alert("Attenzione! Il numero è inferiore a 1.\nRiprova!")

  }else if( isNaN(numero) === true ){ // deve essere un numero

    alert("Attenzione! Non hai inserto un numero.\nRiprova!")

  }else{//aggiungere il numero nella array
    arr_numeriGiocati.push(numero);
    if(tentativi === arr_numeriGiocati.length)
    {
      alert("hai vinto")
      gioco_finito = true;
    }
  } 
}

//creo una funzione che mette in una array la lista delle bombe 
function BombsGenerator (numBombs, max){
  var arr_bombs = [];

  while(arr_bombs.length < numBombs){
    var bomb = getNum_bom(max)
    if (arr_bombs.includes(bomb) === false)
    {
      arr_bombs.push(bomb)
    }
  }
  return arr_bombs
}

//funzione numeri random quantita bombe
function getNum_bom (max){
  return Math.ceil(Math.random() * max)
}