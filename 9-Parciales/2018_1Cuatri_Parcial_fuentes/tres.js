function mostrar()
{
	let precio;
	let descuento;
	let precioFinal;

	precio = prompt("Ingrese el precio");
	precio = parseInt(precio);

	descuento = prompt("Ingrese el descuento");
	descuento = parseInt(descuento);

	precioFinal = precio - precio * descuento / 100;

	document.getElementById('elPrecioFinal').value = "El precio final es " + precioFinal;
}
