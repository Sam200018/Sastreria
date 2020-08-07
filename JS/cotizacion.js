// getElements
const tipoDeTela = document.querySelector(".opciones");
const seOye = document.getElementsByName("envioNac")[0];
const envioInter = document.getElementsByName("envioInter")[0];
const number = document.getElementById("number");
const saco = document.getElementsByName("Saco1")[0];
const chaleco = document.getElementsByName("Chaleco2")[0];
const pantalon = document.getElementsByName("Pantalon3")[0];
const precio1 = document.getElementById("subprecio1");
const pesoMx='MXN'
const dolarUS= 'USD'

let dolar;

fetch("https://api.exchangeratesapi.io/latest?base=USD&symbols=MXN")/*consumimos una API para saber el precio del dolar USD */
.then(respuesta=>respuesta.json())
.then(respuestaDecodificada=>{
  dolar= respuestaDecodificada.rates.MXN;
  const fechaActualizada= respuestaDecodificada.date;
  console.log(fechaActualizada);
    console.log(dolar);
  })


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
  

// funciones dinámicas para poder hacer los cambios en el momento
tipoDeTela.addEventListener("change", (event) => {
  const resultado = document.getElementById("precioTela");
  let local = event.target.value;
  let conversion=parseInt(local)
  if(seOye.checked===true){
    resultado.innerText = `$${local} ${pesoMx}`;
    localStorage.setItem("precioTela", parseInt(event.target.value, 10));
  }else if(envioInter.checked===true){
    conversion=conversion/dolar;
    resultado.innerText= `$${conversion.toFixed(2)} ${dolarUS}`;
    localStorage.setItem("precioTela",conversion.toFixed(2));
    console.log(conversion)
  }


});

number.onchange = Ntrajes;
function Ntrajes() {
  if (tipoDeTela.value === "0" && number.value <= "0") {
    alert("Selecciona una opcion de tela valido");
  } else if (tipoDeTela.value === "0" && number.value >= "0") {
    alert("Seleciona un tipo de tela primero");
  } else {
    let tela = localStorage.getItem("precioTela");
    let trajes = parseInt(tela, 10) * number.value;
    let suits = document.getElementById("trajesXN");
    suits.innerText = `$${trajes}`;
    localStorage.setItem("nTrajes", trajes);
  }
}


saco.onchange = precio; //escuchador de eventos de las piezas del saco
function precio() {
  let resultado2 = document.getElementById("saco");
  if (saco.checked === true) {
    resultado2.innerText = "✓";
    localStorage.setItem("saco", 0);
  } else {
    resultado2.innerText = "x  -$200";
    localStorage.setItem("saco", -200);
  }
}

chaleco.onchange = precioCH;
function precioCH() {
  let resultado2 = document.getElementById("chaleco");
  if (chaleco.checked === true) {
    resultado2.innerText = "✓";
    localStorage.setItem("chaleco", 0);
  } else {
    resultado2.innerText = "x  -$200";
    localStorage.setItem("chaleco", -200);
  }
}

pantalon.onchange = precioP;
function precioP() {
  let resultado3 = document.getElementById("pantalon");
  if (pantalon.checked === true) {
    resultado3.innerText = "✓";
    localStorage.setItem("pantalon", 0);
  } else {
    resultado3.innerText = "x  -$200";
    localStorage.setItem("pantalon", -200);
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
