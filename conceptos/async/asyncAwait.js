//1. Funciones asincronas
async function hola(nombre) {
    return new Promise(function (resolve, reject) {
            //console.log('Hola, soy una funcion asincrona');
    setTimeout(function(){
        console.log('Hola, ' + nombre)
        resolve(nombre)
    }, 1500)
    });

}

async function hablar(nombre) {
    return new Promise((resolve, reject) => {  
    setTimeout(function(){
        console.log('bla bla bla bla...');
        resolve(nombre)
        //reject('Hay un error');
        }, 1000)
    });
}

async function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log('Adios', nombre);
            resolve()
        }, 1000)
    })

}

async function conversacion(nombre, veces, callback){
    if(veces >= 0){
        hablar(function(){
            conversacion(nombre, --veces, callback)
        })
    } else {
            adios(nombre, callback);
    }

}

async function main(){
    let nombre = await hola('Omar');
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('Terminamos el proceso...')
}

console.log('Empezamos el proceso...');
main();
