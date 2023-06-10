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

   /// LOGRADO PIBES