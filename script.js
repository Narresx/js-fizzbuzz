console.log('JS OK')

/* Traccia 
  
Scrivere un programma che stampi i numeri da 1 a 100.
Per i multipli di 3 stampi Fizz al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz

*/

/*  Procedimento

1 - Scriviamo una funzione che stampi numeri da 1 a 100

2 - Modifichiamo la funzione secondo la traccia

3 - Stampiamo la funzione in pagina

*/

// Punto 1 e 2

let numberElement = '';

for (let i = 1; i <= 100; i++) {
    if ((i % 3 == 0) && (i % 5 == 0))
        console.log("FizzBuzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);
}

// Punto 3

numberElement.innerHTML = document.getElementById('result');