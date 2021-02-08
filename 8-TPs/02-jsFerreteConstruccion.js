/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	let largoDelTerreno;
	let anchoDelTerreno;
	let perimetro;
	let alambre;

	largoDelTerreno = document.getElementById('txtIdLargo').value;
	largoDelTerreno = parseInt(largoDelTerreno);

	anchoDelTerreno = document.getElementById('txtIdAncho').value;
	anchoDelTerreno = parseInt(anchoDelTerreno);

	perimetro = (largoDelTerreno + anchoDelTerreno) * 2;

	alambre = perimetro * 3;

	alert("Se deberán usar " + alambre + " mts de alambre");


}
function Circulo () 
{
	let perimetro;
	let radio;
	let alambre;
	const PI = 3.14; // La constante se inicializa cuando se la declara.

	radio = document.getElementById('txtIdRadio').value;
	radio = parseInt(radio);

	perimetro = 2 * PI * radio;

	alambre = perimetro * 3;

	alert("Se deberán usar " + alambre + " mts de alambre");

}
function Materiales () 
{
	let largoDelTerreno;
	let anchoDelTerreno;
	let area;
	let cemento;
	let cal;

	largoDelTerreno = document.getElementById('txtIdLargo').value;
	largoDelTerreno = parseInt(largoDelTerreno);

	anchoDelTerreno = document.getElementById('txtIdAncho').value;
	anchoDelTerreno = parseInt(anchoDelTerreno);

	area = largoDelTerreno* anchoDelTerreno;

	cemento = area * 2;

	cal = area * 3;

	alert("Para un area de " + area + " metros, necesito comprar " + cemento + " bolsas de cemento y " + cal + " bolsas de cal");
	
}