// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

const readString = (string = "") =>
	!string || typeof string != "strig"
		? console.log(`Dejaste la cadena vacía o no colocaste una cadena`)
		: console.log(
				`tu cadena es "${string}" y tiene: ${string.length} elementos`
		  );

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

const shortString = (string = "", number = undefined) =>
	!string || typeof string !== "string" || number == undefined
		? console.log(
				"ocurrió un error, no colocaste una cadena de texto o se te olvidó el número a recortar"
		  )
		: console.log(
				`tu cadena es: "${string}" y la nueva cadena es: "${string.slice(
					0,
					number
				)}"`
		  );

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

const stringToArray = (string = "", character = undefined) =>
	!string || typeof string !== "string"
		? console.log("No has escrito una cadena de texto")
		: character === undefined
		? console.log("No has escrito un seperador")
		: console.log(string.split(character));

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

const strRepeat = (string = "", number = undefined) => {
	if (!string || typeof string !== "string") {
		return ("No has colocado un string");
	} else if (number === undefined || typeof number !== "number") {
		return ("No has colocado un número");
	} else {
		string = string + " ";
		return (string.repeat(number));
	}
};


// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
const reverseString = (string = "") => {
	!string || typeof string !== "string"
		? console.log("No ingresaste una cadena de texto")
		:console.log(string.split("").reverse().join(""))
};

// reverseString("Hola Mundo");

// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
const wordCount = (string = "", word = "") => {
	if (!string || typeof string !== "string")
		return console.log("no has ingresado un string");

	if (!word || typeof word == "object")
		return console.log("no has ingresado un string a buscar");

	let count = 0;
	string = string.split(" ");
	for (x of string) {
		if (x == word) {
			count++;
		}
	}

	return console.log(count);
};

// wordCount("Hola mundo adios mundo", "mundo")

// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
const palindromo = (string = "") =>
	!string || typeof string !== "string"
		? console.log("No has agregado un string")
		: reverseString(string) == string
		? console.log(true)
		: console.log(false);

// palindromo("Salas")

// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
const removePatter = (string = "", pattern = "") => 
	!string || typeof string !== "string"
		?console.log("no has ingresado un string")
		: !pattern || typeof pattern !== "string"
			?console.log("no has ingresado un string como patrón a eliminar")
			:console.log(string.replace(new RegExp(pattern, "ig"), ""))
// removePatter("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")

// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
const ranInt = () => console.log(Math.round((Math.random() * 100) +500))	 ;
 
// ranInt()




// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
const isCapicua = (number = undefined) => {
	if (!number || typeof number !== "number")
		return console.log("No has introducido un número");

	return console.log(
		number.toString().split("").reverse().join("") == number.toString()
			? `${number} sí es capicua`
			: `${number} no es capicua`
	);
};

// isCapicua(2002);




// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
const calFactorial= (number = undefined)=> {
	if (!number || typeof number !== "number") return console.log("coloca un número, por favor")
	if (number== 0) return console.log("El factorial de 0 es 1")
	if (number < 0) return console.log("El número debe ser positivo")
	let factorial = number 
	for (let x = 1; x < number; x++){
		factorial*= x
	}
	return console.log(`El factorial de ${number} es: ${factorial}`)
}

calFactorial(8)

// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
const isPrime = (number = undefined) => {
	if (!number || typeof number !== "number")
		return console.log("Ingresa un número, no esa cosa rara que ingresaste");

	const primeInitial = "2,3,5,7,11";
	if (primeInitial.includes(number)) return console.log(true);
	if (number == 1) return console.log(false);

	if (
		number / 1 == number &&
		number / number == 1 &&
		number % 2 !== 0 &&
		number % 3 !== 0 &&
		number % 5 !== 0 &&
		number % 7 !== 0 &&
		number % 11 !== 0
	) {
		return console.log(true);
	} else {
		return console.log(false);
	}
};

// isPrime(941);

// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
const isEven = (number = undefined) =>
	number == 0
		? console.log("El 0 es un número par")
		: !number || typeof number !== "number"
		? console.log("ingresa un número por favor")
		: number % 2 == 0
		? console.log(`el ${number} es par`)
		: console.log(`el ${number} es impar`);

// isEven(2);

// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
const gradeConversor = (number = undefined, grade = undefined) => {
	if (number == undefined || typeof number !== "number")
		return console.log("Coloca un número, por favor.");
	if (!grade || typeof grade !== "string")
		return console.log("Coloca una medida, por favor");


	if (grade.toLowerCase() == "c") {
		return console.log(toFarenheit(number));
	} else if (grade.toLowerCase() == "f") {
		return console.log(toCelcius(number));
	} else {
		return console.log("esa medida no la reconozco");
	}



	function toFarenheit(number) {
		return `${(number * 9) / 5 + 32}°F `;
	}

	function toCelcius(number) {
		return `${((number - 32) * 5) / 9}°C`;
	}
};

gradeConversor(0, "C");


// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

const discount = (number = undefined, dis = undefined) => {
	if (!number || typeof number !== "number")
		return console.log("no obtendrás nada, pendejo");
	if (!dis || typeof dis !== "number")
		return console.log("no obtendrás nada, pendejooooo");

	return console.log(`tu descuento es de ${number - dis * 0.01 * number}`);
};

discount(1000, 20);

// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

const getAnio = (date) => {
	if (!(date instanceof Date))
		return console.log("Coloca una fecha válida por favor.");

	let newDate = new Date().getTime() - date.getTime(),
		monthsAgo = 1000 * 60 * 60 * 24 * 365;
	mesesHumanos = Math.floor(newDate / monthsAgo);

	return Math.sign(mesesHumanos) === -1
		? console.log(`Faltan ${Math.abs(mesesHumanos)} años para el ${date.getFullYear()}`)
		: Math.sign(mesesHumanos) === 1
		? console.log(`Han pasado ${mesesHumanos} años desde el ${date.getFullYear()}`)
		: console.log(`Estamos el mes actual ${date.getFullYear()}`);
};
getAnio(new Date(2033, 02, 26));
