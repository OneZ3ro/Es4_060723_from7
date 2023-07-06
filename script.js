/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

const area = function (l1, l2) {
  let result = l1 * l2;
  return result;
};
console.log("Esercizio 1. Area Rettangolo:\n", area(20, 30));

//______________________________________________________________________________________________________________________________

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare la loro somma moltiplicata per tre.
*/

const crazySum = function (par1, par2) {
  let result = null;
  if (par1 !== par2) {
    result = par1 + par2;
    return result;
  } else {
    result = (par1 + par2) * 3;
    return result;
  }
};
console.log("Esercizio 2. Somma:\n", crazySum(4, 4));

//______________________________________________________________________________________________________________________________

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

const crazyDiff = function (par1) {
  let result = par1 - 19;
  if (result < 0) {
    result = 19 - par1;
    return result;
  } else if (result >= 0 && result <= 19) {
    return result;
  } else {
    result = result * 3;
    return result;
  }
};
console.log("Esercizio 3. Differenza Assoluta:\n", crazyDiff(39));

//______________________________________________________________________________________________________________________________

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

const boundary = function (n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
};
console.log("Esercizio 4. Vero o falso:\n", boundary(401));

//______________________________________________________________________________________________________________________________

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

const epify = function (str) {
  if (str.indexOf("EPICODE") > -1) {
    return str;
  } else {
    let mystr = str.split(" ");
    mystr.splice(0, 0, "EPICODE");
    mystr = mystr.join(" ");
    return mystr;
  }
};
console.log("Esercizio 5. La mia stringa:\n", epify("La mia stringa"));

//______________________________________________________________________________________________________________________________

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

const check3and7 = function (num) {
  //   console.log(num);
  if (num < 0) {
    num = -num;
  }
  //   console.log(num);

  if (num % 3 === 0 || num % 7 === 0) {
    return "Si";
  } else {
    return "No";
  }
};
console.log(
  "Esercizio 6.\nIl numero è divisibile per 3 o per 7?",
  check3and7(-49)
);

//______________________________________________________________________________________________________________________________

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

const reverseString = function (str) {
  let mystr = str.split("");

  mystr.splice(1, 5, mystr[5], mystr[4], mystr[3], mystr[2], mystr[1]);
  mystr = mystr.join("");
  return mystr;
};
console.log("Esercizio 7. EPICODE -->", reverseString("EPICODE"));

//______________________________________________________________________________________________________________________________

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

const upperFirst = function (str) {
  let arr = Array.from(str.split(""));
  arr.splice(0, 0, " ");

  for (i = 0; i < arr.length; i++) {
    if (arr[i] === " ") {
      arr[i + 1] = arr[i + 1].toUpperCase();
    }
  }

  arr = arr.join("");
  return arr;
};
console.log(
  "Esercizio 8. Ogni prima lettera maiuscola:\n",
  upperFirst("una stringa qualsiasi senza senso")
);

//______________________________________________________________________________________________________________________________

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//______________________________________________________________________________________________________________________________

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//______________________________________________________________________________________________________________________________
