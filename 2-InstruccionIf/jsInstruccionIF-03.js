function mostrar()
{
	//tomo la edad  
	let edad;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	if(edad > 17)
	{
		alert("Es mayor de edad");
	}

	else
	{
		alert("Es menor de edad");
	}

}//FIN DE LA FUNCIÓN