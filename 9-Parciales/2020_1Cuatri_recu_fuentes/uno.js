/*
Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total

*/
function mostrar()
{
	let productosComprados;
	let tipoIngresado;
	let precioIngresado;
	let cantidadIngresada;
	let marcaIngresada;
	let fabricanteIngresado;
	let banderaJabones;
	let precioJabonMasAlto;
	let cantidadUnidadesJabonCaro;
	let fabricanteJabonMasCaro;
	let contadorBarbijo;
	let contadorJabon;
	let contadorAlcohol;
	let acumuladorCantidadBarbijo;
	let acumuladorCantidadJabon;
	let acumuladorCantidadAlcohol;
	let promedioPorCompra;

	banderaJabones = 0;
	contadorBarbijo= 0;
	contadorJabon = 0;
	contadorAlcohol = 0;
	acumuladorCantidadBarbijo = 0;
	acumuladorCantidadJabon = 0;
	acumuladorCantidadAlcohol = 0;


	for(productosComprados = 0; productosComprados < 3; productosComprados++)
	{
		tipoIngresado = prompt("Ingrese un tipo de producto");
		while(isNaN(tipoIngresado) == false || tipoIngresado != "barbijo" && tipoIngresado != "jabon" && tipoIngresado != "alcohol")
		{
			tipoIngresado = prompt("Error. Ingrese un tipo de producto");
		}

		precioIngresado = prompt("Ingrese un precio");
		precioIngresado = parseInt(precioIngresado);
		while(isNaN(precioIngresado) == true || precioIngresado < 100 || precioIngresado > 300)
		{
			precioIngresado = prompt("Error. Ingrese un precio");
		}

		cantidadIngresada = prompt("Ingrese una cantidad");
		cantidadIngresada = parseInt(cantidadIngresada);
		while(isNaN(cantidadIngresada) == true || cantidadIngresada < 1 || cantidadIngresada > 1000)
		{
			cantidadIngresada = prompt("Error. Ingrese una cantidad");
		}

		marcaIngresada = prompt("Ingrese una marca");
		while(isNaN(marcaIngresada) == false)
		{
			marcaIngresada = prompt("Error. Ingrese una marca");
		}

		fabricanteIngresado = prompt("Ingrese un fabricante");
		while(isNaN(fabricanteIngresado) == false)
		{
			fabricanteIngresado = prompt("Error. Ingrese un fabricante");
		}

		//b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
		switch(tipoIngresado)
		{
			case "barbijo":
				contadorBarbijo++;
				acumuladorCantidadBarbijo = acumuladorCantidadBarbijo + cantidadIngresada;
			break;
			case "jabon":
				contadorJabon++;
				acumuladorCantidadJabon = acumuladorCantidadJabon + cantidadIngresada;
				//a) Del más caro de los jabones, la cantidad de unidades y el fabricante
				if(banderaJabones == 0 || precioIngresado > precioJabonMasAlto)
				{
					precioJabonMasAlto = precioIngresado;
					cantidadUnidadesJabonCaro = cantidadIngresada;
					fabricanteJabonMasCaro = fabricanteIngresado;
					banderaJabones = 1;
				}
			break;
			case "alcohol":
				contadorAlcohol++;
				acumuladorCantidadAlcohol = acumuladorCantidadAlcohol + cantidadIngresada;
			break;
		}
	}//FIN DEL FOR

	alert("El jabon mas caro está: " + precioJabonMasAlto + " con " + cantidadUnidadesJabonCaro + " unidades y su fabricante es " + fabricanteJabonMasCaro);

	if(acumuladorCantidadBarbijo > acumuladorCantidadJabon && acumuladorCantidadBarbijo > acumuladorCantidadAlcohol)
	{
		promedioPorCompra = acumuladorCantidadBarbijo / contadorBarbijo;
		alert("El promedio por compra de barbijos es: " + promedioPorCompra);
	}
	else
	{
		if(acumuladorCantidadJabon > acumuladorCantidadAlcohol)
		{
			promedioPorCompra = acumuladorCantidadJabon / contadorJabon;
			alert("El promedio por compra de jabón es: " + promedioPorCompra);
		}
		else
		{
			promedioPorCompra = acumuladorCantidadAlcohol / contadorAlcohol;
			alert("El promedio por compra de alcohol es: " + promedioPorCompra);
		}
	}
	//c) Cuántas unidades de Barbijos se compraron en total
	alert("Se compraron: " + acumuladorCantidadBarbijo + " barbijos");

}//FIN DE LA FUNCION


