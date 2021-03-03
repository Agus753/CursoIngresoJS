/*
Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
*/
function mostrar()
{
	let contadorNotas; 
	let sexoIngresado;
	let notaIngresada;
	let acumuladorNotas;
	let promedio;
	let banderaDeLaNota;
	let notaMasBaja;
	let sexoDeLaNotaMasBaja;
	let varonesConMasDeSeis;

	contadorNotas = 0;
	acumuladorNotas = 0;
	banderaDeLaNota = 0;
	varonesConMasDeSeis = 0;


	while(contadorNotas < 5)
	{
		sexoIngresado = prompt("Ingrese su sexo");
		while(isNaN(sexoIngresado) == false || sexoIngresado != "f" && sexoIngresado != "m")
		{
			sexoIngresado = prompt("Error. Ingrese un sexo válido");
		}

		notaIngresada = prompt("Ingrese su nota");
		notaIngresada = parseInt(notaIngresada);
		while(isNaN(notaIngresada) == true || notaIngresada < 0 || notaIngresada > 10)
		{
			notaIngresada = prompt("Error. Ingrese una nota válida");
			notaIngresada = parseInt(notaIngresada);
		}

		acumuladorNotas = acumuladorNotas + notaIngresada;
		//b) La nota más baja y el sexo de esa persona.
		if(banderaDeLaNota == 0)
		{
			notaMasBaja = notaIngresada;
			sexoDeLaNotaMasBaja = sexoIngresado;
			banderaDeLaNota = 1;
		}
		else
		{
			if(notaIngresada < notaMasBaja)
			{
				notaMasBaja = notaIngresada;
				sexoDeLaNotaMasBaja = sexoIngresado;
			}
		}

		if(sexoIngresado == "m" && notaIngresada > 6)
		{
			varonesConMasDeSeis++;
		}
		contadorNotas++;
	}
	//a) El promedio de las notas totales.
	promedio = acumuladorNotas / contadorNotas;
	alert("El promedio es: " + promedio);
	alert("La nota mas baja es: " + notaMasBaja + " y el sexo de la persona es " + sexoDeLaNotaMasBaja);
	alert("Los varones con mas de seis son " +varonesConMasDeSeis);

}
