/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombre;

	let edad;

	let apellido;

	nombre = document.getElementById("txtIdNombre", "José").value;

	edad = document.getElementById("txtIdEdad", "66").value;

	//apellido = prompt("Ingrese su apellido", "Perez");

	//alert("Usted se llama " + nombre + ", " + apellido + " y tiene " + edad + " años");

	alert("Usted se llama " + nombre + " y tiene " + edad + " años");

	//alert(`Usted se llama ${nombre} y tiene ${edad}`)
}

