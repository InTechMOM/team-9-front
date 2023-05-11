function validarCalificacion() {
	var resultado = document.getElementById("email").value;
  
	if (resultado === "1") {
	  alert('Inténtalo otra vez')
    }else if (resultado === "2"){
      alert('Podemos mejorar')
    }else if (resultado === "3"){
        alert('Lo estas logrando')
    }else if (resultado === "4"){
        alert('Eres genial')
    }else if (resultado === "5"){
        alert('Eres asombroso')
    } else {
	  event.preventDefault();
	}

  };