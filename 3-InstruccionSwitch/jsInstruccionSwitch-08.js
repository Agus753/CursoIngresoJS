function mostrar()
{
	let destino;

	destino = document.getElementById('txtIdDestino').value;

	switch(destino)
	{
		case "Bariloche":
		case "Ushuaia":
			alert("FRIO");
			break;
		case "Mar del plata":
		case "Cataratas":
			alert("CALOR");
			break;
	}

}//FIN DE LA FUNCIÓN