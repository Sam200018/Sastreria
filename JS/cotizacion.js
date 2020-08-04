// getElements
const tipoDeTela = document.querySelector(".opciones");
let seOye = document.getElementsByName("envioNac")[0];
let envioInter = document.getElementsByName("envioInter")[0];
let number = document.getElementById("number");
let saco = document.getElementsByName("Saco1")[0];
let chaleco = document.getElementsByName("Chaleco2")[0];
let pantalon = document.getElementsByName("Pantalon3")[0];





// funciones dinámicas para poder hacer los cambios en el momento
tipoDeTela.addEventListener("change", (event) => {
  const resultado = document.getElementById("precioTela");
  let local=event.target.value
  resultado.innerText = `$${local}`;
  localStorage.setItem("precioTela",parseInt(event.target.value, 10))

});

number.onchange=Ntrajes;
function Ntrajes(){
  let tela=localStorage.getItem("precioTela");
  let trajes=parseInt(tela,10)*number.value;
  let suits=document.getElementById("trajesXN");
  suits.innerText=`$${trajes}`
  localStorage.setItem("nTrajes",trajes)
}



seOye.onchange = MXN;
function MXN() {
  if (seOye.checked === true) {
    envioInter.classList.add("ocultar");
  } else if (seOye.checked === false) {
    envioInter.classList.remove("ocultar");
  }
}

envioInter.onchange = USD;
function USD() {
  if (envioInter.checked === true) {
    seOye.classList.add("ocultar");
  } else if (envioInter.checked === false) {
    seOye.classList.remove("ocultar");
  }
}

saco.onchange=precio;
function precio(){
  if(saco.checked===true){
    let resultado= document.getElementById("saco");
    resultado.innerText="✓"
  }else{
    let resultado= document.getElementById("saco");
    resultado.innerText="x  -$200"
    localStorage.setItem("saco",-200)
  }
}






// const cotizar = () => {
//   let tipoDeTela = document.getElementById("telas").value;
//   let envio = document.getElementsByName("envioNac")[0];
//   let envioInter = document.getElementsByName("envioInter")[0];

//   var precio;
//   if (tipoDeTela === "1") {
//     precio = 2300;
//   } else if (tipoDeTela === "2") {
//     precio = 4400;
//   } else if (tipoDeTela === "3") {
//     precio = 3300;
//   } else if (tipoDeTela === "4") {
//     precio = 3600;
//   } else if (tipoDeTela === "5") {
//     precio = 2900;
//   } else if (tipoDeTela === "6") {
//     precio = 3300;
//   } else if (tipoDeTela === "7") {
//     precio = 3400;
//   }
//   console.log(precio);
//   let Ntrajes = number * precio;
//   document.getElementById(
//     "precioTela"
//   ).innerHTML = `<p>$ ${precio}</p>`; /*Así estariamos regresando los precios en medio de equitetas */

//   document.getElementById("trajesXN").innerHTML = `<p>$ ${Ntrajes}</p>`;

// };

// // var input = document.getElementsByName("telas");
// // console.log(input.selectedIndex)
// // document.getElementById("div").outerHTML = GRANO_LAVABLE;
// // coviene más el outerHTML por que hacemos que se ponga los elementos que queremos en el html sin más problemas listo
// // (function(){
// //   "use strict";

// //   document.addEventListener('DOMContentLoaded',function(){
// //     console.log('listo')
// //     const TRICOTINA_ECONOMICA = 2900,
// //     TOP_LISO = 3300,
// //     TOP_166 = 3400,
// //     TRICOTINA_ORIGINAL = 3600,
// //     GRANO = 4400,
// //     GRANO_LAVABLE = 3600,
// //     HECHURA = 2300;

// //     let tipoDeTela= document.getElementById("telas").value;
// //     console.log(tipoDeTela)

// //   });//Dom Content loaded
// // })();
