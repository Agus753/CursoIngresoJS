function mostrar()
{
	let edad;

	//Se obtiene la edad ingresada por id
	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	// La cantidad de veces que use el if, son las cantidades de veces que le hago "preguntas" al microprocesador.
	// si es mayor de 17, cumple la condicion y es mayor de edad.
	/*if(edad > 17)
	{

		alert("Es mayor de edad");
	}
	// si no es mayor, se hace otro if para calcular si es niño o adolescente.
	else{

		// si está entre los 13 y 17, es adolescente.
		if(edad > 12 && edad < 18)
		{
			alert("Es un adolescente");
		}

		else
		{
			//sino, es un niño.
			alert("Es un niño");
		}
	}*/

	// Esta es la MEJOR FORMA DE RESOLVER ESTE PROBLEMA, usa menos la funcion if.
	if(edad > 17)
	{
		alert("Es mayor de edad");
	}
	// si no es mayor, se hace otro if para calcular si es niño o adolescente.
	else{
		// si es menor a 13, es niño.
		if(edad < 13)
		{
			alert("Es un niño");
		}
		else
		{
			//sino, es adolescente.
			alert("Es adolescente");
		}
	}

}//FIN DE LA FUNCIÓN