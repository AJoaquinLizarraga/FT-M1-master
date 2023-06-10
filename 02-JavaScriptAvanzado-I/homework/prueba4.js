var instructor = 'Tony';
   console.log(instructor); // esto imprime Tony

( function () {
   if (true) {
      //var instructor = 'Franco';
      let instructor = 'Franco';
      // instructor = 'Franco';
      console.log(instructor); // imprime 'franco'
   }
} ) ();

console.log(instructor); //imprime 'tony'