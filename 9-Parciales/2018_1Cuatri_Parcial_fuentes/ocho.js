/*
Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.
*/
function mostrar()
{
	let respuesta;
	let letraIngresada;
	let numeroIngresado;
	let numerosPares;
	let numerosImpares;
	let cantidadDeCeros;
	let acumuladorPositivos;
	let acumuladorNegativos;
	let numeroMaximo;
	let letraDelNumeroMaximo;
	let numeroMinimo;
	let letraDelNumeroMinimo;
	let banderaDelMaxYMin;
	let sumaNegativos;
	let contadorPositivos;
	let promedio;

	numerosPares = 0;
	numerosImpares = 0;
	cantidadDeCeros = 0;
	acumuladorPositivos = 0;
	acumuladorNegativos = 0;
	banderaDelMaxYMin = 0;
	contadorPositivos = 0;

	respuesta = "si";

	while(respuesta == "si")
	{
		letraIngresada = prompt("Ingrese una letra");
		while(isNaN(letraIngresada) == false)
		{
			letraIngresada = prompt("Error. Ingrese una letra válida");
		}

		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		while(isNaN(numeroIngresado) == true || numeroIngresado < -100 || numeroIngresado > 100)
		{
			numeroIngresado = prompt("Error. Ingrese un numero válido");
		}
		
		//c) La cantidad de ceros.
		if(numeroIngresado == 0)
		{
			cantidadDeCeros++;
		}
		else
		{
			if(numeroIngresado % 2 == 0)
			{//a) La cantidad de números pares.
				numerosPares++;
			}
			//b) La cantidad de números impares.
			else
			{
				numerosImpares++;
			}
		}

		if(numeroIngresado > 0)
		{
			acumuladorPositivos = acumuladorPositivos + numeroIngresado;
			contadorPositivos++;
		}
		else
		{
			acumuladorNegativos = acumuladorNegativos + numeroIngresado;
		}
		//f) El número y la letra del máximo y el mínimo.
		if(banderaDelMaxYMin == 0)
		{
			numeroMaximo = numeroIngresado;
			letraDelNumeroMaximo = letraIngresada;
			numeroMinimo = numeroIngresado;
			letraDelNumeroMinimo = letraIngresada;
			banderaDelMaxYMin = 1;
		}
		else
		{
			if(numeroIngresado > numeroMaximo)
			{
				numeroMaximo = numeroIngresado;
				letraDelNumeroMaximo = letraIngresada;
			}
			if(numeroIngresado < numeroMinimo)
			{
				numeroMinimo = numeroIngresado;
				letraDelNumeroMinimo = letraIngresada;
			}
		}
		//d) El promedio de todos los números positivos ingresados.
		promedio = acumuladorPositivos / contadorPositivos;


		respuesta = prompt("¿Desea seguir?");
	}//Fin del while

	alert("Hay " + numerosPares + " numeros pares");
	alert("Hay " + numerosImpares + " numeros impares");
	alert("Hay " + cantidadDeCeros + " ceros");
	alert("El promedio es: " + promedio);
	alert("La suma de los negativos es: " + acumuladorNegativos);
	alert("El numero máximo es: " + numeroMaximo + " y su letra es " + letraDelNumeroMaximo + " y el minimo es: " + numeroMinimo + " y su letra es " + letraDelNumeroMinimo); 


}
