alert("Esta tarea consistia en realizar un script en el cual mediante un prompt se fueran agregando productos a un carrito de compras que se representaria con un array y al final se imprimiera el contenido de este arreglo")

const carrito = [];

let añadir=1;

while(añadir==1){
	let producto = prompt("ingrese el producto o deje un espacio en blanco para dear de añadir");
		if (producto == ""){
			alert("fin");
            añadir=0;
		}
		else{
			carrito.push(producto);
		}
}
alert("los productos son: "+carrito);
console.log(carrito)