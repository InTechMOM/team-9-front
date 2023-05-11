function validarAcceso() {
	var email = document.getElementById("email").value;
	var perfil = document.querySelector('input[name="perfil"]:checked').value;
  
	if (email === "profesor@prueba.com" && perfil === "profesor") {
	  window.location.href = "./pages/vista-1-docente.html";
	} else if (email === "estudiante@prueba.com" && perfil === "estudiante") {
	  window.location.href = "./pages/carga-video.html";
	} else {
	  event.preventDefault();
	}
  }
  const emailInput = document.getElementById('email');
  const rolInputs = document.getElementsByName('perfil');
  
  formulario.addEventListener('submit', (event) => {
	event.preventDefault();
  
	const email = emailInput.value.trim();
  
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  
	if (!emailRegex.test(email)) {
  
	  alert('El correo electrónico ingresado es inválido');
	} else if (email === 'profesor@prueba.com') {
  
	  if (rolInputs[0].checked) {
	  } else if (rolInputs[1].checked) {
		alert('El correo electrónico es incorrecto, por favor verifique el perfil');
	  } else {
		alert('Seleccione un rol de usuario');
	  }
  
	} else if (email === 'estudiante@prueba.com') {
	  if (rolInputs[1].checked) {
	  } else if (rolInputs[0].checked) {
		alert('El correo electrónico es incorrecto, por favor verifique el perfil');
	  } else {   
		alert('Seleccione un tipo de perfil (profesor o alumno)');
	  }
	} else {
	  alert('Lo sentimos, este correo no se encuentra registrado en nuestro sistema, si el error persiste consulte con el administrador');
	}
  });