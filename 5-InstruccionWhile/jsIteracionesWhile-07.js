/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let numero;
	let suma;
	let promedio;
	let cantidadNumeros;

	cantidadNumeros = 0;
	suma = 0;
	respuesta = 'si';

	while(respuesta == 'si')
	{
		numero = prompt("Deme un numero");
		numero = parseInt(numero);
		
		suma = suma + numero;
		cantidadNumeros = cantidadNumeros + 1;
		respuesta = prompt("'si' para continuar");
	}

	promedio = suma / cantidadNumeros;

	document.getElementById('txtIdSuma').value = "La suma es: " + suma;
	document.getElementById('txtIdPromedio').value = "El promedio es: " + promedio;

}//FIN DE LA FUNCIÓN