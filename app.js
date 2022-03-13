var Emitter= require('./emitter');
//Se inyecta la dependencia.

var emtr = new Emitter();
//Se inicia el "emisor de eventos"

emtr.on('greet', () => {
    console.log(`Somewhere, someone said hello.`);
});

emtr.on('greet', () => {
    console.log(`A greeting ocurred!`);
});
//Se agregan 2 funciones con el mismo nombre 
//pero con diferentes salidas.

console.log(`Hello!`);
emtr.emit(`greet`);
//Se mandan a llamar dentro del emisor a todas las funciones
//que su nombre sea greet. Y gracias a esto es que al hacer node app
//nos sale primero el console log y luego se imprimen las funciones que tienen greet como type. 

emtr.on('jump', () => {
    console.log(`someone jumped!`);
});

console.log(emtr);
emtr.emit(`jump`);

//Al hacer un console.log de emtr podemos ver todos los eventos que hay,
//en este caso existen los eventos greet y jump.
//Y al hacer emit al type jump nos imprime las funciones que posean este type, en este
//caso solo una, la de someone jumped!

