/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	let edadIngresada;
 	let sexoIngresado;
 	let estadoCivil;
 	let sueldoBruto;
 	let legajo;
 	let nacionalidad;

 	edadIngresada = prompt("Ingrese su edad");
 	edadIngresada = parseInt(edadIngresada);

 	while(edadIngresada < 18 || edadIngresada > 90)
 	{
 		edadIngresada = prompt("Error. Ingrese una edad válida");
 	}


	sexoIngresado = prompt("Ingrese su sexo");

 	while(sexoIngresado != "F" && sexoIngresado != "M")
 	{
 		sexoIngresado = prompt("Error. Ingrese un sexo válido");
 	}

	estadoCivil = prompt("Indique su estado civil");
	estadoCivil = parseInt(estadoCivil);

 	while(estadoCivil < 1 && estadoCivil > 4)
 	{
 		estadoCivil = prompt("Error. Ingrese un numero válido");
 	}
	if(estadoCivil == 1)
 	{
		estadoCivil = "soltero";
	}

	else
	{
		if(estadoCivil == 2)
		{
			estadoCivil = "casado";
		}
		else
		{
			if(estadoCivil == 3)
			{
				estadoCivil = "divorciado";
			}
			else
			{
				estadoCivil = "viudo"
			}
		}
	}

	sueldoBruto = prompt("Ingrese su sueldo bruto");
 	sueldoBruto = parseInt(sueldoBruto);

	while(sueldoBruto < 8000)
	{
		sueldoBruto = prompt("Su sueldo bruto es muy bajo");
	}

	legajo = prompt("Introduzca su legajo");
 	legajo = parseInt(legajo);

	while(legajo < 1000 || legajo > 9999)
	{
		legajo = prompt("Error. Ingrese un legajo válido");
	}

	nacionalidad = prompt("Introduzca su nacionalidad");

	while(nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N")
	{
		nacionalidad = prompt("Error. Ingrese una nacionalidad válida");
	}

	document.getElementById('txtIdEdad').value = "Usted tiene " + edadIngresada + " años";
	document.getElementById('txtIdSexo').value = sexoIngresado;
	document.getElementById('txtIdEstadoCivil').value = "Usted es " + estadoCivil;
	document.getElementById('txtIdSueldo').value = "Su sueldo bruto es " + sueldoBruto;
	document.getElementById('txtIdLegajo').value = "Su legajo es " + legajo;
	document.getElementById('txtIdNacionalidad').value = nacionalidad;
	
 }