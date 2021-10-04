/* 
Zad 9
Wylosuj trzy liczby z przedziału odpowiednio 
<0, 10>, 
<-13, 23>, 
<34, 87>. 

Oblicz średnią arytmetyczną wyznaczonych liczb 
i wypisz tą liczbę spośród losowanych wcześniej, 
która ma wartość najbliżej obliczonej średniej.

*/

let a = Math.ceil(Math.random() * (10 - 0));
let b = Math.ceil(Math.random() * (23 - 13) + 13);
let c = Math.ceil(Math.random() * (87 - 34) + 34);

console.log("a = " + a);
console.log("b = " + b);
console.log("c = " + c);

let sum = a + b + c;
let avg = sum / 3;

console.log("sum = " + sum);
console.log("avg = " + avg);

/* let res = (a + b + c) / 3;
console.log("res = " + res); */


/* function countSum(a, b, c){

    if (a || b || c || typeof a !== `number`)

    let sum = a + b + c;

    function countAvg(sum){
        return sum / 3;
    }

}

console.log(countSum.); */






