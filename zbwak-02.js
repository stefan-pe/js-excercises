
/*
Zad 2
Wylosuj liczbę z przedziału <-50, 50> 
i zapisz ją w zmiennej typu całkowitoliczbowego o nazwie x. 
Zbadaj, w którym z wymienionych przedziałów 
znajduje się wylosowana liczba: 
<-∞, -40), 
<-40, -20), 
<-20, 20>, 
(20, ∞).
*/



console.log("=========================================================================")
const MIN = -50;
const MAX = 50;

//const x = Math.ceil(Math.random() * (MAX - MIN)) + MIN;
let x = Math.ceil(Math.random() * (MAX - MIN)) + MIN;
console.log(x);
console.log("x = " + x);
console.log(`x = ${x}`);


if (x < -40)
{
    console.log("<-∞, -40)");
} 
else if (x >= -40 && x <= -20) 
{
    console.log("<-40, -20)");
} 
else if (x > -20 && x <= 20)
{
console.log("(-20, 20>");
} 
else 
{
    console.log("(20, ∞)");
}


/* switch (x){
    case 1:
        //x <= -40;
        console.log(x)
        break;
    case 2:
        //x >= -40 && x <= -20;
        console.log(x)
        break;
    case 3:
        //x > 20;
        console.log(x)
        break;
    default:
        console.log("something else");
} */



console.log("=========================================================================")

