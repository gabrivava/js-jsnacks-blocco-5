//Snack 1:
//Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.

var zucchine = [
    {varietà : 'Nera di Milano', peso : 1, lunghezza : 10},
    {varietà : 'Tonda di Nizza', peso : 1.5, lunghezza : 14},
    {varietà : 'Lunghe fiorentine', peso : 4, lunghezza : 28},
    {varietà : 'Trombetta d Albenga', peso : 0.7, lunghezza : 11},
    {varietà : 'Alberello', peso : 2, lunghezza : 17},
    {varietà : 'Giallo golden', peso : 2.3, lunghezza : 25},
    {varietà : 'Normale', peso : 2, lunghezza : 22},
    {varietà : 'Ogm', peso : 10, lunghezza : 40},
    {varietà : 'Turca', peso : 1.4, lunghezza : 15},
    {varietà : 'dell Orto', peso : 2, lunghezza : 20}
];

//Calcola quanto pesano tutte le zucchine.
var pesoZucchine = 0;
for (var i = 0; i < zucchine.length; i++) {
    var n = Number(zucchine[i].peso);
    pesoZucchine += n;
}
console.log(pesoZucchine);

//Snack 2:
//Crea 10 oggetti che rappresentano una zucchina.
//Dividi in due array separati le zucchine che misurano meno o più di 15cm.
//Infine stampa separatamente quanto pesano i due gruppi di zucchine.