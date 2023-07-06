// Esercizi aggiuntivi (facoltativi) per D4

// PARTE FUNZIONI UTILE PER LO SVOLGIMENTO DEI VARI ESERCIZI EXTRA

// funzione utile per esercizio (extra) 1
const giveMeRandom = function (n) {
  const arr_num = [];

  for (let i = 0; i < n; i++) {
    let num = Math.floor(Math.random() * 11);
    arr_num.push(num);
  }
  return arr_num;
};

// funzione utile per esercizio (extra) 2
const giveMeRandomID = function () {
  const n = 10;
  const arr_num = [];

  for (let i = 0; i < n; i++) {
    let num = Math.floor(Math.random() * 4);
    arr_num.push(num);
  }

  let arr_fin = arr_num.join("");
  return arr_fin;
};

//______________________________________________________________________________________________________________________________

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

const checkArray = function () {
  const arr_random_num = giveMeRandom(10);
  console.log("Esercizio 1 EXTRA.", arr_random_num);
  let somma = 0;

  for (let i = 0; i < arr_random_num.length; i++) {
    if (arr_random_num[i] > 5) {
      somma = somma + arr_random_num[i];
      console.log(`Il numero ${arr_random_num[i]} è maggiore di 5`);
    } else {
      console.log(`Il numero ${arr_random_num[i]} NON è maggiore di 5`);
    }
  }
  return somma;
};

console.log("La somma dei numeri maggiori di 5 è:", checkArray());

//______________________________________________________________________________________________________________________________

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

const shoppingCart = [
  {
    price: 23.5,
    nome: "Lampada",
    id: giveMeRandomID(),
    quantity: 15,
  },
  {
    price: 9.17,
    nome: "Cuscino",
    id: giveMeRandomID(),
    quantity: 30,
  },
  {
    price: 45,
    nome: "Figure John Wick",
    id: giveMeRandomID(),
    quantity: 5,
  },
  {
    price: 35,
    nome: "Mistery box",
    id: giveMeRandomID(),
    quantity: 10,
  },
  {
    price: 649.99,
    nome: "PlayStation-7",
    id: giveMeRandomID(),
    quantity: 1,
  },
  {
    price: 1899.99,
    nome: "iPhone-XX",
    id: giveMeRandomID(),
    quantity: 3,
  },
];

// Metodo stazionario
// const shoppingCartTotal = function () {
//   const arr_price = [];
//   let total_price = 0;

//   for (let i = 0; i < shoppingCart.length; i++) {
//     arr_price.push(shoppingCart[i].price);
//     total_price = total_price + shoppingCart[i].price;
//   }
//   //   console.log(arr_price);
//   return total_price;
// };
// console.log(`Il prezzo totale del carrello è: ${shoppingCartTotal()}€`);

// Metodo dinamico
const client_shoppingCartTotal = function () {
  const arr_yes_no = [];
  const arr_price = [];
  let total_price = 0;
  let yes_no = "";

  for (let i = 0; i < shoppingCart.length; i++) {
    yes_no = prompt(
      `Vuoi comprare ${shoppingCart[i].name} al prezzo di ${shoppingCart[i].price}€? Si o no?`
    ).toLocaleLowerCase();
    arr_yes_no.push(yes_no);
  }

  //   per controllo
  //   const arr_all_price = [];
  //   for (let i = 0; i < shoppingCart.length; i++) {
  //     arr_all_price.push(shoppingCart[i].price);
  //   }
  //   console.log(arr_all_price);
  //   console.log(arr_yes_no);

  for (let i = 0; i < arr_yes_no.length; i++) {
    if (arr_yes_no[i] === "si" || arr_yes_no[i] === "yes") {
      arr_price.push(shoppingCart[i].price);
      total_price = total_price + shoppingCart[i].price;
    }
  }

  //   console.log(arr_price);
  return total_price;
};
console.log(`Il prezzo totale del carrello è: ${client_shoppingCartTotal()}€`);

//______________________________________________________________________________________________________________________________

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
