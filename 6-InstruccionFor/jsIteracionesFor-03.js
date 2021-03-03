/*
2- "super chino" Se pide el ingreso de mercadería de un supermercado , hasta que el usuario quiera,se pide :
tipo(limpieza , comestible , otros)solo estos tres tipos
nombre del producto
importe del producto (no mayor a 1000 pesos)
procedencia(importado, nacional, elaborado)
Peso (no mayor a 30 kilos)

informar SOLO SI HAY 
a) el NOMBRE del mas pesado de los comestibles
b) el NOMBRE del  mas caro de todos los productos
c) el NOMBRE del  mas barato de los elaborados
d)el tipo de mercadería  que mas aparece
e)el porcentaje de productos elaborados por sobre el total
f) el promedio de pesos por cada tipo ingresado
*/
function mostrar()
{	
	let respuesta;
	let tipoIngresado;
	let nombreProductoIngresado;
	let importeProductoIngresado;
	let procedenciaIngresada;
	let pesoIngresado;
	let banderaMasPesadoComestibles;
	let nombreComestibleMasPesado;
	let comestibleMasPesado;
	let banderaProductoMasCaro;
	let nombreProductoMasCaro;
	let importeProductoMasCaro;
	let banderaProductoBaratoElaborados;
	let nombreProductoBaratoElaborados;
	let contadorLimpieza;
	let contadorComestible;
	let contadorOtros;
	let contadorElaborados;
	let contadorProductosTotal; 
	let acumuladorPesoLimpieza;
	let acumuladorPesoComestibles;
	let acumuladorPesoOtros;



	respuesta = "si";
	banderaMasPesadoComestibles = 0;
	banderaProductoMasCaro = 0;
	banderaProductoBaratoElaborados = 0;
	contadorLimpieza = 0;
	contadorComestible = 0;
	contadorOtros = 0;
	contadorElaborados = 0;
	contadorProductosTotal = 0;
	acumuladorPesoLimpieza = 0;
	acumuladorPesoComestibles = 0;
	acumuladorPesoOtros = 0;


	while(respuesta == "si")
	{
		tipoIngresado = prompt("Ingrese un tipo");
		while(isNaN(tipoIngresado) == false || tipoIngresado != "limpieza" && tipoIngresado != "comestible" && tipoIngresado != "otros")
		{
			tipoIngresado = prompt("Error. Ingrese un tipo");
		}

		nombreProductoIngresado = prompt("Ingrese un nombre");
		while(isNaN(nombreProductoIngresado) == false)
		{
			nombreProductoIngresado = prompt("Error. Ingrese un nombre");
		}

		importeProductoIngresado = prompt("Ingrese un importe");
		importeProductoIngresado = parseInt(importeProductoIngresado);
		while(isNaN(importeProductoIngresado) == true || importeProductoIngresado < 1 || importeProductoIngresado > 1000)
		{
			importeProductoIngresado = prompt("Error. Ingrese un importe");
			importeProductoIngresado = parseInt(importeProductoIngresado);
		}

		procedenciaIngresada = prompt("Ingrese una procedencia");
		while(isNaN(procedenciaIngresada) == false || procedenciaIngresada != "importado" && procedenciaIngresada != "elaborado" && procedenciaIngresada != "nacional")
		{
			procedenciaIngresada = prompt("Error. Ingrese una procedencia");
		}


		pesoIngresado = prompt("Ingrese un peso");
		pesoIngresado = parseInt(pesoIngresado);
		while(isNaN(pesoIngresado) == true || pesoIngresado < 1 || pesoIngresado > 300)
		{
			pesoIngresado = prompt("Error. Ingrese un peso");
			pesoIngresado = parseInt(pesoIngresado);
		}

		switch(tipoIngresado)
		{//d)el tipo de mercadería  que mas aparece
		//f) el promedio de pesos por cada tipo ingresado
			case "limpieza":
				contadorLimpieza++;
				acumuladorPesoLimpieza = acumuladorPesoLimpieza = pesoIngresado;
			break;
			case "comestible":
				contadorComestible++;
				//a) el NOMBRE del mas pesado de los comestibles
				if(banderaMasPesadoComestibles == 0 || pesoIngresado > comestibleMasPesado)
				{
					comestibleMasPesado = pesoIngresado;
					nombreComestibleMasPesado = nombreProductoIngresado;
					banderaMasPesadoComestibles = 1;
				}
				acumuladorPesoComestibles = acumuladorPesoComestibles = pesoIngresado;

			break;
			case "otros":
				contadorOtros++;
				acumuladorPesoOtros = acumuladorPesoOtros = pesoIngresado;
			break;
		}

		//b) el NOMBRE del  mas caro de todos los productos
		if(banderaProductoMasCaro == 0 || importeProductoIngresado > importeProductoMasCaro)
		{
			importeProductoMasCaro = importeProductoIngresado;
			nombreProductoMasCaro = nombreProductoIngresado;
			banderaProductoMasCaro = 1;
		}

		//c) el NOMBRE del  mas barato de los elaborados
		if(banderaProductoBaratoElaborados == 0 || importeProductoIngresado < importeProductoBaratoElaborados)
		{
			importeProductoBaratoElaborados = importeProductoIngresado;
			nombreProductoBaratoElaborados = nombreProductoIngresado;
			banderaProductoBaratoElaborados = 1;
		}

		//e)el porcentaje de productos elaborados por sobre el total
		contadorProductosTotal++;
		if(procedenciaIngresada == "elaborado")
		{
			contadorElaborados++;
		}





		respuesta = prompt("desea continuar?");
	}

	//A:
	if(banderaMasPesadoComestibles == 1)
	{
		alert("El comestible mas pesado es: " + nombreComestibleMasPesado);
	}
	//B:
	if(banderaProductoMasCaro == 1)
	{
		alert("El producto mas caro es " + nombreProductoMasCaro);
	}

	//C:
	if(banderaProductoBaratoElaborados == 1)
	{
		alert("El mas barato de los elaborados es " + nombreProductoBaratoElaborados);
	}

	//D:
	if(contadorComestible > contadorLimpieza && contadorComestible > contadorOtros)
	{
		alert("Hay mas productos comestibles");
	}
	else
	{
		if(contadorLimpieza > contadorOtros)
		{
			alert("Hay mas productos de limpieza");
		}
		else
		{
			alert("Hay mas productos 'otros'");
		}
	}

	//E:
	if(contadorElaborados > 0)
	{
		porcentajeElaborados = contadorElaborados * 100 / contadorProductosTotal;
		alert("El porcentaje de elaborados por sobre el total es: " + porcentajeElaborados);
	}

	//F:
	promedioLimpieza = acumuladorPesoLimpieza / contadorLimpieza;
	promedioComestibles = acumuladorPesoComestibles / contadorComestible;
	promedioOtros = acumuladorPesoOtros / contadorOtros;

	if(contadorLimpieza > 1)
	{
		alert("El promedio de peso de productos de limpieza es " + promedioLimpieza);
	}
	if(contadorComestible > 1)
	{
		alert("El promedio de peso de productos comestibles es " + promedioComestibles);
	}
	if(contadorOtros > 1)
	{
		alert("El promedio de peso de productos 'otros' es " + promedioOtros);
	}

	/*let contador;
	let cantidad;

	cantidad = prompt("Introduzca la cantidad de veces que se repetirá el mensaje");
	cantidad = parseInt(cantidad);

	for(contador = 0; contador < cantidad; contador++)
	{
		alert("Hola UTN FRA");
	}*/

}//FIN DE LA FUNCIÓN