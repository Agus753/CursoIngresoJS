/*
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
c) Informar el tipo con mas cantidad de bolsas.
d) El tipo mas caro
*/
function mostrar()
{
  let respuesta;
  let tipoIngresadp;
  let cantidadBolsasIngresada;
  let precioIngresado;
  let descuento;
  let precioBruto;
  let acumuladorCantidadBolsa;
  let tipoMasCantidadBolsas;
  let contadorCal;
  let contadorArena;
  let contadorCemento;
  let acumuladorBolsasCemento;
  let acumuladorBolsasCal;
  let acumuladorBolsasArena;
  let acumuladorPrecioCal;
  let acumuladorPrecioArena;
  let acumuladorPrecioCemento;

  respuesta = "si";
  acumuladorCantidadBolsa = 0;
  sumaPrecioBruto = 0;
  contadorCemento = 0;
  contadorArena = 0;
  contadorCal = 0;
  acumuladorBolsasCemento = 0;
  acumuladorBolsasArena = 0;
  acumuladorBolsasCal = 0;
  acumuladorPrecioCemento = 0;
  acumuladorPrecioArena = 0;
  acumuladorPrecioCal = 0;


  while(respuesta == "si")
  {
    tipoIngresado = prompt("Ingrese un tipo de producto");
    while(isNaN(tipoIngresado) == false || tipoIngresado != "arena" && tipoIngresado != "cal" && tipoIngresado != "cemento")
    {
      tipoIngresado = prompt("Error. Ingrese un producto válido");
    }

    cantidadBolsasIngresada = prompt("Ingrese cantidad de productos");
    cantidadBolsasIngresada = parseInt(cantidadBolsasIngresada);
    while(isNaN(cantidadBolsasIngresada) == true || cantidadBolsasIngresada < 1)
    {
      cantidadBolsasIngresada = prompt("Error. Ingrese una cantidad válida");
      cantidadBolsasIngresada = parseInt(cantidadBolsasIngresada);
    }

    precioIngresado = prompt("Ingrese el precio");
    precioIngresado = parseInt(precioIngresado);
    while(isNaN(precioIngresado) == true || precioIngresado < 1)
    {
      precioIngresado = prompt("Error. Ingrese un precio válido");
      precioIngresado = parseInt(precioIngresado);
    }

    acumuladorCantidadBolsa = acumuladorCantidadBolsa + cantidadBolsasIngresada;

    precioBruto = cantidadBolsasIngresada * precioIngresado;
    //a) El importe total a pagar , bruto sin descuento y...
    sumaPrecioBruto = sumaPrecioBruto + precioBruto;

    switch(tipoIngresado)
    {
      case "cal":
        contadorCal++;
        acumuladorBolsasCal = acumuladorBolsasCal + cantidadBolsasIngresada;
        acumuladorPrecioCal = acumuladorPrecioCal + precioIngresado;
      break;
      case "arena":
        contadorArena++;
        acumuladorBolsasArena = acumuladorBolsasArena + cantidadBolsasIngresada;
        acumuladorPrecioArena = acumuladorPrecioArena + precioIngresado; 
      break;
      case "cemento":
        contadorCemento++;
        acumuladorBolsasCemento = acumuladorBolsasCemento + cantidadBolsasIngresada;
        acumuladorPrecioCemento = acumuladorPrecioCemento + precioIngresado; 
      break;
    }

    respuesta = prompt("¿Desea seguir?")
  }//FIN DEL WHILE

  //b) el importe total a pagar con descuento(solo si corresponde)

  if(acumuladorCantidadBolsa < 11)
  {
    alert("El precio bruto es " + sumaPrecioBruto);
  }
  else
  {
    if(acumuladorCantidadBolsa > 10 && acumuladorCantidadBolsa < 31)
    {
      descuento = 15;
      precioConDescuento = sumaPrecioBruto - sumaPrecioBruto * descuento / 100;
      alert("El precio con descuento es " + precioConDescuento);
    }
    else
    {
      if(acumuladorCantidadBolsa > 30)
      {
        descuento = 25;
        precioConDescuento = sumaPrecioBruto - sumaPrecioBruto * descuento / 100;
        alert("El precio con descuento es " + precioConDescuento);
      }
    }
  }
  //c) Informar el tipo con mas cantidad de bolsas.
  if(acumuladorBolsasCemento > acumuladorBolsasArena && acumuladorBolsasCemento > acumuladorBolsasCalulador)
  {
    alert("El tipo con mas cantidad de bolsas es cemento");
  }
  else
  {
    if(acumuladorBolsasArena > acumuladorBolsasCal)
    {
      alert("El tipo con mas cantidad de bolsas es arena");
    }
    else
    {
      alert("El tipo con mas cantidad de bolsas es cal");
    }

  }
  //d) El tipo mas caro
  totalCal = acumuladorBolsasCal * acumuladorPrecioCal;
  totalArena = acumuladorBolsasArena * acumuladorPrecioArena;
  totalCemento = acumuladorBolsasCemento * acumuladorPrecioCemento;

  if(totalCemento > totalArena && totalCemento > totalCal)
  {
    alert("El cemento es el tipo mas caro");
  }
  else
  {
    if(totalArena > totalCal)
    {
      alert("La arena es el tipo mas caro");
    }
    else
    {
      alert("El cal es el tipo mas caro");
    }
  }

}

