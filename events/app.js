let obj = {
    nombre: 'Gustavo',
    edad: 19,
    apellido: 'Higuera',
    keypress: function () {
        console.log(`Se ha presionado una tecla`);
    },
    mouseOver: function () {
        console.log(`El puntero del mouse está arriba`);
    }
}

console.log(obj.nombre);
console.log(obj[`nombre`]);
//Ambas son formas válidas de llamar al atributo nombre del objeto, el problema es
//que son case-sensitive y si cambia el nombre de los atributos, se tendría que cambiar
//manualmente uno por uno.
//Al ejecutarlo se muestra mi nombre las 2 veces.

let myKey = `nombre`
console.log(obj[myKey]);
//También se le puede asignar una variable al atributo, de esta forma si se cambia
//el nombre del atributo, solo se tendría que cambiar en la variable.
//Al ejecutarlo también muestra mi nombre.

myKey = `keypress`;
console.log(obj[myKey]());
myKey = `mouseOver`;
console.log(obj[myKey]());

//Se puede asignar eventos para que cuando la variable tenga ese valor tenga una reacción,
//en este caso al tener el valor de keypress regresa un array y al tener el valor de mouseOver
//regresa otro array, además como son funciones se tienen que llamar en el console.log, esto
//mediante un ();

let myArray = [];

myArray.push(4);
myArray.push(`una cadena`);
myArray.push(obj);
myArray.push(function () {
    console.log(`hola desde el array`);
})

console.log(myArray);

//Al ejecutar un console.log del array, este muestra todo lo que tenga dentro, en este
//caso todos los objetos, aunque sean valores y tipos distintos, gracias a que son objetos.
//En el caso de las funciones, no muestra lo que está dentro porque son anónimas, pero si muestra que
//son funciones, y en el caso del objeto, muestra todos sus atributos.

console.log(myArray[2].mouseOver());

//mediante esta línea se invoca a la función mouseOver que se encuentra en el objeto dentro del array

console.log(myArray[3]());

//mediante esta línea se invoca al cuarto objeto del array, que se encuentra en la posición
//4, no se necesita del nombre de la función para invocarla, solo saber la posición y ponerle los paréntesis

let funcArray = [];

funcArray.push( () => {
    console.log(`Function 1`);
});

funcArray.push( () => {
    console.log(`Function 2`);
});

funcArray.push( () => {
    console.log(`Function 3`);
});

//funcArray es un array lleno de funciones, las cuales pueden ser invocadas

funcArray.forEach((item) => {
    item();
})

//mediante este forEach se recorre el array completo y cada posición que recorre
//invoca a la función de esa posición.