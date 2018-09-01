var mouseSi = false;
var paleta = document.getElementById("paleta");
var grillaPixeles = document.getElementById("grilla-pixeles");
var indicadorColor = document.getElementById('indicador-de-color');
var borrarTodo = document.getElementById("borrar");
$("#grilla-pixeles").hide();
$("#grilla-pixeles").fadeIn(2000);

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
// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

//paso 3 seleccionar color en la paleta de colores y que se guarde en colorPersonalizado
colorPersonalizado.addEventListener('change',
 (function() {
   // Se guarda el color de la rueda en colorActual
   colorActual = colorPersonalizado.value;
   // Completar para que cambie el indicador-de-color al colorActual
   indicadorColor.style.backgroundColor= colorActual;
 })
);


// Paso 2 - parte 1
function paletaColores() {
  for (var i=0 ; i<nombreColores.length; i++) {
    var divColores = document.createElement("div");
    divColores.className="color-paleta";
    divColores.style.backgroundColor=nombreColores[i];
    paleta.appendChild(divColores);
  }
}
paletaColores();
//Paso 3 - parte 1
function gPixeles(){
  for (var i=0; i<1750; i++){
    var divPixel = document.createElement("div");
    grillaPixeles.appendChild(divPixel);
  }
}
gPixeles();
//paso 1 - parte 2
paleta.addEventListener("click",cambiarDeColor);
function cambiarDeColor(e){
  indicadorColor.style.backgroundColor = e.target.style.backgroundColor;
}

//paso 2 - parte
  grillaPixeles.addEventListener("click",pintarEnDiv);
  function pintarEnDiv(e){
      e.target.style.backgroundColor = indicadorColor.style.backgroundColor;
  }
  pintar();


//paso 4 - parte 2
function haciendoClick(){
grillaPixeles.addEventListener('mousedown',function(){
  mouseSi = true;
  console.log("pinto");
})
grillaPixeles.addEventListener('mouseup',function(){
  mouseSi = false;
  console.log("no pinto");
})};
haciendoClick();

//  paso 5 - parte 2
    grillaPixeles.addEventListener("mouseover",pintar);
      function pintar(e){
      if (mouseSi){
      pintarEnDiv(e);
    }
  }

borrarTodo.addEventListener("click", borrarDivs)
function borrarDivs(e){
  $("#grilla-pixeles div").animate({"background-color":"white"},1000);
};
borrarDivs();
