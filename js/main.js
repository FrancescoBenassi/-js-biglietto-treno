// Costanti dell'esercizio

const price = 0.21;
const over = 65;
const under = 18;
const salesOver = 40 / 100;
const salesUnder = 20 / 100;

//1) Chiedere il numero di km da percorrere

const distance = prompt('Inserisci i km da percorre');
console.log({ distance });

//2) Trasformare la stringa in numero

const distanceNumber = parseInt(distance);
console.log({ distanceNumber });

//3) Validare che il numero non sia NaN


