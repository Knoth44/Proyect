

//*Clase persona >----------------------------------------------------------------------------------------------------<
class infoPersona{
  constructor(nombre,apellido,edad){

      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = parseInt(edad);
      this.hora = [];
      this.datoDesayuno = [];
      this.datoAlmuerzo = [];
      this.datoMerienda = [];
      this.datoCena = [];

  }  

     verificarDatos(e){

    let a = this.datoDesayuno.filter(item => item >= 180 || item <= 80)? true : false
    let b = this.datoAlmuerzo.filter(item => item >= 180 || item <= 80)? true : false
    let c = this.datoMerienda.filter(item => item >= 180 || item <= 80)? true : false
    let d = this.datoCena.filter(item => item >= 180 || item <= 80)? true : false
         ponerDatos(a,b,c,d,e)

    }

   recorrerDesayuno() {

  let a = this.datoMerienda.filter(item => item >= 180 || item <= 80)
  let desayuno1="";
  let desayuno2="";
  let desa = document.querySelector("#desa")
  let desa1 = document.querySelector("#desa1")
  for (let i = 0; i < a.length; i++) {
    if(a[i] >= 180){ 
      desayuno1 += ` ${a[i]} `
   } else if (a[i] <= 80){ 
      desayuno2 += ` ${a[i]} `
      } 
  }

  const r = desayuno1.length > 0 ? true : false
  const b = desayuno2.length > 0 ? true : false
  r? desa.innerHTML = (`Desayuno : ${desayuno1}`):console.log('');
  b? desa1.innerHTML = (`Desayuno : ${desayuno2}`):console.log('');

 }

 recorrerAlmuerzo() {

  let a2 = this.datoAlmuerzo.filter(item => item >= 180 || item <= 80)
  let almuerzo1="";
  let almuerzo2="";
  let almu = document.querySelector("#almu")
  let almu1 = document.querySelector("#almu1")
  for (let i = 0; i < a2.length; i++) {
    if(a2[i] >= 180){ 
      almuerzo1 += ` ${a2[i]} `
  } else if (a2[i] <= 80){ 
      almuerzo2 += ` ${a2[i]} `
   }
  }
  const a = almuerzo1.length > 0 ? true : false
  const b = almuerzo2.length > 0 ? true : false
  a? almu.innerHTML = (`Almuerzo : ${almuerzo1}`):console.log('');
  b? almu1.innerHTML = (`Almuerzo : ${almuerzo2}`):console.log('');

 }

 recorrerMerienda() {

  let a3 = this.datoMerienda.filter(item => item >= 180 || item <= 80)
  let merienda1="";
  let merienda2="";
  let mer = document.querySelector("#mer")
  let mer1 = document.querySelector("#mer1")
  for (let i = 0; i < a3.length; i++) {
      if(a3[i] >= 180){ 
        merienda1 += ` ${a3[i]} `
    } else if (a3[i] <= 80){ 
       merienda2 += ` ${a3[i]} `
    }
    }
    const a = merienda1.length > 0? true: false
    const b = merienda2.length > 0 ? true : false
    a? mer.innerHTML = (`Merienda : ${merienda1}`):console.log('');
    b? mer1.innerHTML = (`Merienda  : ${merienda2}`):console.log('');

 }

 recorrerCena() {

  let a4 = this.datoCena.filter(item => item >= 180 || item <= 80)
  let cena1 = "";
  let cena2 = "";
  let cen = document.querySelector("#cen")
  let cen1 = document.querySelector("#cen1")

  for (let i = 0; i < a4.length; i++) {
     if(a4[i] >= 180){ 
      cena1 += ` ${a4[i]} `
    } else if (a4[i] <= 80){ 
      cena2 += ` ${a4[i]} `
    } 
  }
  const a = cena1.length > 0 ? true : false
  const b = cena2.length > 0 ? true : false
  a? cen.innerHTML = (`Cena : ${cena1}`):console.log('');
  b? cen1.innerHTML = (`Cena : ${cena2}`):console.log('');

 } 

  recorrerClase(a,b,c,d){
  for (let i = 0; i < a.length; i++) {
      this.datoDesayuno.push(a[i].value)
  }
  for (let i = 0; i < b.length; i++) {
      this.datoAlmuerzo.push(b[i].value)
  }  
  for (let i = 0; i < c.length; i++) {
      this.datoMerienda.push(c[i].value)
  }  
  for (let i = 0; i < d.length; i++) {
      this.datoCena.push(d[i].value)
  }
  successPersona(this.nombre,this.apellido)      
}

}

//*Funciones>----------------------------------------------------------------------------------------------------<

//DarkMod>-------------------------------------------------------------------------------------------------------<
function modeDiv(a) {

  if(localStorage.getItem('theme') == 'dark'){
    a.className = 'lightMode'
    localStorage.setItem('theme','light')
    } else {
      a.className = 'darkMode'
      localStorage.setItem('theme','dark')
    }

}
//Grafico--------------------------------------------------------------------------------------------------------<
  
function crearGrafico(a,b,c,d) {
      
const ctx = document.getElementById('myChart').getContext('2d');

totalChart(ctx,a,b,c,d)

}

function totalChart(ctx,a,b,c,d) {

new Chart(ctx, {
type: 'line',
 data: {
    labels: ['Dia 1','Dia 2','Dia 3','Dia 4','Dia 5','Dia 6','Dia 7'],
   datasets: [{ 
    label: 'Desayuno',
    borderColor:'#B47C7C',
    data: a,
    },
       {
   label: 'Almuerzo',
   borderColor:'#DAC593',
    data: b,
    },
    {
    label: 'Merienda',
    borderColor:'#93B6DA',
     data: c,
    },  
    {
    label: 'Cena',
    borderColor:'#2B3037',
    data: d,
   }]
},
option:{
 title:{
   display: true,
   text:'Analisis de la persona seleccionada',
   fontsize: 30,
   padding: 30,
   fontColor:'#996D6D'
 }
}
}); 
}

//Alertas

function error() {
Swal.fire(
'ERROR!',
'Ingresar datos!',
'error'
)}

function success() {
Swal.fire(
  'Completado!',
  'Se ingresaron todas las personas!',
  'success'
)
}

function successPersona(a,b) {
Swal.fire(
  'Completado!',
  `Se ingreso los datos a ${b},${a}`,
  'success'
)
}

function msg() {
Toastify({
  text: "Ingreso la persona con exito!",
  duration: 1000,
  gravity: "bottom",
  position: "left", 
  stopOnFocus: true,
  style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
  }
}).showToast();
}

function errorSemana() {
  Swal.fire(
    'ERROR!',
    'Elegir cuantas semanas desea analizar !',
    'error'
)}

function errorDias() {
Swal.fire(
  'ERROR!',
  'Elegir fechas !',
  'error'
)}

function msgError(){
    Toastify({
  text : "No hay persona ingresada",
  duration: 1000,
  gravity: "left",
  position: "bottom",
  style: {
    background: "linear-gradient(to right, #00b09b, #E29B9B)",
    }
    }).showToast();
}
  
//Validacion de inputs 

function ponerDatos(a,b,c,d,e){

a? e.recorrerDesayuno() : console.log("No hay valor mayor ni menor en el desayuno");
b? e.recorrerAlmuerzo() : console.log("No hay valor mayor ni menor en el almuerzo");
c? e.recorrerMerienda() : console.log("No hay valor mayor ni menor en la merienda");
d? e.recorrerCena()  : console.log("No hay valor mayor ni menor en la cena");

}


function validacionString(a){
let validacion = true;
  a = a.replace(/ /g, "")
 for (let i = 0; i < a.length; i++) {
    let a1 = a[i]; 
   validacion = ((a1 === "*") || (a1 === "+") || (a1 === "-") || (a1 === "/") || !isNaN(a1)) ? false : true
 }
   return validacion 
}

function validacionNumber(a){
let arrayx =[];  
for (let i = 0; i < a.length; i++) {
    arrayx.push += a[i]; 
   } 
let validacion = arrayx.includes(("*" ,"+" ,"-" ,"/" , isNaN()))
return validacion
}

var cantidadPersonas = [];

//*Capturar o Crear elementos desde el DOM-------------------------------------------------------->

let nombre_a = document.getElementById("nombre");

let apellido_a = document.getElementById("apellido");

let edad_a = document.getElementById("edad");

//Persona del select-------------------------------------------------------->

var formarSemanas = document.querySelector("#formarSemanas")

var selector = document.querySelector("select")

var div_todos= document.querySelector("#todos")

//Dias-------------------------------------------------------->

let dia = "";

let mes = "";

let año = "";

var mañana = document.getElementsByClassName("desayuno");

var mediodia = document.getElementsByClassName("almuerzo");

var tarde = document.getElementsByClassName("merienda");

var noche = document.getElementsByClassName("cena");

//Datos Erroneos-------------------------------------------------------->

var valorMayor = document.querySelector("#valorMayor");

var valorMenor = document.querySelector("#valorMenor");

//* Eventos 

//* >--------------------------------------------------------------Añadir Personas-----------------------------------------------------------------------<
const persona = document.querySelector("#identidad")

persona.addEventListener("click", (evt) => {     evt.preventDefault();

if((nombre_a.value.length === 0) || (apellido_a.value.length === 0) || (edad_a.value.length === 0) ){

error();

} else if ( validacionString(nombre_a.value) && validacionString(apellido_a.value) && !(validacionNumber(edad_a.value))){
 
  cantidadPersonas.push(new infoPersona(nombre_a.value,apellido_a.value,edad_a.value))

  for (let i = 0; i < cantidadPersonas.length; i++) {
    
      sessionStorage.setItem(`nombre${i+1}`,cantidadPersonas[i].nombre)
  
      sessionStorage.setItem(`apellido${i+1}`,cantidadPersonas[i].apellido)
  
      sessionStorage.setItem(`edad${i+1}`,cantidadPersonas[i].edad)

     }
     
    msg();

  } else {
     error();
  } 

  });

//*  >--------------------------------------------------------------Confirmar Personas-----------------------------------------------------------------------<


const confirmarPersonas = document.querySelector("#nomaspersonas")

confirmarPersonas.addEventListener("click",(evt)=>{    evt.preventDefault();
   
   if(cantidadPersonas.length > 0){

    let div_selecperson = document.querySelector("#personas") 

    let opciones="";

    for (let i = 0; i < cantidadPersonas.length; i++) {   

        let persona = `${cantidadPersonas[i].apellido},${cantidadPersonas[i].nombre}`;

        opciones += (`<option id="${cantidadPersonas[i].nombre}">${persona}</option>`)
  
      }

      div_selecperson.innerHTML = (`<select id="selecperson">${opciones}</select>`)

      success()

  } else {
   
    error()

  }

})

//* >--------------------------------------------------------------Generar Semanas-----------------------------------------------------------------------<

const cuantasSemanas = document.querySelector("#btnSemanas")


cuantasSemanas.addEventListener("click",(evt)=>{    evt.preventDefault();

      const numeroSemana = document.querySelector("#semana")

      const dataDays = document.querySelector("#dias")

  if(numeroSemana.value >= 1 && numeroSemana.value <= 10) {
  
      if(dataDays.value.length != 0){
        
        let dats = dataDays.value;
        
        for (let i = 0; i < dats.length; i+=1) {
          if (i == 8 || i == 9 ){
             dia += dats[i];
          } else if(i == 5 || i == 6){
              mes += dats[i];
          } else if (i == 0 || i == 1 || i == 2 || i == 3){
              año += dats[i];
          }
        }

        dia = parseInt(dia);
        mes = parseInt(mes);
        año = parseInt(año);
        

      let num = parseInt(numeroSemana.value)
      
      let semana = "";

       for (let j = 0; j < num*7 ; j++) {
         
       semana += `<lb>${dia}/${mes}/${año}</lb><input type="number" class="desayuno" placeholder="Valor desayuno">
                                        <input type="number" class="almuerzo" placeholder="Valor almuerzo">
                                        <input type="number" class="merienda" placeholder="Valor merienda">
                                        <input type="number" class="cena" placeholder="Valor cena"><br> `
       if (( dia  >= 31 || (mes == 1 && mes == 5 && mes == 7 && mes == 8 && mes == 10)) || ( dia  >= 28 || mes == 2 ) || ( dia  >= 30 || (mes == 4 && mes == 6 && mes == 9 && mes == 11)) ){
             dia  = 1;
        mes += 1;
       } else {
        dia += 1
      }
    }

    formarSemanas.innerHTML = semana

  } else {

    errorDias();
  }
}  else {
  errorSemana();
}
})
  
//* >--------------------------------------------------------------Meter datos a personas-----------------------------------------------------------------------<



const confirmar = document.querySelector("#confirmar")

confirmar.addEventListener('click', (evt)=>{  evt.preventDefault()

  const selecperson = document.querySelector("#selecperson")

  if( cantidadPersonas.length > 0 ){

  for (let i = 0; i < cantidadPersonas.length; i++) {

  let afirmar = (selecperson.value == `${cantidadPersonas[i].apellido},${cantidadPersonas[i].nombre}`)? true : false 

   if (afirmar) {cantidadPersonas[i].recorrerClase(mañana,mediodia,tarde,noche)} 

  }

  } else {

  msgError()

  }
});


//* >-------------------------------------------------------------- Analizar datos erroneos -----------------------------------------------------------------------<

const mayor = document.querySelector("#mayor")

mayor.addEventListener('click', (evt)=>{     evt.preventDefault();
  const selecperson = document.querySelector("#selecperson")
if (cantidadPersonas.length > 0){

for (let i = 0; i < cantidadPersonas.length; i++) {
  
  let afirmar_a = (selecperson.value == `${cantidadPersonas[i].apellido},${cantidadPersonas[i].nombre}`)? true : false 

   if(afirmar_a) { cantidadPersonas[i].verificarDatos(cantidadPersonas[i]) }
  
  }

 } else {

  msgError()

}
});

//* >--------------------------------------------------------------MostrarUsuarios-----------------------------------------------------------------------<

let btnMostrar = document.querySelector("#mostrar")

btnMostrar.addEventListener("click", (evt)=> { evt.preventDefault()

if(cantidadPersonas.length > 0 ){

  let lista = "";

  for (let i = 1; i <= cantidadPersonas.length; i++) {

  let names = sessionStorage.getItem(`nombre${i}`)
  let surname = sessionStorage.getItem(`apellido${i}`)
  let years_old = sessionStorage.getItem( `edad${i}`)
  
  lista += (`<lb> Nombre : ${names} <br> Apellido : ${surname}  <br> Edad: ${years_old}</lb> <br>`);
}

div_todos.innerHTML = lista

} else {

msgError()

}
});

//----------------------------------------------------------------------VerGrafico---------------------------------<  

const btnGrafico = document.querySelector("#grafico")

btnGrafico.addEventListener("click",(evt)=>{
         evt.preventDefault()
const selecperson = document.querySelector("#selecperson")
    if(cantidadPersonas.length > 0){

      for (let i = 0; i < cantidadPersonas.length; i++) {

      const persona = cantidadPersonas[i];

      let nombre_b = `${persona.apellido},${persona.nombre}`
    
      let afirmar_b = (nombre_b === selecperson.value)? true : false 

       if(afirmar_b){
         let dess;
         let almm;
         let merr;
         let cenn;
         dess = persona.datoDesayuno
         almm = persona.datoAlmuerzo
         merr = persona.datoMerienda
         cenn = persona.datoCena

         crearGrafico(dess,almm,merr,cenn)
         }
        }
      } else {
        msgError()
      }
});

//---------------------------------------------------------------LeerJSON---------------------------------------------------------->

const btnJSON = document.querySelector("#leerJSON")

const mostrarHTML = (obj)=>{

const formGET = document.querySelector("#content")  
             
const input = document.querySelector("#insuline")

for (let i = 0; i < obj.length; i++) {
 
  let text="";

    const {id,name,efecto,max_effect,duracion,inyeccion,data,img} = obj[i];
  
     if(input.value == id) {

        text = `
        <p>Tipo de Insulina: ${name}</p>
        <p>Cuando hace efecto: ${efecto}</p>
        <p>Cuando hace el Maximo efecto: ${max_effect}</p>
        <p>Se debe de inyectar: ${inyeccion} </p>
        <p>Duracion: ${duracion} </p>
        <p>Datos de la misma: ${data} </p>
   
         `
   for (let i = 0; i <  img.length; i++) {

     text += `<img src="${img[i]}"><br>`

   }
      formGET.innerHTML = text
    }
}
}

const obternerJSON = () => {
  fetch("archivo.json")   
        .then(req =>{
            return  req.json();  
        })
        .then(req =>{
          mostrarHTML(req)
        })
        .catch( (err) => {
       console.log(err)
     })
   }
      
btnJSON.addEventListener("click", obternerJSON)

//--------------------------------------------------------------DarkMode------------------------------------------------------------------<



const darkmode = document.querySelector("#darkmode")
let div_dark = document.querySelector("#dark")

darkmode.addEventListener("click", _ =>{

modeDiv(div_dark)

})

document.addEventListener("DOMContentLoaded",()=>{
  
  if(localStorage.getItem('theme') == 'dark'){
    div_dark.className = 'darkMode'
    localStorage.setItem('theme','dark')
    } else {
      div_dark.className = 'lightMode'
      localStorage.setItem('theme','light')  
    }
  
})
