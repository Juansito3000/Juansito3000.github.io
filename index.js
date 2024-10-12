document.getElementById("form").onsubmit = actualizarRecordatorio;
var recordatorio = "texto estatico";
recordatorio = "otra cosa";
actualizarRecordatorio(recordatorio);

function actualizarRecordatorio(param) {
  //var param
  console.log(param);
}