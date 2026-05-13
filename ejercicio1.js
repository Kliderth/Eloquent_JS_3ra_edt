//looping a triangle: Escribir un bucle que realice siete llamadas a console.log para dibujar un triángulo de almohadillas (#)
//forma basica con la información disponible en el libro hasta esta parte.

let almohadillas ="#";
let llamadas =7;
for (let i=1;i<=llamadas;i++){
    console.log (almohadillas);
    almohadillas += "#";
}

//una version mas corta si se tiene total seguridad que los valores son constantes seria
//haciendo que se repita el caracter una cantidad de veces = i entre cada una de las iteraciones de i

for (let i=1;i<=7; i++){
    console.log("#".repeat(i));
}
//otra opcion es usar la funcion length para determinar cuantos caracteres tiene a
let a="";
let i=6;
while (a.length<=i)
    console.log(a +="#");

/**cada una de las formas de resolver este problema aplican a algunas funciones en casos reales
1. respuesta es acumulativa lo cual podria funcionar para construir codigos de serie 
o para rutas un ejemplo seria si queremos una ruta de paradas en un viaje. cada que llegamos a un
punto del viaje lo agregamos al historial
2. Calculo constante. Nos podria funcionar siempre que tengamos los limites claros, un ejemplo practico
puede ser validar o crear un ranking, si el maximo de puntos es 7 "Estrellas" la funcion .repeat(i) imprime
solo el numero de "Estrellas" que posee.
3. El ultimo ejemplo no depende de contadores, depende de que el elemento tenga la caracteritica que buscamos.
un ejemplo seria un generador o validador de numeros de serie, podriamos validar que la extención del codigo es correcta y rellenar con 0 o descartar
*/

//Si tienes algo que agregar. con gusto te leo