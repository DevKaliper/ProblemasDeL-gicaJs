// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
const ranInt = () => {
	let int = Math.round(Math.random() * 700);

	if (int <= 499 || int >= 601) {
		ranInt();
	} else console.log(int);
};

ranInt()




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

isCapicua(2002);




// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
const calFactorial= (number = undefined)=> {
	if (!number || typeof number !== "number") return console.log("coloca un número, por favor")
	if (number== 0) return console.log("El factorial de 0 es 1")
	let factorial = number 
	for (let x = 1; x < number; x++){
		factorial = factorial * x
	}
	return console.log(`El factorial de ${number} es: ${factorial}`)
}

calFactorial(5)