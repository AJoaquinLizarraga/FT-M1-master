// function cacheFunction(cb) {

//   var objeto = {};
//   return function (arg) {
//     objeto[arg] = objeto.hasOwnProperty[arg] || cb(arg);
// console.log(objeto);

//     return objeto[arg];
//   }

//   // let objeto = {};
//   // return function (arg) {
//   //   if (!objeto.hasOwnProperty[arg]) {
//   //     objeto[arg] = cb(arg); 
//   //   }
//   //   console.log(objeto);
//   //   return objeto[arg];
//   // };
// }
// // console.log('algo');  
// function square(n) {
//   return n * n;
// }

// var squareCache = cacheFunction(square);
// console.log(squareCache(5));
// console.log(squareCache(3));
// console.log(squareCache(5));

// BUSCAR como saber si un objeto tiene propiedades repetidas  

var objeto = {};
function cacheFunction(cb) {
  return (arg) =>
    objeto.hasOwnProperty(arg) ? objeto[arg] + '--': (objeto[arg] = cb(arg));
}

function square(n) {
  return n * n;
}
const squareCache = cacheFunction(square);
console.log(squareCache(5));
console.log(squareCache(3));
console.log(squareCache(5));
console.log(objeto);