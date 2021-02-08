/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/

//El dato prompt, a diferencia de "alert", tiene dos botones: el de aceptar y cancelar.
// El dato prompt permite ingresar un dato 
function mostrar()
{
	//let nombre;

	//nombre = prompt("Introduzca su nombre");
	var nombre; //Definir variable
	
	//console.log(nombre);
	nombre = prompt("Ingrese su nombre ", "Natalia Natalia");
	//console.log(nombre);
	//nombre = "Juan";
	alert(nombre); //Se muestra la variable.

	/*console.log("hola");
	console.log(nombre);
	/*

	/*Solo se puede guardar un dato en la variable. Si yo inicializo  una variable con un nombre y 
	luego le doy otro nombre, el primer dato se "pisa" y se toma el segundo nombre */

}

