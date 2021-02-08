function mostrar()
{
	//tomo la edad  
	let edad;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	// Ejemplo con "o" (pipe).
	/*if(edad < 13 || edad > 17)
	{
		alert("No es un adolescente");
	}*/

	// Se usa "y" y se niega esa afirmación completa. Ley de Demorgan(?
	if(!(edad > 12 && edad < 17))
	{
		alert("NO es adolescente");
	}

}//FIN DE LA FUNCIÓN