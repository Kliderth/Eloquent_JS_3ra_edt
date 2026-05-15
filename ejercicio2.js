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
console.log("Fin de respuesta 1");

//Otra forma de resolverlo es usando el operador ternario, 
// aunque puede ser menos legible para algunos programadores, 
// es una forma mas compacta de escribir el mismo código.
for (let i=1; i<=100; i++){
    console.log(i %3 === 0 && i %5 === 0 ? "FizzBuzz" : i %3 === 0 ? "Fizz" : i %5 === 0 ? "Buzz" : i);
}
console.log("Fin de respuesta 2");

//otra forma de resolverlo es usando un array para almacenar los resultados 
// y luego imprimirlos al final, lo que puede ser útil si se desea realizar 
// alguna operación adicional con los resultados antes de imprimirlos.
const results = [];
for (let i=1; i<=100; i++){
    if (i %3 === 0 && i %5 === 0){
        results.push("FizzBuzz");
    } else if (i %3 === 0){
        results.push("Fizz");
    } else if (i %5 === 0){
        results.push("Buzz");
    } else {
        results.push(i);
    }
}
console.log(results.join("\n"));

console.log("Fin de respuesta 3");
// 