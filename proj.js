

const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", validarFormulario)


function validarFormulario(e){
	e.preventDefault();
	const url = document.querySelector("#url-video").value									
	const titulo = document.querySelector("#titulo").value
	const descripcion = document.querySelector("#descripcion").value
	const asociado = document.querySelector("#asociado").value
	const lider = document.querySelector("#lider").value
	const email = document.querySelector("#email-proyect").value


	const respuesta = document.getElementById("respuesta");
	respuesta.textContent = `${url}, 
	${titulo},
	${descripcion}, 
	${asociado}, 
	${lider}, 
	${email}`;
}