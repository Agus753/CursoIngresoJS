function mostrar()
{
	//tomo la edad  
	let edad;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	/*if(edad > 12)
	{
		if(edad < 18)
		{
			alert("Es un adolescente");
		}	
	}
	*/

	if(edad > 12 && edad < 18)
	{
		alert("Es adolescente");
	}	
	


}//FIN DE LA FUNCIÓN