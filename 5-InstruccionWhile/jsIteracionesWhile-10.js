/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let respuesta;
	let numeroIngresado;
	let negativos;
	let sumaNegativos;
	let positivos;
	let sumaPositivos;
	let ceros;
	let promedioPositivos;
	let promedioNegativos;
	let diferencia;
	let pares;

	respuesta = "si";
	numeroIngresado = 0;

	sumaPositivos = 0
	positivos = 0;

	sumaNegativos = 0;
	negativos = 0;

	ceros = 0;

	pares = 0;

	while(respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		if(numeroIngresado != 0)
		{
			if(numeroIngresado > 0)
			{
				sumaPositivos = sumaPositivos + numeroIngresado;
				positivos = positivos + 1;
			}

			else
			{
				sumaNegativos = sumaNegativos + numeroIngresado;
				negativos = negativos + 1;
			}
		}

		if(numeroIngresado == 0)
		{
			ceros = ceros + 1;
		}

		if(numeroIngresado % 2 == 0 && numeroIngresado != 0)
		{
			pares = pares + 1;
		}
		
		respuesta = prompt("¿desea continuar?");
	}//fin del while

	promedioPositivos = sumaPositivos / positivos;
	promedioNegativos = sumaNegativos / negativos;

	diferencia = sumaPositivos + sumaNegativos;

	alert("Los numeros positivos son " + positivos + ", su suma es: " + sumaPositivos + " y su promedio es: " + promedioPositivos);
	alert("Los numeros negativos son " + negativos + ", su suma es: " + sumaNegativos + " y su promedio es: " + promedioNegativos);
	alert("La cantidad de ceros es " + ceros + " los numeros pares son " + pares + " y la diferencia entre positivos y negativos es: " + diferencia);
}//FIN DE LA FUNCIÓN