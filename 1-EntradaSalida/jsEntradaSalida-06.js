/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//ParseInt convierte texto en numero. Parciar es convertir un dato que no es numérico en numérico
	//Castear es convertir un tipo de dato numérico en otro tipo de dato numérico (parseFloat, permite el punto ".").

	/*Existen los errores de sintaxis (como escribir mal las funciones, variables, etc.) y los errores de lógica
	(como seguir mal los pasos, etc. Usualmente sucede cuando el programa no funciona)*/

	//"NaN" sifnifica "Not A Number". Puede aparecer cuando se intenta sumar algo que no es un numero.

	let variableUno;
	let variableDos;
	let suma;

	//variableUno = parseInt(document.getElementById('txtIdNumeroUno').value);
	// ParseInt no transforma algo, lo retorna.

	variableUno = document.getElementById('txtIdNumeroUno').value;
	variableUno = parseInt(variableUno);

	variableDos = document.getElementById('txtIdNumeroDos').value;
	variableDos = parseInt(variableDos);


	suma = variableUno + variableDos;

	alert("La suma es: " + suma);
}

