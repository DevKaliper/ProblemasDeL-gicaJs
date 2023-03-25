// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

const readString = (string = "") =>
	!string || typeof string != "string"
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


