/*
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
*/
function mostrar()
{
	let notaIngresada;
	let sexoIngresado;
	let alumnos;
	let promedioNotas;
	let acumuladorNota;
	let banderaNotaMasBaja;
	let notaMasBaja;
	let sexoNotaMasBaja;
	let varonesConMasDe6;

	banderaNotaMasBaja = 0;
	acumuladorNota = 0;
	varonesConMasDe6 = 0;

	for(alumnos = 0; alumnos < 3; alumnos++)
	{
		notaIngresada = prompt("Ingrese la nota");
		notaIngresada = parseInt(notaIngresada);
		while(isNaN(notaIngresada == true) || notaIngresada < 0 || notaIngresada > 10)
		{
			notaIngresada = prompt("Error. Ingrese la nota");
			notaIngresada = parseInt(notaIngresada);
		}
		sexoIngresado = prompt("Ingrese su sexo");
		while(isNaN(sexoIngresado == false) || sexoIngresado != "f" && sexoIngresado != "m")
		{
			sexoIngresado = prompt("Error. Ingrese su sexo");
		}
		//a) El promedio de las notas totales.
		acumuladorNota = acumuladorNota + notaIngresada;

		//b) La nota más baja y el sexo de esa persona.
		if(banderaNotaMasBaja == 0 || notaIngresada < notaMasBaja)
		{
			notaMasBaja = notaIngresada;
			sexoNotaMasBaja = sexoIngresado;
			banderaNotaMasBaja = 1;
		}

		//c) La cantidad de varones que su nota haya sido mayor o igual a 6.
		if(sexoIngresado == "m" && notaIngresada > 6)
		{
			varonesConMasDe6++;
		}

	}
	//a:
	promedioNotas = acumuladorNota / alumnos;
	alert("El promedio de notas es " + promedioNotas);
	//b:
	if(banderaNotaMasBaja == 1)
	{
		alert("La nota mas baja es " + notaMasBaja + " y es de un estudiante de sexo " + sexoNotaMasBaja);
	}
	if(varonesConMasDe6 > 0)
	{
		alert("Los varones con mas de 6 son " + varonesConMasDe6);
	}
}

