console.log("Callbacks")


function cuadradoNumero (num, callback){
    setTimeout(() => {
        callback(num, num * num)
        
    }, 0 );

}


// cuadradoNumero(0, (value, result)=>{
//     console.log("HOla")
//     console.log(`el número es ${value} y el resultado es ${result}`)
//     cuadradoNumero(1, (value, result)=>{
      
//         console.log(`el número es ${value} y el resultado es ${result}`)
//     })
//     cuadradoNumero(2, (value, result)=>{
      
//         console.log(`el número es ${value} y el resultado es ${result}`)
//     })
//     cuadradoNumero(3, (value, result)=>{
      
//         console.log(`el número es ${value} y el resultado es ${result}`)
//     })
//     cuadradoNumero(4, (value, result)=>{
      
//         console.log(`el número es ${value} y el resultado es ${result}`)
//     })
// })

console.clear()
console.log("Promesas")

function cuadradoPromesas (num){
    if (typeof num !== "number") return Promise.reject(`${num} no es una cadena de texto, es un ${typeof num}`)
    return new Promise((resolve, reject )=>{
        setTimeout(() => {
            resolve({
                num,
                result: num *num
            })
            
        }, 0 | Math.random() * 1000 );
        
    })
}

async function AsyncCuadrado (){
try {
    let cuadrado= await cuadradoPromesas(0)
    console.log(`el número es ${cuadrado.num} y el resultado es ${cuadrado.result}`)
     cuadrado= await cuadradoPromesas(1)
    console.log(`el número es ${cuadrado.num} y el resultado es ${cuadrado.result}`)
     cuadrado= await cuadradoPromesas(2)
    console.log(`el número es ${cuadrado.num} y el resultado es ${cuadrado.result}`)
     cuadrado= await cuadradoPromesas(3)
    console.log(`el número es ${cuadrado.num} y el resultado es ${cuadrado.result}`)
    
} catch (error) {
    console.log(error)
    
}
}

AsyncCuadrado()