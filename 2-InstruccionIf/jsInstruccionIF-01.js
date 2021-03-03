function mostrar()
{
	//tomo la edad  

	// los operadores relacionales (binarios) relacionan dos cosas (==; !=; <; >; <=; >=)
	/*let distancia;
	let tiempo;
	let velocidad;

	distancia = prompt("Ingrese la distancia recorrida:");
	distancia = parseInt(distancia);

	tiempo = prompt("Ingrese el tiempo que tardó en llegar a su destino:");
	tiempo = parseInt(tiempo);

	velocidad = distancia / tiempo;

	if(velocidad < 61)
	{
		alert("Muy lento");
	}

	else
	{
		if(velocidad > 60 && velocidad < 81)
		{
			alert("Lento");
		}

		else
		{
			if(velocidad > 80 && velocidad < 101)
			{
				alert("Buen ritmo");
			}

			else
			{
				if(velocidad > 100 && velocidad < 121)
				{
					alert("Ahí de la ley");
				}

				else
				{
					alert("Eso no se hace");
				}
			}
		}
	}
*/

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