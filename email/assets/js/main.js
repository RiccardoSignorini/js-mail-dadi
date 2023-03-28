/*
--PROBLEMA--
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/

function check(){
    let checkEmail = document.getElementById(`checkEmail`).value;

    let email = [
        `mario.rossi@gmail.com`,
        `mario.rossi2@gmail.com`,
        `paolo.bianchi@gmail.com`,
        `paolo.bianchi2@gmail.com`,
        `roberto.verdi@gmail.com`,
        `roberto.verdi2@gmail.com`,
        `giorgio.neri@gmail.com`,
        `giorgio.neri2@gmail.com`,
    ]

    let soldatino = false;

    for(let n = 0; n < email.length; n++){
        if(email[n]==checkEmail){
            soldatino = true;
        }
    }

    if(soldatino==true){
        document.getElementById(`answer`).innerHTML = `<p>Accesso consentito</p>`
    } else{
        document.getElementById(`answer`).innerHTML = `<p>Accesso negato</p>`
    }
}