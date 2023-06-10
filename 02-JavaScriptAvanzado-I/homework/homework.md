# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
      x = 1; // esto se toma como variable global
var a = 5;
var b = 10;

var c = function (a, b, c) {     //(8, 9, 10)

   var x = 10;
   console.log(x);      // 10    // sale primero
   console.log(a);      // 8
   var f = function (a, b, c) { // (8, 9, 10)
      b = a;
      console.log(b);  //  8
      b = c;   // b = 10
      var x = 5;
   };
   f(a, b, c);    //(8, 9, 10)
   console.log(b); // 9

};

c(8, 9, 10);

   console.log(b);      // 10

   console.log(x);      // 1
```

//////////////////////////////////////////////////////////////////


```javascript

   console.log(bar);    // undefine

   console.log(baz);    // error?

foo();

   function foo() {
      console.log('Hola!');
   }

   var bar = 1;

   var messi = 10;

   // var bar, el valor de 1 no aplica a hosting

   baz = 2;

```

////////////////////////////////////////////////////////////////////


```javascript
   var instructor = 'Tony';
   if (true) {
      var instructor = 'Franco';    // el var puede redifinir
      console.log(instructor); // esto imprime 'franco'
   }
         console.log(instructor); // esto imprime 'franco'
```

////////////////////////////////////////////////////////////////////


```javascript

   var instructor = 'Tony';
   console.log(instructor); // esto imprime Tony

( function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor); // imprime 'franco'
   }
} ) ();

console.log(instructor); //imprime 'tony'
```
///////////////////////////////////////////////////////////////////

```javascript
   var instructor = 'Tony';

   let pm = 'Franco';

   if (true) {

      var instructor = 'The Flash';

      let pm = 'Reverse Flash';
      
      console.log(instructor); // 'the flash'

      console.log(pm);  // 'reverse flash'
}

console.log(instructor);   // 'The flash'

console.log(pm);  // 'franco'

```
//////////////////////////////////////////////////////////////////
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
// lo unico que concatena es el simbolo de +

6 / "3"     // 2  
"2" * "3"   // 6  
4 + 5 + "px" //  9
"$" + 4 + 5 // $45
"4" - 2  // 2
"4px" - 2 // NaN
7 / 0 // infinity ''esto tendriamos que preguntar porque infinity''
{} [0]  // undefine // pero en navegador primero toma el bloque de código vacio y después el array, esta es la forma correcta
parseInt("9")    // 9, parseInt devuelve un valor entero ya sea string o decimal
5 && 2      // 2    // && AND, por defecto devuelve el ultimo valor
2 && 5      // 5    // por defecto devuelve el ultimo valor
5 || 1      // 5     // preguntar false null etc
0 || 5      // 0
// 0 || 5 da 5
// 4 || 5 da 4
// 10 || 5 da 10
 // precedencia es multiplicacion division suma y resta
[3]+[3]-[10] // 23      // el primer signo de mas concatena los arreglos y el menos lo convierte en numero de nuevo

3>2>1    // false // siempre corre de izquierda a derecha
         // primero se resuelve 3>2 da true, true == 1, entonces 1>1 es false

3<2<1   // true // porque rayos da true?

/////////////////////////////////////////////////////////////////////////////

      []  ==  ![]; // true // capaz este funcionando como un OR
                  // preguntar porque rayos da true

      // porque el 0 lo toma como false a veces y a veces como true
      //    ![] ==  ![] //
      //   false == false

['saludo', 'nombre'] = // preguntar si o si
/////////////////////////////////////////////////////////////////////////////
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript 

function test() {
      
    var a = 1;         
   console.log(a);     // undefine
   console.log(foo()); // imprime 2

   var a = 1;      // el hosting solo aplica a la variable declara y no al valor asignado
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript

var snack = 'Meow Mix';

function getFood(food) {      //al recibir un false, el if hereda el false y cierra el resto del codigo saliendo
                              // de la funcion
   
   if (food) {
      var snack = 'Friskies';
      return snack;
   }

   return snack;     // este no sirve para nada 
}

getFood(false);
```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript

var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname()); // esto imprimiria aurelio de la rosa, porque la funcion getFullName funciona
                                       // dentro del contexto de prop

var test = obj.prop.getFullname;

console.log(test()); // esto imprimiria undefine porque el this es solo del contexto test
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript

function printing() {

   console.log(1);      // este 

   setTimeout(function () {
         console.log(2);
   }, 1000);
   setTimeout(function () {
         console.log(3);
   }, 0);
         console.log(4);
}

printing();
```

</br >

---

## **✅ FEEDBACK**

### Usa este [**formulario**](https://docs.google.com/forms/d/e/1FAIpQLSe1MybH_Y-xcp1RP0jKPLndLdJYg8cwyHkSb9MwSrEjoxyzWg/viewform) para reportar tus observaciones de mejora o errores. Tu feedback es muy importante para seguir mejorando el modelo educativo.
