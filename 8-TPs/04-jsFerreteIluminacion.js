/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	let cantidadLamparas;
 	let marca;
 	let precioLamparas;
 	let precioTotal;
 	let aumento;
 	let precioFinal;
 	let porcentaje;

 	cantidadLamparas = document.getElementById('txtIdCantidad').value;
 	cantidadLamparas = parseInt(cantidadLamparas);

 	marca = document.getElementById('Marca').value;

 	descuento = 0;

 	precioLamparas = 35 * cantidadLamparas;

 	//Si la cantidad de lamparas es mayor a cinco, el descuento es del 50%
 	if(cantidadLamparas > 5)
	{
		porcentaje = 50;		
 	}

 	else
 	{
	 	// Si la cantidad de lamparas es igual a 5...
	 	if(cantidadLamparas == 5)
	 	{
	 		if(marca == "ArgentinaLuz")
	 		{
	 			//Si es ArgentinaLuz, el descuento es del 40%
		 		porcentaje = 40;
	 		}
	 		else
	 		{
	 			//Si no es ArgentinaLuz, el desxuento es del 30%
				porcentaje = 30
	 		}
	 	}
	 	else
	 	{
	 		if(cantidadLamparas == 4)
	 		{
	 			if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
	 			{
	 				porcentaje = 25;
	 			}

	 			else
	 			{
	 				porcentaje = 20;
	 			}
	 		}

	 		else
	 		{
	 			if(cantidadLamparas == 3)
	 			{
	 				if(marca == "ArgentinaLuz")
	 				{
	 					porcentaje = 15;
	 				}

	 				else
	 				{
	 					if(marca == "FelipeLamparas")
	 					{
	 						porcentaje = 10;
	 					}

	 					else
	 					{
	 						porcentaje = 5;
	 					}
	 				}
	 			}
	 		}
	 	}
 	}

 	descuento = precioLamparas * porcentaje / 100;
 	precioFinal = precioLamparas - descuento;

	document.getElementById('txtIdprecioDescuento').value = "El precio total es: " + precioFinal;
 	//alert("El precio total es: " + precioTotal);*/
}
