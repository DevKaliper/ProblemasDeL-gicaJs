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
