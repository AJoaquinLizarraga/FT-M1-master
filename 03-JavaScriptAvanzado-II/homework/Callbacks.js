

function hacerAlgo(hacerOtraCosa){        //esta funcion recibe como parametro otra funcion


  hacerOtraCosa();      // esta linea permite que el parametro llame a la funcion
}

function loUltimo(){      // funcion con un cosole.log
  console.log('El callback fue llamado');
}

function sumatoria(){ // esta es otra funcion con un console.log
  console.log('25' + ' es mi edad');
}


hacerAlgo(loUltimo);    // funcion que llama a la otra otra funcion 

hacerAlgo(sumatoria);