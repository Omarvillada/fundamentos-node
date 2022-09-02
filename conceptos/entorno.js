let nombre = process.env.NOMBRE || 'sin nombre';
let web = process.env.WEB || 'no tengo web';
console.log('Hello ' + nombre);
console.log('Hello ' + web);