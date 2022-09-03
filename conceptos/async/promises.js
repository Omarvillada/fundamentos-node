//1. Funciones asincronas
function hola(nombre, reject) {
    return new Promise(function (resolve, reject) {
            //console.log('Hola, soy una funcion asincrona');
    setTimeout(function(){
        console.log('Hola, ' + nombre)
        resolve(nombre)
    }, 1500)
    });

}

function hablar(nombre) {
    return new Promise((resolve, reject) => {  
    setTimeout(function(){
        console.log('bla bla bla bla...');
        //resolve(nombre)
        reject('Hay un error');
        }, 1000)
    });
}

function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log('Adios', nombre);
            resolve()
        }, 1000)
    })

}

function conversacion(nombre, veces, callback){
    if(veces >= 0){
        hablar(function(){
            conversacion(nombre, --veces, callback)
        })
    } else {
            adios(nombre, callback);
    }

}
///--
console.log('Iniciando el proceso');
hola('Papi')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log('El proceso ha terminado');
}).catch(error => {
    console.log('Ha habido un error:')
    console.log(error);
})