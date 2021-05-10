//**************Snack 1:
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

//creato funzione da poter riutilizzare
function sommaPeso(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        var n = Number(array[i].peso);
        sum += n;
    }
    return sum
}


//************Snack 2:
//Dividi in due array separati le zucchine che misurano meno o più di 15cm.
var zucchineGrandi = [];
var zucchinePiccole = [];
for (var i = 0; i < zucchine.length; i++) {
    var singola = zucchine[i].lunghezza;
    if (singola <= 15) {
        zucchinePiccole.push(zucchine[i])
    } else {
        zucchineGrandi.push(zucchine[i])
    }
}
console.log(zucchineGrandi);
console.log(zucchinePiccole);
//Infine stampa separatamente quanto pesano i due gruppi di zucchine.
console.log(sommaPeso(zucchineGrandi));
console.log(sommaPeso(zucchinePiccole));


//******** Snack 3:
//Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC) */
function returnReverse(string) {
    return string.split('').reverse().join('');
}
console.log(returnReverse('boolean'));

//********* Snack 4:
//Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
/* es. [a,b,c], [1,2,3] → [a,1,b,2,c,3]. */
var array1 = ['a', 'b', 'c', 'd', 'e'];
var array2 = [1, 2, 3, 4, 5];
function fondiArray(array1, array2) {
    var fusione = [];
    for (var i = 0; i < array1.length; i++) {
        fusione.push(array1[i]);
        fusione.push(array2[i]);
    }
    return fusione
}
console.log(fondiArray(array1, array2));


//**************Snack 5:
//Scrivi una funzione che accetti tre argomenti:
//un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
var a = 2;
var b = 9;
var array = ['1', 2, 3, 'hfajs', 5, 'adguia', 7, 8, 9, 10];
function findElements(a, b, array) {
    var newArray = [];
    for (var i= 0; i < array.length; i++) {
        if (i > a && i < b) {
            newArray.push(array[i])
        }
    }
    return newArray
}
console.log(findElements(a, b, array));
//La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b”