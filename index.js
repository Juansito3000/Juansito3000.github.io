document.getElementById("myform").onsubmit = actualizarRecordatorio;
                    //0                           //1   //2  //3
                    //llave1                      //llave2
var recordatorio = "primer valor de recordatorio";
recordatorio = "ultimo valor de recordatorio";
actualizarRecordatorio(recordatorio);

function actualizarRecordatorio(param) {
  //var param
  const sp = new URLSearchParams(window.location.search);
  recordatorio = sp.get('zombieName'); // price_descending
  console.log(recordatorio);
  //la persona a ingresado un valor de texto, hay 2 casos principales,
  //ingreso el nombre de un zombie valido
    //vamos a actualizar la pagina web para mostrar ese zombie
  //no ingreso el nombre de un zombie valido
    //nada
  switch(recordatorio){
    case "Charger":
      document.getElementById("titulo").innerHTML = "El Charger"
      document.getElementById("")
  }
}

