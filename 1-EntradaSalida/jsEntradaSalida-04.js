/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	// Reservo espacio en la memoria para el nombre del usuario.
	let nombre;

	// Pido el nombre por prompt.
	nombre = prompt("Ingrese su nombre");

	// Imprimo el nombre con ID (el mismo que le pedí al usuario).
	document.getElementById("txtIdNombre").value = nombre;
}

