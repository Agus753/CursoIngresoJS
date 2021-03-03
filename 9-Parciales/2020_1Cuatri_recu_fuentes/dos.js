/*
Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro
*/
function mostrar()
{
  let respuesta;
  let tipoIngresado;
  let cantidadIngresada;
  let precioIngresado;
  let descuento;
  let importeSinDescuento;
  let precioPorTipo;
  let acumuladorCantidadIngresada;
  let acumuladorCantidadArena;
  let acumuladorCantidadCal;
  let acumuladorCantidadCemento;
  let acumuladorPrecioArena;
  let acumuladorPrecioCal;
  let acumuladorPrecioCemento;
  let importeConDescuento;

  descuento = 0;
  importeSinDescuento = 0;
  importeConDescuento = 0;
  acumuladorCantidadIngresada = 0;
  acumuladorCantidadArena = 0;
  acumuladorCantidadCal = 0;
  acumuladorCantidadCemento = 0;
  acumuladorPrecioArena = 0;
  acumuladorPrecioCal = 0;
  acumuladorPrecioCemento = 0;

  respuesta = "si";

  while(respuesta == "si")
  {
  	tipoIngresado = prompt("Ingrese el producto");
  	while(isNaN(tipoIngresado)== false || tipoIngresado != "arena" && tipoIngresado != "cal" && tipoIngresado != "cemento")
  	{
  		tipoIngresado = prompt("Error. Ingrese un producto");
  	}

  	cantidadIngresada = prompt("Ingrese la cantidad");
  	cantidadIngresada = parseInt(cantidadIngresada);
  	while(isNaN(cantidadIngresada)== true || cantidadIngresada < 1 || cantidadIngresada > 1000)
  	{
  		cantidadIngresada = prompt("Error. Ingrese una cantidad");
  	}

  	precioIngresado = prompt("Ingrese el precio");
  	precioIngresado = parseInt(precioIngresado);
  	while(isNaN(precioIngresado)== true || precioIngresado < 1)
  	{
  		precioIngresado = prompt("Error. Ingrese un precio");
  	}
  	
  	//a) El importe total a pagar , bruto sin descuento y...
  	acumuladorCantidadIngresada = acumuladorCantidadIngresada + cantidadIngresada;

  	precioPorTipo = precioIngresado * cantidadIngresada;

  	importeSinDescuento = importeSinDescuento + precioPorTipo;

  	//d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
  	switch(tipoIngresado)
  	{
  		case "arena":
  			acumuladorCantidadArena = acumuladorCantidadArena + cantidadIngresada;
  			acumuladorPrecioArena = acumuladorPrecioArena + precioIngresado;
  		break;
  		case "cal":
  			acumuladorCantidadCal = acumuladorCantidadCal + cantidadIngresada; 
  			acumuladorPrecioCal = acumuladorPrecioCal + precioIngresado;
  		break;
  		case "cemento":
  			acumuladorCantidadCemento = acumuladorCantidadCemento + cantidadIngresada; 
  			acumuladorPrecioCemento = acumuladorPrecioCemento + precioIngresado;
  		break;
  	}

  	respuesta = prompt("¿Desea continuar");
  }
  //b) el importe total a pagar con descuento(solo si corresponde)

  	//Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
  	if(acumuladorCantidadIngresada < 11)
  	{
  		alert("El precio bruto y sin descuento es: " + importeSinDescuento);
  	}

  	else
  	{
	  	if(acumuladorCantidadIngresada > 10 && acumuladorCantidadIngresada < 31)
	  	{
	  		descuento = 15;
	  		importeConDescuento = importeSinDescuento - (importeSinDescuento * descuento / 100);
	  		alert("El importe con descuento es: " + importeConDescuento);
	  	}
	  	else
	  	{//Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
	  		if(acumuladorCantidadIngresada > 30)
	  		{
	  			descuento = 25;
	  			importeConDescuento = importeSinDescuento - (importeSinDescuento * descuento / 100);
	  			alert("El importe con descuento es: " + importeConDescuento);
	  		}
		}
  	}

  	if(acumuladorCantidadArena > acumuladorCantidadCemento && acumuladorCantidadArena > acumuladorCantidadCal)
  	{
  		alert("El tipo con mas cantidad de bolsas es arena");
  	}
  	else
  	{
  		if(acumuladorCantidadCemento > acumuladorCantidadCal)
  		{
  			alert("El tipo con mas cantidad de bolsas es cemento");
  		}
  		else
  		{
  			alert("El tipo con mas cantidad de bolsas es cal");
  		}
  	}

  	//f) El tipo mas caro
  	precioTotalArena = acumuladorCantidadArena * acumuladorPrecioArena;
  	precioTotalCal = acumuladorCantidadCal * acumuladorPrecioCal;
  	precioTotalCemento = acumuladorCantidadCemento * acumuladorPrecioCemento;

  	if(precioTotalCemento > precioTotalArena && precioTotalCemento > precioTotalCal)
  	{
  		alert("El cemento es el tipo mas caro");
  	}
  	else
  	{
  		if(precioTotalArena > precioTotalCal)
  		{
  			alert("La arena es el tipo mas caro");
  		}
  		else
  		{
  			alert("El cal es el tipo mas caro");
  		}
  	}
}
