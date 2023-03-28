/*
--PROBLEMA--
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

function play(){
    let person = Math.floor(Math.random()*6)+1

    let pc = Math.floor(Math.random()*6)+1

    if(person>pc){
        document.getElementById(`result`).innerHTML = `<p>You: ${person} PC:  ${pc}, the winner are you</p>`
    } else if(person<pc){
        document.getElementById(`result`).innerHTML = `<p>You: ${person} PC:  ${pc}, the winner is pc</p>`
    } else{
        document.getElementById(`result`).innerHTML = `<p>You: ${person} PC:  ${pc}, no winners!</p>`
    }
}