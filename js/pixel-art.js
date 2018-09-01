var nombreColores = ['White', 'LightYellow',
'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
'LightGreen', 'PaleGreen', 'PaleTurquoise',
'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
'BlueViolet', 'DarkViolet', 'DarkOrchid',
'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

var mouseSi = false;

// Paso 1 Parte 1
var paleta = document.getElementById("paleta");
var grillaPixeles = document.getElementById("grilla-pixeles");
// Paso 2 - parte 1
function paletaColores() {
  for (var i=0 ; i<nombreColores.length; i++) {
    var divColores = document.createElement("div");
    divColores.className="color-paleta";
    divColores.style.backgroundColor=nombreColores[i];
    paleta.appendChild(divColores);
  }
}
//Paso 3 - parte 1
function gPixeles(){
  for (var i=0; i<1750; i++){
    var divPixel = document.createElement("div");
    grillaPixeles.appendChild(divPixel);
  }
}
//paso 1 - parte 2
var colorSeleccionado = document.getElementById("indicador-de-color");
paleta.addEventListener("click",seleccionarColor);
function seleccionarColor(e){
  colorSeleccionado.style.backgroundColor = e.target.style.backgroundColor;
}
//paso 2 - parte 2
function pintar(){
  grillaPixeles.addEventListener("click",pintar);
  function pintar(e){
 e.target.style.backgroundColor = colorSeleccionado.style.backgroundColor;
  }
}
// paso 3 - parte
/*function  colPer(){
var colorPersonalizado = document.getElementById('color-personalizado');
  colorPersonalizado.addEventListener('change',(function(){
//  Se guarda el color de la rueda en colorActual
 colorActual = colorPersonalizado.value;
//  Completar para que cambie el indicador-de-color al colorActual
  colorSeleccionado.style.backgroundColor = colorPersonalizado.value;
}))};*/

// colorSeleccionado.addEventListener("change", function(){
//   colorSeleccionado = colorPersonalizado.value;
//   //  Se guarda el color de la rueda en colorActual
//  colorSeleccionado.style.backgroundColor = colorActual;
// });

  

// //paso 4 - parte 2
function haciendoClick(){
  grillaPixeles.addEventListener('mousedown',function(){
    mouseSi = true;
    console.log("pinto");
  })
  grillaPixeles.addEventListener('mouseup',function(){
    mouseSi = false;
    console.log("no pinto");
  })};

  //  paso 5 - parte 2
  function pintarEnMov(){
    grillaPixeles.addEventListener("mouseover",pintar);
    function pintar(e){
      if (mouseSi){
        var enBlanco =  document.querySelector(".cursor-personalizado").style.backgroundColor;
        e.target.style.backgroundColor = enBlanco;
      }
    }
  }

  // paso 1 - parte 3
var botonBorrar = document.getElementById("borrar");
botonBorrar.addEventListener("click", function(){
  $("#grilla-pixeles div").animate({"background-color":"white"},2000);
});

// var borrador = document.getElementById("goma");
// grillaPixeles.addEventListener("click", function(){
//   console.log("borro");
//     e.target.style.backgroundColor = borrador.style.backgroundColor;
//   }





  //paso 2 - parte 3
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

  pintar();
  haciendoClick();
  pintarEnMov();
  paletaColores();
  gPixeles();
