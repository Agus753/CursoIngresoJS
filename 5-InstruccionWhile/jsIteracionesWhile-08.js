/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numero;
	let SumaPositivos;
	let multiplicacionNegativos;

	cantidadNumeros = 0;
	sumaPositivos = 0;
	multiplicacionNegativos = 1;
	respuesta = 'si';

	while(respuesta == 'si')
	{
		numero = prompt("Deme un numero");
		numero = parseInt(numero);
		
		if(numero > -1){
			sumaPositivos = sumaPositivos + numero;
		}
		else
		{
			multiplicacionNegativos = multiplicacionNegativos * numero;
		}

		respuesta = prompt("'si' para continuar");
	}

	document.getElementById('txtIdSuma').value = "La suma es: " + sumaPositivos;
	document.getElementById('txtIdProducto').value = "El producto es: " + multiplicacionNegativos;

}//FIN DE LA FUNCIÓN