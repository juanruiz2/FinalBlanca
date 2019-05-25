var googleUrl = "https://www.google.com.mx/search?source=hp&ei=kUznXLKICJKItQW9lKK4BA&q={0}&oq=&"

function redirectGoogle() {

var SearchGoogle = document.getElementById("Search").value;
var busqueda = googleUrl.replace("{0}",SearchGoogle);
console.log(busqueda);
window.open(busqueda);
document.getElementById("Search").value = "";
}