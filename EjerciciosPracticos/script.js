// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

function readString(string) {
	try {
		if (typeof string !== "string") {
			throw new Error();
		} else {
			console.log(string.length);
		}
	} catch (error) {
		console.log(`has colocado un ${typeof string} y no una cadena de texto`);
	}
}

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

function shortString(string, number = string.length) {
	try {
		if (typeof string !== "string" && typeof number !== "number") {
			throw new Error();
		} else {
			console.log(string.slice(0, number));
		}
	} catch (error) {
		console.log(`has colocado un ${typeof string} y no una cadena de texto`);
	}
}

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

function toArray(string, caracter = " ") {
	try {
		if (typeof string !== "string"&& typeof caracter !== "string") {
			throw new Error();
		} else {
			console.log(string.split(caracter));
		}
	} catch (error) {
		console.log(`has colocado un ${typeof string} y no una cadena de texto`);
	}
}

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.


function strRepeat(string, number=0) {
	try {
		if (typeof string !== "string" && typeof number !== "number") {
			throw new Error();
		} else {
            string = string + " "
			console.log(string.repeat(number));
		}
	} catch (error) {
		console.log(`has colocado un ${typeof string} y no una cadena de texto`);
	}
}

strRepeat("Hola mundo", 3)