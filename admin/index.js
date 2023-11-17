import PLB from '../js/tst.js';
const analizador = new PLB();
var db = analizador.db
var cacon = document.querySelector('lista-preguntas-container')
function Mostrar(){
    var transaction = bd.transaction(["pregntasyrespuestas"]);
    var almacen = transaction.objectStore("pregntasyrespuestas");
    var p = almacen.openCursor()
    p.addEventListener("success",mostrarinfo)
}
function mostrarinfo(evento){
    var p = evento.target.result;
    if(p){
        cacon.innerHTML= "jalo we"
    }
}