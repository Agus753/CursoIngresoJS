function mostrar()
{
	let edad;
	let estadoCivil;

	//Conseguir edad y estado civil de la caja de texto.
	edad = document.getElementById('txtIdEdad').value;
	estadoCivil = document.getElementById('estadoCivil'). value;

	//Condición, solo hace algo cuando el usuario es soltero y mayor.
	if(edad > 17 && estadoCivil == "Soltero")
	{
		alert("Es soltero y no es menor.");
	}
}//FIN DE LA FUNCIÓN