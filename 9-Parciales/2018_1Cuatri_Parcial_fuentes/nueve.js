/*
Bienvenidos.
Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100 (validar),
la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) La marca del producto más pesado
c) La cantidad de productos que se conservan a menos de 0 grados.
d) El promedio del peso de todos los productos.
f) El peso máximo y el mínimo.
*/
function mostrar()
{
	let respuesta;
	let marcaIngresada
	let pesoIngresado;
	let temperaturaIngresada;
	let temperaturasPares;
	let banderaDelMasPesado;
	let pesoMaximo;
	let pesoMinimo;
	let marcaDelMaximo;
	let marcaDelMinimo;
	let cantidadBajoCero;
	let promedio;
	let acumuladorPeso;
	let contadorVueltas;

	respuesta = "si";
	temperaturasPares = 0;
	banderaDelMasPesado = 0;
	cantidadBajoCero = 0;
	promedio = 0;
	acumuladorPeso = 0;
	contadorVueltas = 0;

	while(respuesta == "si")
	{
		contadorVueltas++;

		marcaIngresada = prompt("Ingrese la marca");
		while(isNaN(marcaIngresada) == false)
		{
			marcaIngresada = prompt("Error. Ingrese una marca válida");
		}

		pesoIngresado = prompt("Ingrese el peso del producto");
		pesoIngresado = parseInt(pesoIngresado);
		while(isNaN(pesoIngresado) == true || pesoIngresado < 1 || pesoIngresado > 100)
		{
			pesoIngresado = prompt("Error. Ingrese un peso válido");
			pesoIngresado = parseInt(pesoIngresado);
		}
		//d) El promedio del peso de todos los productos.
		acumuladorPeso = acumuladorPeso + pesoIngresado;

		temperaturaIngresada = prompt("Ingrese la temperatura del producto");
		temperaturaIngresada = parseInt(temperaturaIngresada);
		while(isNaN(temperaturaIngresada) == true || temperaturaIngresada < -30 || temperaturaIngresada > 30)
		{
			temperaturaIngresada = prompt("Error. Ingrese una temperatura válida");
			temperaturaIngresada = parseInt(temperaturaIngresada);
		}
		//a) La cantidad de temperaturas pares.
		if(temperaturaIngresada % 2 == 0)
		{
			temperaturasPares++;
		}
		//b) La marca del producto más pesado
		//f) El peso máximo y el mínimo.

		if(banderaDelMasPesado == 0)
		{
			pesoMaximo = pesoIngresado;
			marcaDelMaximo = marcaIngresada;
			pesoMinimo = pesoIngresado;
			marcaDelMinimo = marcaIngresada;
			banderaDelMasPesado = 1;
		}
		else
		{
			if(pesoIngresado > pesoMaximo)
			{
				pesoMaximo = pesoIngresado;
				marcaDelMaximo = marcaIngresada;
			}
			if(pesoIngresado < pesoMinimo)
			{
				pesoMinimo = pesoIngresado;
				marcaDelMinimo = marcaIngresada;
			}
		}
		//c) La cantidad de productos que se conservan a menos de 0 grados.
		if(temperaturaIngresada < 0)
		{
			cantidadBajoCero++;
		}

		respuesta = prompt("¿Desea seguir?");
	}

	promedio = acumuladorPeso / contadorVueltas;

	alert("La cantidad de temperaturas pares es " + temperaturasPares);
	alert("La marca del producto mas pesado es " + marcaDelMaximo + " con " + pesoMaximo + " Kg");
	alert("Los productos bajo ceros son " + cantidadBajoCero);
	alert("El promedio es " + promedio);
	alert("El maximo es " + pesoMaximo + " y el minimo es " + pesoMinimo);

	/*let marca;
	let peso; 
	let temperatura;
	let respuesta;
	let banderaDelPrimero;
	let pares;
	let marcaDelMasGrande;
	let marcaDelMasLiviano;
	let pesoDelMasGrande;
	let pesoDelMasLiviano;
	let sumaPesos;
	let productosBajoCero;
	let promedioPeso;
	let productos;

	respuesta = 'si';
	pares = 0;
	banderaDelPrimero = 'es el primero';
	productosBajoCero = 0;
	sumaPesos = 0;
	productos = 0;


	while(respuesta == 'si')
	{//Pido los datos
		marca = prompt("Ingrese la marca del producto");

		peso = prompt("Ingrese el peso del producto");
		peso = parseInt(peso);

		while(peso < 1 || peso > 100)
		{
			peso = prompt("Error. Ingrese un peso válido");
			peso = parseInt(peso);
		}
		sumaPesos = sumaPesos + peso;

		temperatura = prompt("Ingrese la temperatura del producto");
		temperatura = parseInt(temperatura);

		while(temperatura < -30 || temperatura > 30)
		{
			temperatura = prompt("Error. Ingrese una temperatura válida");
		}
		//Bandera del primero
		if(banderaDelPrimero == 'es el primero')
		{
			marcaDelMasGrande = marca;
			pesoDelMasGrande = peso;
			marcaDelMasLiviano = marca;
			pesoDelMasLiviano = peso;
			banderaDelPrimero = 'NO es el primero';
		}

		else
		{
			if(peso > pesoDelMasGrande)
			{	//Ejercicio B. Se calcula el producto más pesado
				pesoDelMasGrande = peso;
				marcaDelMasGrande = marca;
			}
			if(peso < pesoDelMasLiviano)
			{
				pesoDelMasLiviano = peso;
				marcaDelMasLiviano = marca;
			}
		}
		//Ejercicio A. Temperaturas pares.
		if(temperatura % 2 == 0 && temperatura != 0)
		{
			pares++;
		}
		//Ejercicio C. Productos bajo 0.
		if(temperatura < 0)
		{
			productosBajoCero++;
		}
		
		productos++;

		respuesta = prompt("¿Desea seguir?");
	}

	promedioPeso = sumaPesos / productos;

	alert("La cantidad de temperaturas pares es: " + pares);
	alert("La marca con el peso más grande es: " + marcaDelMasGrande + " con " + pesoDelMasGrande + "Kg. Y la que tiene el peso más chico es: " + marcaDelMasLiviano + " con " + pesoDelMasLiviano + "Kg");
	alert("La cantidad de productos bajo cero es: " + productosBajoCero);
	alert("El promedio de los pesos es: " + promedioPeso);*/

}
