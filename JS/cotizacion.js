// getElements
const tipoDeTela = document.querySelector(".opciones");
const seOye = document.getElementsByName("envioNac")[0];
const envioInter = document.getElementsByName("envioInter")[0];
const number = document.getElementById("number");
const saco = document.getElementsByName("Saco1")[0];
const chaleco = document.getElementsByName("Chaleco2")[0];
const pantalon = document.getElementsByName("Pantalon3")[0];

//detalles sobre el diseño del traje
const precio1 = document.getElementById("subprecio1");
const bordado = document.getElementsByName("Bordado")[0];
const diseñoB = document.getElementById("Diseño");
const solapaB = document.getElementById("Solapa");
const hombrosB = document.getElementById("Hombros");
const espaldaB = document.getElementById("Espalda");
const mangasB = document.getElementById("Mangas");
const brochesB = document.getElementById("Broches");
const brochesChalB = document.getElementById("BrochesChaleco");
const bolsasChB = document.getElementById("BolsasChicas");
const bolsasGB = document.getElementById("BolsasGrandes");
const pantalonB = document.getElementById("Pantalon");
const curvaB = document.getElementById("CurvaPantalon");

//lugares de ocupación del diseño
const greca = document.getElementsByName("Greca")[0];
const diseñoG = document.getElementById("DiseñoG");
const solapaG = document.getElementById("SolapaG");
const hombroG = document.getElementById("HombrosG");
const espaldaG = document.getElementById("EspaldaG");
const mangasG = document.getElementById("MangasG")
const brochesG = document.getElementById("BrochesG");
const brochesChalG = document.getElementById("BrochesChalecoG");
const bolsasChG = document.getElementById("BolsasChicasG");
const bolsasGG = document.getElementById("BolsasGrandesG");
const pantalonG = document.getElementById("PantalonG");
const cuervaG = document.getElementById("CurvaPantalonG");



const pesoMx = "MXN";
const dolarUS = "USD";

let dolar;

fetch(
  "https://api.exchangeratesapi.io/latest?base=USD&symbols=MXN"
) /*consumimos una API para saber el precio del dolar USD */
  .then((respuesta) => respuesta.json())
  .then((respuestaDecodificada) => {
    dolar = respuestaDecodificada.rates.MXN;
    const fechaActualizada = respuestaDecodificada.date;
    console.log(fechaActualizada);
    console.log(dolar);
  });

seOye.onchange = MXN;
function MXN() {
  if (seOye.checked === true) {
    envioInter.classList.add("ocultar");


    tipoDeTela.addEventListener("change", mostarTela);
    saco.onchange = precio; //escuchador de eventos de las piezas del saco
    chaleco.onchange = precioCH;
    pantalon.onchange = precioP;
  } else if (seOye.checked === false) {
    envioInter.classList.remove("ocultar");
    location.reload(true);
  }
}

envioInter.onchange = USD;
function USD() {
  if (envioInter.checked === true) {
    seOye.classList.add("ocultar");


    tipoDeTela.addEventListener("change", mostarTela);
    saco.onchange= precioU;
    chaleco.onchange = precioCHU;
    pantalon.onchange = precioPU;
  } else if (envioInter.checked === false) {
    seOye.classList.remove("ocultar");
    location.reload(true);
  }
}

// funciones dinámicas para poder hacer los cambios en el momento
function mostarTela(event) {
  const resultado = document.getElementById("precioTela");
  let local = event.target.value;
  let conversion = parseInt(local);
  if (seOye.checked === true) {
    resultado.innerText = `$${local} ${pesoMx}`;
    localStorage.setItem("precioTela", parseInt(event.target.value, 10));
  } else if (envioInter.checked === true) {
    conversion = conversion / dolar;
    resultado.innerText = `$${conversion.toFixed(2)} ${dolarUS}`;
    localStorage.setItem("precioTela", conversion.toFixed(2));
  }
}

number.onchange = Ntrajes;
function Ntrajes() {
  if (tipoDeTela.value === "0" && number.value <= "0") {
    alert("Selecciona una opcion de tela valido");
  } else if (tipoDeTela.value === "0" && number.value >= "0") {
    alert("Seleciona un tipo de tela primero");
  } else {
    let tela = localStorage.getItem("precioTela");
    let trajes = parseFloat(tela, 10) * number.value;
    let suits = document.getElementById("trajesXN");

    if (seOye.checked === true) {
      //pesos mexicanos
      suits.innerText = `$${trajes}${pesoMx}`;
      localStorage.setItem("nTrajes", trajes);
    } else if (envioInter.checked === true) {
      //dolares americanos
      trajes = trajes.toFixed(2);
      suits.innerText = `$${trajes}${dolarUS}`;
      localStorage.setItem("nTrajes", trajes);
    }
  }
}

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
function precioU(){
  let resultado2 = document.getElementById("saco");
  if(saco.checked=== true){
    resultado2.innerHTML= "✓";
    localStorage.setItem("saco",0);
  }else{
    let redu= 200/dolar;
    redu= redu.toFixed(2);
    resultado2.innerText=`X -$${redu}${dolarUS}`;
    localStorage.setItem("saco",redu);
  }
}


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
function precioCHU(){
  let resultado2 = document.getElementById("chaleco");
  if(chaleco.checked=== true){
    resultado2.innerHTML= "✓";
    localStorage.setItem("chaleco",0);
  }else{
    let redu= 200/dolar;
    redu= redu.toFixed(2);
    resultado2.innerText=`X -$${redu}${dolarUS}`;
    localStorage.setItem("chaleco",redu);
  }
}

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
function precioPU(){
  let resultado2 = document.getElementById("pantalon");
  if(pantalon.checked=== true){
    resultado2.innerHTML= "✓";
    localStorage.setItem("pantalon",0);
  }else{
    let redu= 200/dolar;
    redu= redu.toFixed(2);
    resultado2.innerText=`X -$${redu}${dolarUS}`;
    localStorage.setItem("pantalon",redu);
  }
  
}
//Lugares de ocupacion del diseño
bordado.onchange = bloq;
function bloq() {
  if (bordado.checked === true) {
    remover();
  }
  else if(bordado.checked === false){
    adding();
  }
}
greca.onchange= bloqG;
function bloqG() {
  if (greca.checked === true) {
    removerG();
  }
  else if(greca.checked === false){
    addingG();
  }
}
function remover() {
  solapaB.classList.remove("ocultar");
  hombrosB.classList.remove("ocultar");
  espaldaB.classList.remove("ocultar");
  mangasB.classList.remove("ocultar");
  brochesB.classList.remove("ocultar");
  brochesChalB.classList.remove("ocultar");
  bolsasChB.classList.remove("ocultar");
  bolsasGB.classList.remove("ocultar");
  pantalonB.classList.remove("ocultar");
  curvaB.classList.remove("ocultar");
}
function adding(){
  solapaB.classList.add("ocultar");
  hombrosB.classList.add("ocultar");
  espaldaB.classList.add("ocultar");
  mangasB.classList.add("ocultar");
  brochesB.classList.add("ocultar");
  brochesChalB.classList.add("ocultar");
  bolsasChB.classList.add("ocultar");
  bolsasGB.classList.add("ocultar");
  pantalonB.classList.add("ocultar");
  curvaB.classList.add("ocultar");
}