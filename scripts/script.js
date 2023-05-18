function calcularCalificacion() {
  let calificaciones = document.getElementsByClassName('input-cal');
  let suma = 0;
  let cantidadCalificaciones = 0;

  for (let i = 0; i < calificaciones.length; i++) {
    let valorSeleccionado = parseInt(calificaciones[i].value);

    if (!isNaN(valorSeleccionado)) {
      suma += valorSeleccionado;
      cantidadCalificaciones++;
    }
  }

  let promedio = suma / cantidadCalificaciones;
  document.getElementById('calificacion-general').textContent = promedio.toFixed(2); // Limitar el resultado a 2 decimales

  const mensajes = {
    1: "Inténtalo otra vez",
    2: "Podemos mejorar",
    3: "Lo estás logrando",
    4: "Eres genial",
    5: "Eres asombroso"
  };
  //console.log(mensajes[Math.floor(promedio)])

  // localStorage.setItem('evaluacion', JSON.stringify(promedio.toFixed(2)));
 
  // Muestro la descripción correspondiente al promedio para el estudiante
  let descripcion = document.getElementById('descripcion-calificacion');

  descripcion.textContent = mensajes[promedio.toFixed(1)]
  // Obtengo la evaluación guardada en el Local Storage
  let evaluacionGuardada = localStorage.getItem('evaluacion');
  if (evaluacionGuardada) {
    // Convertir la cadena JSON en un objeto
    let evaluacion = JSON.parse(evaluacionGuardada);

    // Muestro las calificaciones almacenadas
    let calificacionElements = document.getElementsByClassName('calificacion');
    for (let i = 0; i < calificacionElements.length; i++) {
      let calificacion = evaluacion.calificaciones[i];
      calificacionElements[i].value = calificacion;
    }
    // Muestro las observaciones almacenadas
    document.getElementById('observaciones').value = evaluacion.observaciones;
  }
}
//AQUÍ GUARDO LAS OBSERVACIONES DEL PROFESOR
function guardarEvaluacion() {
  let calificaciones = [];
  let observaciones = document.getElementById('observaciones').value;

  let calificacionElements = document.getElementsByClassName('input-cal');
  for (let i = 0; i < calificacionElements.length; i++) {
    let calificacion = parseInt(calificacionElements[i].value);
    calificaciones.push(calificacion);
  }
  let data = {
    calificaciones,
    observaciones
  };
  // Guardo los datos en el Local Storage
  localStorage.setItem('evaluacion', JSON.stringify(data));
}

//muestro en la pantalla del estudiante
function mostrarCalificaciones() {
  const informacion= JSON.parse(localStorage.getItem('evaluacion'));
  console.log(informacion)
  if (!informacion) return ""
  //obtengo la referencia del elemento tbody
let tablaDatos= document.getElementById('tablaDatos');
//console.log(tablaDatos.firstChild.textContent = informacion.calificaciones[0])
console.log(tablaDatos.childNodes)
//lógica básica para mostrar en la primera fila
const trSer1 = tablaDatos.childNodes[1].childNodes[3].textContent = informacion.calificaciones[0];
const trSer2 = tablaDatos.childNodes[1].childNodes[5].textContent = informacion.calificaciones[1];
const trSer3 = tablaDatos.childNodes[1].childNodes[7].textContent = informacion.calificaciones[2];
//SEGUNDA FILA
const trSer4 = tablaDatos.childNodes[3].childNodes[3].textContent = informacion.calificaciones[3];
const trSer5 = tablaDatos.childNodes[3].childNodes[5].textContent = informacion.calificaciones[4];
const trSer6 = tablaDatos.childNodes[3].childNodes[7].textContent = informacion.calificaciones[5];
//tercera FILA
const trSer7 = tablaDatos.childNodes[5].childNodes[3].textContent = informacion.calificaciones[6];
const trSer8 = tablaDatos.childNodes[5].childNodes[5].textContent = informacion.calificaciones[7];
const trSer9 = tablaDatos.childNodes[5].childNodes[7].textContent = informacion.calificaciones[8];
//cuarta FILA
const trSer10 = tablaDatos.childNodes[7].childNodes[3].textContent = informacion.calificaciones[9];
const trSer11 = tablaDatos.childNodes[7].childNodes[5].textContent = informacion.calificaciones[10];
const trSer12 = tablaDatos.childNodes[7].childNodes[7].textContent = informacion.calificaciones[11];
//console.log(tablaDatos.childNodes[1])
//itero sobre los datos
//  informacion.calificaciones.forEach(nota => {
  
//  });

const observacionesGenerales = document.getElementById('observacionesGenerales');

//console.log(observacionesGenerales)

observacionesGenerales.value = informacion.observaciones

  return mostrar;
}
