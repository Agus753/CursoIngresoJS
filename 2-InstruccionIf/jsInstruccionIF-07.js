function mostrar()
{
	let edad;
	let estadoCivil;

	//Conseguir edad
	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	//Conseguir estado civil
	estadoCivil = document.getElementById('estadoCivil').value;

	//Condicion
	if(edad < 17)
	{
		if(estadoCivil != "Soltero")
		{
			alert("Es muy pequeño para NO ser soltero"); //alert
		}
	}

}//FIN DE LA FUNCIÓN