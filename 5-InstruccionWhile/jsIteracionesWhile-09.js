/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let numeroIngresado;
	let nombre;
	let nombreMaximo;
	let nombreMinimo;
	let respuesta;
	let maximo;
	let minimo;
	let banderaDelPrimero;

	banderaDelPrimero = "es el primero";

	numeroIngresado = 0;
	
	respuesta = 'si';

	while(respuesta == 'si')
	{
		nombre = prompt("Ingrese su nombre");

		numeroIngresado = prompt("Ingrese su edad");
		numeroIngresado = parseInt(numeroIngresado);

		if(banderaDelPrimero == "es el primero")
		{
			maximo = numeroIngresado;
			minimo = numeroIngresado;
			nombreMaximo = nombre;
			nombreMinimo = nombre;
			banderaDelPrimero = "NO es el primero";
		}

		else
		{
			if(numeroIngresado > maximo){
				maximo = numeroIngresado;
				nombreMaximo = nombre;
			}
			if(numeroIngresado < minimo)
			{
				minimo = numeroIngresado;
				nombreMinimo = nombre;
			}
		}

	respuesta = prompt("'si' para continuar");	
	}
	document.getElementById('txtIdMaximo').value = "El mayor es: " + nombreMaximo + " con " + maximo + " años";
	document.getElementById('txtIdMinimo').value = "El menor es: " + nombreMinimo + " con " + minimo + " años";

}//FIN DE LA FUNCIÓN