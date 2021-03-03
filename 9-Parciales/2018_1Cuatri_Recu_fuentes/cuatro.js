/*
(IF)Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los divido,
de lo contrario los sumo.
Si la suma es menor a 50 ,además de mostrar el resultado, muestro el mensaje
"la suma es xxx y es menor a 50".
*/
function mostrar()
{
	let numeroUno;
	let numeroDos;
	let suma;
	let division;

	numeroUno = prompt("Ingrese un numero");
	numeroUno = parseInt(numeroUno);

	numeroDos = prompt("Ingrese otro numero");
	numeroDos = parseInt(numeroDos);

	if(numeroUno == numeroDos)
	{
		division = numeroUno / numeroDos;
		alert("Num1: " + numeroUno + " num2: " + numeroDos);
	}
	else
	{
		if(numeroUno > numeroDos)
		{
			division = numeroUno / numeroDos;
			alert("Division " + division);
		}
		else
		{
			suma = numeroUno + numeroDos;
			
			if(suma < 50)
			{
				alert("La suma es " + suma + " y es menor a 50");
			}
			else
			{
				alert("suma: " + suma)
			}
		}
	}



}
