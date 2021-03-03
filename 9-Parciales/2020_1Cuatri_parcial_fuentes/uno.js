/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/
function mostrar()
{
	let productos;
	let tipoIngresado;
	let precioIngresado;
	let cantidadUnidadesIngresadas;
	let marcaIngresada;
	let fabricanteIngresado;
	let banderaAlcoholBarato;
	let precioAlcoholMasBarato;
	let cantidadUnidadesAlcoholBarato;
	let fabricanteAlcoholBarato;
	let contadorAlcohol;
	let contadorBarbijo;
	let contadorJabon;
	let acumuladorAlcohol;
	let acumuladorBarbijo;
	let acumuladorJabon;
	let promedioCompra;

	banderaAlcoholBarato = 0;
	contadorAlcohol= 0;
	contadorBarbijo= 0;
	contadorJabon= 0;
	acumuladorAlcohol= 0;
	acumuladorBarbijo= 0;
	acumuladorJabon= 0;

	for(productos=0;productos<3;productos++)
	{
		tipoIngresado = prompt("Ingrese un tipo");
		while(isNaN(tipoIngresado) == false || tipoIngresado != "barbijo" && tipoIngresado != "jabon" && tipoIngresado != "alcohol")
		{
			tipoIngresado = prompt("Error. Ingrese un tipo");
		}

		precioIngresado = prompt("Ingrese un precio");
		precioIngresado = parseInt(precioIngresado);
		while(isNaN(precioIngresado) == true || precioIngresado < 100 || precioIngresado >300)
		{
			precioIngresado = prompt("Error. Ingrese un precio");
			precioIngresado = parseInt(precioIngresado);
		}

		cantidadUnidadesIngresadas = prompt("Ingrese la cantidad");
		cantidadUnidadesIngresadas = parseInt(cantidadUnidadesIngresadas);
		while(isNaN(cantidadUnidadesIngresadas) == true || cantidadUnidadesIngresadas < 0 || cantidadUnidadesIngresadas > 1000)
		{
			cantidadUnidadesIngresadas = prompt("Error. Ingrese la cantidad");
			cantidadUnidadesIngresadas = parseInt(cantidadUnidadesIngresadas);
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

		//a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
		//b) Del tipo con mas unidades, el promedio por compra
		switch(tipoIngresado)
		{
			case "alcohol":
				contadorAlcohol++;
				acumuladorAlcohol = acumuladorAlcohol + cantidadUnidadesIngresadas;

				if(banderaAlcoholBarato == 0 || precioIngresado < precioAlcoholMasBarato)
				{
					precioAlcoholMasBarato = precioIngresado;
					cantidadUnidadesAlcoholBarato = cantidadUnidadesIngresadas;
					fabricanteAlcoholBarato = fabricanteIngresado;
					banderaAlcoholBarato = 1;
				}
			break;
			case "barbijo":
				contadorBarbijo++;
				acumuladorBarbijo = acumuladorBarbijo + cantidadUnidadesIngresadas;
			break;
			case "jabon":
				contadorJabon++;
				acumuladorJabon = acumuladorJabon + cantidadUnidadesIngresadas;
			break;
		}



	}
	if(banderaAlcoholBarato == 1)
	{
		document.write("<br/>El alcohol mas barato tiene " + cantidadUnidadesAlcoholBarato + " unidades y su fabricante es " + fabricanteAlcoholBarato);
	}

	//b:
	if(acumuladorBarbijo > acumuladorJabon && acumuladorBarbijo > acumuladorAlcohol)
	{
		promedioCompra = acumuladorBarbijo / contadorBarbijo;
		document.write("<br/>El promedio por compra de los barbijos es " + promedioCompra);
	}
	else
	{
		if(acumuladorJabon > acumuladorAlcohol)
		{
			promedioCompra = acumuladorJabon / contadorJabon;
			document.write("<br/>El promedio por compra del jabon es " + promedioCompra);
		}
		else
		{
			promedioCompra = acumuladorAlcohol / contadorAlcohol;
			document.write("<br/>El promedio por compra del alcohol es " + promedioCompra);
		}
	}
	//c) Cuántas unidades de jabones hay en total
	if(contadorJabon > 0)
	{
		document.write("<br/>Hay " + acumuladorJabon + " unidades de jabon ");
	}
}