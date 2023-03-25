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
