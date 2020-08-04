
const cotizar = () => {
  let tipoDeTela = document.getElementById("telas").value;
  let number = document.getElementById("number").value;
  let envio = document.getElementsByName("envioNac")[0];
  let envioInter = document.getElementsByName("envioInter")[0];
  let saco = document.getElementsByName("Saco1")[0].checked;
  let chaleco = document.getElementsByName("Chaleco2")[0].checked;
  let pantalon = document.getElementsByName("Pantalon3")[0].checked;

  var precio;
  if (tipoDeTela === "1") {
    precio = 2300;
  } else if (tipoDeTela === "2") {
    precio = 4400;
  } else if (tipoDeTela === "3") {
    precio = 3300;
  } else if (tipoDeTela === "4") {
    precio = 3600;
  } else if (tipoDeTela === "5") {
    precio = 2900;
  } else if (tipoDeTela === "6") {
    precio = 3300;
  } else if (tipoDeTela === "7") {
    precio = 3400;
  }
  console.log(precio);
  let Ntrajes=number*precio
  document.getElementById(
    "precioTela"
  ).innerHTML = `<p>$ ${precio}</p>`; /*Así estariamos regresando los precios en medio de equitetas */

  document.getElementById("trajesXN").innerHTML = `<p>$ ${Ntrajes}</p>`;

  if((!envioInter.classList.contains("ocultar") && envio.checked!=true)){
    envioInter.classList.remove("ocultar")
    console.log("no se oculta")
  }
  else if(envioInter.classList.contains("ocultar")){
    envioInter.classList.remove("ocultar")
  }
  else{
    envioInter.classList.add("ocultar")
    
  }
  
};

// var input = document.getElementsByName("telas");
// console.log(input.selectedIndex)
// document.getElementById("div").outerHTML = GRANO_LAVABLE;
// coviene más el outerHTML por que hacemos que se ponga los elementos que queremos en el html sin más problemas listo
// (function(){
//   "use strict";

//   document.addEventListener('DOMContentLoaded',function(){
//     console.log('listo')
//     const TRICOTINA_ECONOMICA = 2900,
//     TOP_LISO = 3300,
//     TOP_166 = 3400,
//     TRICOTINA_ORIGINAL = 3600,
//     GRANO = 4400,
//     GRANO_LAVABLE = 3600,
//     HECHURA = 2300;

//     let tipoDeTela= document.getElementById("telas").value;
//     console.log(tipoDeTela)

//   });//Dom Content loaded
// })();
