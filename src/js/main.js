// let myFirstNumber = 5
// let mySecondNumber = "2"

// document.write(myFirstNumber)
// console.info(myFirstNumber * mySecondNumber)
// console.info(myFirstNumber - mySecondNumber)
// console.info(myFirstNumber / mySecondNumber)
// console.info(myFirstNumber + Number(mySecondNumber)) //se le debe poner "number" a la segunda variable que es de tipo string para convertir y operar la suma

// let myFirstNumber = 5.00001
// document.write(myFirstNumber)

// console.info(typeof(myFirstNumber))
// console.info(Number.isInteger(myFirstNumber))

// const number1 = 50_000_000_000
// const number2 = 50_000_000_000
// const number3 = 85

// console.info(number1 + number2)
// console.info(number1 - number2)
// console.info(number1 * number2)
// console.info(number1 / number2)
// console.info(Number.isFinite(number1 * number2))
// console.info(Number.MAX_VALUE)
// console.info(Number.MIN_VALUE)
// console.info(Math.PI)

// const exampleNumber = 848

// console.info(exampleNumber)
// console.info((exampleNumber).toExponential(5))//exponencial a la 5
// console.info(exampleNumber.toString(2))//se pone el 2 dentro de parentesis para poner el numero en binario
// console.info(exampleNumber.toString(8))//para ponerl el nùmero en octal
// console.info(exampleNumber.toString(16))//para ponerlo en versiòn hexadecimal

// const example = 5.12
// document.write(example)

// console.info(example.toFixed())
// console.info(example.toFixed(2))
// console.info(example.toFixed(3))
// console.info(example.toFixed(4))//se pone entre parentesis el numero de decimales que quiero, en este caso 4 decimales
// console.info(example.toFixed(100))

// const numeroParaRedondear = 3.7
// document.write(numeroParaRedondear)

// console.info(Math.round(numeroParaRedondear))//para redondear, en este caso redondea a 4
// console.info(Math.floor(numeroParaRedondear))//me retrocede el nùmero osea me lo redondea al nùmero menor, asì estè mas cerca del pròximo
// console.info(Math.ceil(numeroParaRedondear))//me lo redondea hacia arriba
// console.info(Math.trunc(numeroParaRedondear))//simlar al floor 

//# opcion 1
// const nummeroAleatorio = Math.trunc(Math.random() * 100)
// document.write(nummeroAleatorio)

// const nummeroAleatorioConRango = parseInt(Math.random() * 100)
// document.write(nummeroAleatorioConRango)

// const nummeroAleatorio = Math.trunc(Math.random() * (100-50+1) + 50)//numero aleatorio del 50 al 100.
// document.write(nummeroAleatorio)

// //(valorSuperior - valorInferior + 1) + valorInferior
// const nummeroAleatorioConRango = Math.trunc(Math.random() * (500 - 200 + 1) + 200)//formula para numeros aleatorios entre 200 y 500.
// document.write(nummeroAleatorioConRango)

// CLASE MATH Y SUS METODOS MAS USADOS

// console.log(Math.abs(-50))//valor absoluto

// console.log(2*2)
// console.log(Math.pow(2,80))//para elevar el 2 a la 80

// console.log(Math.sqrt(452381))//raìz cuadrada
// console.log(Math.cbrt(558632))//raìz cùbica

// let numero = +42

// if(numero>0) {
//     console.log("positivo")
// } else {
//     console.log("negativo")
// }

// console.log(Math.sign(-486245258))

// listaNumeros = [1,5,3,9]

// console.log(listaNumeros.sort())//para ordenar lista del menor al mayor.
// console.log(Math.max(...listaNumeros))// solo para poner el nùmero mayorde la lista
// console.log(Math.min(...listaNumeros))//solo para poner el nùmero menor de la lista
