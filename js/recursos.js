// Abre una ventana para guardar nuestro arte en un archivo pixel-art.png
function guardarPixelArt() {
  html2canvas($("#grilla-pixeles") , {
    onrendered: function(canvas) {
      theCanvas = canvas;
      canvas.toBlob(function(blob) {
        saveAs(blob, "pixel-art.png");
      });
    }
  });
}


// Carga a un superheroe predefinido
function cargarSuperheroe(superheroe) {
  var $pixeles = $("#grilla-pixeles div");
  for (var i = 0; i < superheroe.length; i++) {
    $pixeles[i].style.backgroundColor = superheroe[i];
  }
}
var imgSupers = document.querySelector(".imgs");
imgSupers.addEventListener("click", cargarImagen);
function cargarImagen(e){
  cargarSuperheroe(eval(e.target.id));
}

//paso 3 - parte 4
var guardar = document.getElementById("guardar");
guardar.addEventListener("click", guardarObra);
function guardarObra(e){
  guardarPixelArt(eval(e.target.id));
}
