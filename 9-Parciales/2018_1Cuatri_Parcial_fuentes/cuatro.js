/*
Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la suma es xxx y supero el 10".
*/
function mostrar()
{
	let numeroUno;
	let numeroDos;
	let suma;
	let resta;

	numeroUno = prompt("Ingrese un numero");
	numeroUno = parseInt(numeroUno);

	numeroDos = prompt("Ingrese un numero");
	numeroDos = parseInt(numeroDos);

	//Si son iguales los muestro concatenados.
	if(numeroUno == numeroDos)
	{
		alert("numero uno: " + numeroUno + " numero dos: " + numeroDos);
	}

	else
	{	//Si el primero es mayor, los resto,
		if(numeroUno > numeroDos)
		{
			resta = numeroUno - numeroDos;
			alert("La resta es: " + resta);
		}

		else
		{
			suma = numeroUno + numeroDos;

			if(suma > 10)
			{
				alert("La suma es " + suma + " y superó el 10");
			}
			else
			{
				alert("La suma es: " + suma);
			}
		}
	}
}//Fin del programa
