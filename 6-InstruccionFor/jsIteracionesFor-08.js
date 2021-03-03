/*
For 9 bis( pedir 10 numeros , informar el mayor de los negativos y el menor de los pares).. solo si los hay
*/
function mostrar()
{
	let numerosIngresados;
	let contadorNumeros;
	let mayorNegativo;
	let menorDeLosPares;
	let banderaNegativosYPares;
	let banderaPares;

	banderaNegativos = 0;
	banderaPares = 0;

	for(contadorNumeros = 0; contadorNumeros < 4; contadorNumeros++)
	{
		numerosIngresados = prompt("Ingrese un numero");
		numerosIngresados = parseInt(numerosIngresados);

		if(numerosIngresados < 0 && banderaNegativos == 0 || numerosIngresados < 0 && numerosIngresados > mayorNegativo)
		{
			mayorNegativo = numerosIngresados;
			banderaNegativos = 1;
		}

		if(numerosIngresados % 2 == 0 && banderaPares == 0 || numerosIngresados < menorDeLosPares)
		{
			menorDeLosPares = numerosIngresados;
			banderaPares = 1;
		}
	}

	if(banderaPares == 1)
	{
		alert("El menor de los pares es: " + menorDeLosPares);
	}

	if(banderaNegativos == 1)
	{
		alert("El mayorNegativo es: " + mayorNegativo);
	}



	/*
	let numero;
	let divisor;
	let contador;

	divisor = 0;

	numero = prompt("Ingrese un numero");
	numero = parseInt(numero);


	for(contador = 2; contador < (numero / 2); contador++)
	{
		if (numero % contador)
		{
			break;
		}
	}

	if(contador != (numero / 2)-1)
	{
		console.log("No es primo");
	}
	else
	{
		console.log("Es primo");
	}
	/*for(contador = 1; contador < numero + 1; contador ++)
	{
		if(numero % contador == 0)
		{
			divisor++;
		}
	}

	if(divisor == 2)
	{
		alert(numero + " es primo");
	}
	else
	{
		alert(numero + " no es primo");
	}*/

}//FIN DE LA FUNCIÓN