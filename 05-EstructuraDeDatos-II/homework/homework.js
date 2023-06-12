'use strict';












/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo 
    nodo y de una lista vacía)
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un 
    callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo 
    valor, al ser pasado como parámetro del callback, retorne true. 

  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo 
  valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

  //  ⇊⇊⇊⇊⇊      funcion constructora de la LinkedList
function LinkedList() {
  this.head = null;           // HEAD SIEMPRE COMIENZA CON NULL, PORQUE NO ESTA CONECTADO HASTA CONECTARLO A UN NODO CON LA FUNCION add
  this._length = 0;
}
  //  ⇊⇊⇊⇊⇊       funcion constructora del nodo
function Node(value) {        //la funcion constructora Node es para crear los nodos, recibe un valor y next es el conector que siempre 
                              // comienza en null
  this.value = value;
  this.next = null;
}
/// - add: agrega un nuevo nodo al final de la lista; ///
//                    ⇊ el .add crea un metodo para LinkedList
                              // este ⇊  es el parametro de la funcion constructora Node 
LinkedList.prototype.add = function(value) {   //aqui se crea metodo para agregar nodos, primero al head y despues al ultimo nodo
  let node = new Node(value);     // aqui instancia con el 'new' un nodo recibiendo el valor por parametro
//          |_______________| ⇉ cada vez que se llama al 'new Node' , se crea una nueva instancia
  let current = this.head;    // este es el gancho al siguiente valor, comenzando en 0 hasta engancharlo al siguiente
//       ⇈ currect es el puntero, (current = actual), que siempre comienza con el head
  if(!current){
    this.head = node;  // en este caso, this.head que vale null, ahora vale un nuevo nodo
                       // que tiene un nuevo valor y nuevo null(o gancho) {valor: algo, next: null} 
                       // y este next es del nodo, no del head ------------------------- ⇈  
    return node;
  }        
    else {//{head: node{value: 'este es el primer nodo', next: null }}
    //            ⇊ → → este current.next esta en → ⇈
      while(current.next){   /* este current.next hace referencia al current = this.head   */
                                      /* ya pisado por el this.head = node dentro del if(!current)  */
       current = current.next;       /* aqui el current avanza al siguente .next como el cd en consola */
      }
    
      current.next = node; // este current.next que es el ultimo se le agrega otro nodo
      this._length++;
    }}

/*- remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo */
/*  nodo y de una lista vacía)                                                                                                */
//console.log(nuevaLista.head)
LinkedList.prototype.remove = function() {
  if(!this.head){ return null}
  let current = this.head;
 // let contador = 0;
  
  //console.log(current);
  
  if(!current.next){
    let ultimo = this.head.value;
    this.head = null;
    return ultimo;
  }

  while(current.next.next) current = current.next   // esto hace que se fije 2 lugares adelante, para quedarse siempre antes del ultimo
                                                    // nodo, de esa forma poder borrarlo y no tener que regresar

  let ultimo = current.next.value;
  current.next = null
  return ultimo;
  
}




/*  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un   */
/*    callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo    */
/*    valor, al ser pasado como parámetro del callback, retorne true.                                                        */

LinkedList.prototype.search = function(arg) { // porque rayos no funciona con funcion flecha
  let current = this.head;

  while(current){
    if(typeof arg === 'function'){
      if(arg(current.value)) return current.value
      }
      else {
        if(current.value === arg) return current.value
      }
    
    current = current.next;
  }
  return null
}



 let nuevaLista = new LinkedList();  // esto crea una lista en nuevaLista
// // crear una nueva lista se ve asi, en este punto nuevaLista = {head: null}
 nuevaLista.add('primer nodo');
// //            |_________________________|⇉ esto es lo que se le pasa por parametro al metodo .add
// // en este punto nuevaLista = {head: Node{ value: 'esta es el primer nodo', next: null } }

//  nuevaLista.add('segundo nodo');
 console.log(nuevaLista, this._length)
// // console.log(nuevaLista)
//  nuevaLista.add('tercer nodo'); 
// // console.log(nuevaLista);
// // console.log(nuevaLista._length); 
// // //nuevaLista.remove()
// // console.log(nuevaLista)
// // //console.log(this.head.value)
// // nuevaLista.add('cuarto nodo');
// // nuevaLista.add('quinto nodo');



// //nuevaLista.remove();
// console.log(nuevaLista)
// // let array = "San cristobal !@#$%^&*("
// // for (let i = 0; i < array.length; i++) {
  
// //   console.log(array.charCodeAt(i))
  
// // }{}


















/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles 
  para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio 
  adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código 
   numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total
   por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena
   todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la
 tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket 
 específico (determinado al hashear la clave)
*/
function HashTable(value) { 
   this.buckets = [];
   this.numBuckets = 35;
   this.numBuckets2 = value;
  }

HashTable.prototype.hash = function(key) {
  let hash = 0;   // se inicia un contador
  for (let i = 0; i < key.length; i++) {  //con el key.length se recorre cada caracter de la palabra 
    hash += key.charCodeAt(i);  //charCodeAt(i) devuelve cada valor numerico en ascii de cada letra/simbolo y se suma al hash 
  }
  return hash % this.numBuckets; // esto devuelve el modulo del hash sobre numBuckets
};
/* - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena*/
/*   todo el conjunto en el bucket correcto.*/
HashTable.prototype.set = function(key, value){
  if(typeof key !== 'string'){ throw TypeError('Keys must be strings')}
  let indice = this.hash(key) // aqui se hashea el parametro key para saber la posicion del bucket y agregarlo a una variable

  if(!this.buckets[indice]){    // esto se fija si ya existe un un hash
    this.buckets[indice] = {};  // si no existe, esto agrega un objeto a la posicion del arreglo
  }
  // en caso de que este hasheado, se salta el if, y va directamente a agregar otra propiedad con el mismo key: value
//|-------------------| →→ accede al bucket en la posicion del indice
   this.buckets[indice][key] = value;
//                     |____________| →→ esto crea una propiedad nueva en el mismo objeto con key: value
}
// - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.

HashTable.prototype.get = function(key){
  let indice = this.hash(key);
  return this.buckets[indice][key]
}
//  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

HashTable.prototype.hasKey = function(key){
  let indice = this.hash(key);
  if(this.buckets[indice][key]) return true
  else return false;
//metodo de Daiana ⇊⇊⇊⇊⇊⇊
// let index - this.hash(key)
// return !!this.buckets[index][key] →→→ sin los !!, retorna el valor, los !! fuerzan a retornar un booleano
}


//console.log(nuevoHash.hash('this is a key'))
// HashTable.prototype.get = function(key) {
//   const index = this.hash(key);
//   if (this.buckets[index] && this.buckets[index][key]) {
//     return this.buckets[index][key];
//   }
//   return null;
// };

// HashTable.prototype.hasKey = function(key) {
//   const index = this.hash(key);
//   if (this.buckets[index] && this.buckets[index][key]) {
//     return true;
//   }
//   return false;
// };

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
