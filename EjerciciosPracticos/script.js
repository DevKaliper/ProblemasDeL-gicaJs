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
