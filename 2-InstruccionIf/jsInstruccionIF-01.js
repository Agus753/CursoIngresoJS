function mostrar()
{
	//tomo la edad  

	// los operadores relacionales (binarios) relacionan dos cosas (==; !=; <; >; <=; >=)
	let edad;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	if(edad == 15)
	{

		alert("Niña bonita");
	}

	//TESTING

	/*if(false)
	{
		alert("verdadero");
	}

	else
	{
		alert("falso");
	}*/

}//FIN DE LA FUNCIÓN