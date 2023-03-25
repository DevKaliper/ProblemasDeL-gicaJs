/* console.log("---------Manejo de errores---------");

// Manejo de errores
try {
	console.log("Colocando el codigo a evaluar");
} catch (error) {
	console.log("Catch captura cualquier error que Hubo acá");
}
// finally{
//     console.log("Este bloque finally se ejecutará siempre al final de un bloque try catch")

// }

try {
	let numero = 9;
	if (isNaN(numero)) {
		throw new Error("El carácter introducido no es un número");
	}
	console.log(numero * numero + 5);
} catch (error) {
	console.log(`Ha ocurrido el siguiente error ${error}`);
	console.log("Introduce un número por favor");
}

// break and continue
console.log("---------Breack and continue---------");
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let x of numeros) {
	if (x % 2 != 0) {
		continue;
	}
	console.log(x);
}

// Destructuración
console.log("---------Destructuración---------");

const persona = {
	nombre: "Manuel",
	apellido: "Leon",
	edad: 18,
};

const { nombre, apellido, edad } = persona;

console.log(nombre, apellido, edad);

// Objetos literales
console.log("---------Objetos literales---------");
let dogName = "Ares",
	dogAge = 2;

const dog = {
	dogName,
	dogAge,
	bark() {
		console.log("gauff gauff");
	},
};

console.log(dog);

// Arrow functions
console.log("---------Arrow functions---------");

const saludar = () => {
	console.log("HOla");
};

saludar(); */

// // Prototipos
// console.log("---------Prototipos---------");
// function Animal(nombre, genero) {
// 	this.nombre = nombre;
// 	this.genero = genero;
// }

// Animal.prototype.saludar = function () {
// 	console.log(`Hola soy ${this.nombre}`);
// };

// let Ares = new Animal("Ares", "Perro");
// Ares.saludar();

// //herencia de prototipos
// console.log("---------Herencia de Prototipos---------");

// function Perro(nombre, genero, tamanio) {
// 	//super manda a llamar el constructor de la clase padre
// 	this.super = Animal;
// 	this.super(nombre, genero);
// 	this.tamanio = tamanio;
// }

// //perro está heredando de animal

// Perro.prototype = new Animal()
// Perro.prototype.constructor=Perro

// Perro.prototype.saludar=function(){
//     console.log("Guaff guaff")
// }

//clases
console.log("---------Clases---------");
class Animal {
	constructor(nombre, genero) {
		this.nombre = nombre;
		this.genero = genero;
	}

	caminar() {
		console.log(`Soy ${this.nombre} y estoy caminando, perra!`);
	}
}

//extends para heredar
class Perro extends Animal {
	constructor(nombre, genero, tamanio) {
		//super manda a llamar el constructor de la clase padre
		super(nombre, genero);
		this.tamanio = tamanio;
		this.raza = null;
	}

	bark() {
		console.log("Guafff guafff");
	}
	get getRaza() {
		return this.raza;
	}

	set setRaza(raza) {
		this.raza = raza;
	}
}
let Ares = new Animal("Ares", "Macho");

Ares.caminar();

let Zeus = new Perro("Zeus", "Macho", "normal");

Zeus.caminar();
Zeus.bark();

Zeus.setRaza = "Rottweiler";
console.log(Zeus.getRaza);

console.log("---------Console---------");

console.log("---------Expresiones regulares---------");
let prueba = /a{2,}/;

let cadena = "alkdjalsdjflaewrer214lajdslaskjasjpgxlthz@gmail.comruebaasfaf";

console.log(prueba.exec(cadena));

console.clear();
console.log("---------Import and export---------");
 