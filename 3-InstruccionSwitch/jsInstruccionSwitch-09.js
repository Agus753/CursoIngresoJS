function mostrar()
{
	let estacion;
	let destino;
	let tarifa;
	let aumento;
	let descuento;
	let tarifaFinal;

	estacion = document.getElementById('txtIdEstacion').value;
	destino = document.getElementById('txtIdDestino').value;

	tarifa = 15000;

	descuento = 0;
	aumento = 0;

	switch(estacion)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					aumento = 20;
					break;
				case "Mar del plata":
					descuento = 20;
					break;
				default:
					descuento = 10;
					break;
			}
		break;
		
		case "Verano":
				switch(destino)
				{
					case "Bariloche":
						descuento = 20;
						break;
					case "Mar del plata":
						aumento = 20;
						break;
					default:
						aumento = 10;
						break;
				}
		break;
		default:
				
				switch(destino)
				{
					case "Bariloche":
					case "Mar del plata":
					case "Cataratas":
						aumento = 10;
						break;
					case "Cordoba":
						aumento = 1;
						break;
				}
		break;
	}
	if(aumento != 0)
	{
		tarifaFinal = tarifa + tarifa * aumento / 100;
	}
	
	if(descuento != 0)
	{
		tarifaFinal = tarifa - tarifa * descuento / 100;
	}
	

	alert("La tarifa final es: " + tarifaFinal);
}//FIN DE LA FUNCIÓN