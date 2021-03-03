function mostrar()
{
	//tomo la edad  
	
	let tarifaBase;
	let estacion;
	let localidad;
	let descuento;
	let aumento;
	let precioFinal;

	tarifaBase = 15000;
	descuento = 0;

	estacion = prompt("Ingrese la estación del año");
	localidad = prompt("Ingrese la localidad");

	if(estacion == "Invierno")
	{
		if(localidad == "Bariloche")
		{
			aumento = 20;
		}
		else
		{
			if(localidad == "Cataratas" || localidad == "Cordoba")
			{
				descuento = 10;
			}

			else
			{
				descuento = 20;
			}
		}
	}

	else
	{
		if(estacion == "Verano")
		{
			if(localidad == "Bariloche")
			{
				descuento = 20;
			}

			else
			{
				if(localidad == "Cataratas" || localidad == "Cordoba")
				{
					aumento = 10;
				}

				else
				{
					aumento =20;
				}
			}
		}
		else
		{
			if(estacion == "Otoño" || estacion == "Primavera")
			{
				if(localidad == "Bariloche")
				{
					aumento = 10;
				}
			}

			else
			{
				if(localidad == "Cataratas")
				{
					aumento = 10;
				}

				else
				{
					if(localidad == "Mar del Plata")
					{
						aumento = 10;
					}
					else
					{
						precioFinal = tarifaBase;
					}
				}
			}
		}
	}


	if(aumento != 0)
	{
		precioFinal = tarifaBase + tarifaBase * aumento / 100;
	}
	
	if(descuento != 0)
	{
		precioFinal = tarifaBase - tarifaBase * descuento / 100;
	}
	

	alert("La tarifa final es: " + precioFinal); 


	/*let edad;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	if(edad > 17)
	{
		alert("Es mayor de edad");
	}

	else
	{
		alert("Es menor de edad");
	}*/

}//FIN DE LA FUNCIÓN