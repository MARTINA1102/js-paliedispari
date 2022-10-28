/*Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/

/*esercizio Palindroma
const varParola = prompt ('Inserisci una parola');
const parolaDivisa = varParola.split('');
const parolaDivisaArray = parolaDivisa.reverse();
const parolaInvertita = parolaDivisaArray.join('');

function palindroma(testo1, testo2){
    if(testo1==testo2){
        return 'la parola inserita è palindroma';  
    } else{
        return'la parola inserita NON è palindroma';
    }
}
risultato=palindroma(varParola, parolaInvertita);
alert (risultato);
*/

const scelta=prompt('pari o dispari?');
const numUtente=parseInt(prompt('dammi un numero da 1 a 5'));
console.log (numUtente);
const numCasuale= parseInt(Math.floor(Math.random() * 5) + 1);
console.log(numCasuale);

function somma (num1, num2){
    if(((num1+num2)%2)==0){
        return 'pari';
    }
    else {
        return 'dispari';
    }
}
const risultato1=somma (numUtente, numCasuale);
alert (risultato1);
function paridispari (testo1, testo2){
    if (testo1== testo2){
        return 'hai vinto';
    }else{
        return 'hai perso';
    }
}
const risultato2=paridispari (scelta, risultato1);
alert(risultato2);
