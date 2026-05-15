//FizzBuzz: El ejercicio consiste en imprimir los números del 1 al 100, pero con las siguientes condiciones:
//- Para los múltiplos de 3, imprimir "Fizz" en lugar del número.
//- Para los múltiplos de 5, imprimir "Buzz" en lugar del número.
//- Para los números que son múltiplos de ambos 3 y 5, imprimir "FizzBuzz".
for (let i=1; i<=100; i++){
    if (i %3 === 0 && i %5 === 0){
        console.log("FizzBuzz");
    } else if (i %3 === 0){
        console.log("Fizz");
    } else if (i %5 === 0){
        console.log("Buzz");
    } else {
        console.log(i);
    }
}