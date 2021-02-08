/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	// Reservo espacio en la memoria para el nombre del usuario.
	let nombre;
	let apellido;

	/*
	nombre = "Maria";
	apellido = "Lopez";
	*/

	// Pido el nombre por prompt. El prompt siempre tiene un "=" antes.
	nombre = prompt("Ingrese su nombre: ", "nadie");
	apellido = prompt("Ingrese su apellido: ", "nadie");

	document.getElementById("txtIdNombre").value = nombre + " " + apellido;

	/*
	alert("Su nombre ingresado es: " + nombre + ", " + apellido);
	console.log("Su nombre ingresado es: " + nombre + ", " + apellido);
	*/

	// Imprimo el  con ID (el mismo que le pedí al usuario).
	
	// El console.log es para el desarrollador. Se ve desde la consola.
}

