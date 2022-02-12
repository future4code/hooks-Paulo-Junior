//      EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO 1
// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado) // a. false

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado)  // b. false

// resultado = !resultado && (bool1 || bool2) 
// console.log("c. ", resultado) // C.true

// console.log("d. ", typeof resultado) // d.boolean

//      EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO 2
// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = primeiroNumero + segundoNumero // será concatenado os números, mas não somados, pois o navegador vai interpretar como uma string

// console.log(soma) 

//      EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO 3
// let primeiroNumero = Number(prompt("Digite um numero!"))
// let segundoNumero = Number(prompt("Digite outro numero!"))
// // o correto seria dessa forma, pois o browser iria saber que se trata de um tipo número

// const soma = primeiroNumero + segundoNumero // 

// console.log(soma) 


//          EXERCÍCIOS DE ESCRITA DE CÓDIGO 1
    // const idadeUser = Number(prompt('Qual a sua idade?'))
    // const idadeAmigo = Number(prompt('Qual a idade do seu melhor amigo(a)?'))

    // let diferenca = idadeUser > idadeAmigo

    // console.log('Sua idade é maior do que a do seu amigo?', diferenca)

    //          EXERCÍCIOS DE ESCRITA DE CÓDIGO 2

    // const user = Number(prompt('Digite um número par'))

    // console.log(user %2)
    // se inserir apenas número pares, o resto sempre será zero, porém se inserir número ímpar o resultado será o resto da divisão


    //          EXERCÍCIOS DE ESCRITA DE CÓDIGO 3
    //  const user = Number(prompt('Digite sua idade em anos', 'apenas números'))

    //  console.log('a sua idade em meses é:',user* 12)
    //  console.log('a sua idade em dias é:', user * 365)
    //  console.log('a sua idade em horas é:',user* 8760)

//          EXERCÍCIOS DE ESCRITA DE CÓDIGO 4

// const num1 = Number(prompt('digite um número!'))
// const num2 = Number(prompt('digite outro número'))

// console.log('O primeiro numero é maior que segundo?', num1 > num2)
// console.log('O primeiro numero é igual ao que segundo?', num1 === num2)
// console.log('O primeiro numero é divisível pelo segundo?', (num1 % num2)==0)
// console.log('O segundo numero é divisível pelo primeiro??', (num2 % num1)==0)

//                  Desafios 1
// desafio 1.a)
// const temperaturaF = 77
// const conversaoKelvin = (77 - 32)*(5/9) + 273.15
// const unidadeFemK = (1 - 32)*(5/9) + 273.15

// console.log(' 77º Fahrenheit são', conversaoKelvin, ' em Kelvin')
// console.log(' uma unidade Fahrenheit é equivalente a', unidadeFemK)

// desafio 1.b) 
// const tempCelsius = 80
// const conversaoFah = (80)*(9/5) + 32
// const unidadeCemF = (1)*(9/5) + 32

// console.log('80º Celsius em Fº seria:', conversaoFah,'e a unidade seria equivalente a',unidadeCemF)

// desafio 1.c)
// const tempCelsius = 30
// const conversaoFah = (30)*(9/5) + 32
// const fahemKelvin = (conversaoFah - 32)*(5/9) + 273.15
// const unidadeCemF = (1)*(9/5) + 32
// const unidadeFemK = (1 - 32)*(5/9) + 273.15

// console.log('30º Celsius em ºF são:', conversaoFah, ', e 30º Celsius em ºK são', fahemKelvin)
// console.log(' a unidade de ºC em ºF e de F em K são respectivamente,', unidadeCemF, 'e', unidadeFemK)

// desafio 1.d)
// const tempCelsius = Number(prompt('Digite a sua temperatura em graus Celsius','apenas números'))
// const conversaoFah = (tempCelsius)*(9/5) + 32
// const fahemKelvin = (conversaoFah - 32)*(5/9) + 273.15

// console.log('A sua temperatura em ºF é', conversaoFah, ' em em ºK é', fahemKelvin)

//         DESAFIO 2
// const quilowatt = 280
// const valor = quilowatt* 0.05
// const desconto = valor * 0.85

// console.log('O valor a ser pago pela residência é', valor, 'reais, porém com o desconto de 15% o valor fica em', desconto)

//              DESAFIO 3   
// desafio 3.a)
// const libra = 20
// const conversaoKg = libra/2.205

// console.log('20lb equivalem a', conversaoKg+'Kg')

// desafio 3.b)
// const onca = 10.5
// const conversaoKg = onca/35.274

// console.log('10.5oz equivalem a', conversaoKg+'Kg')

// desafio 3.c)
// const milha = 100
// const conversaoemmetros = milha * 1609

// console.log('100mi equivalem a', conversaoemmetros+'m')

// desafio 3.d)
// const pes = 50
// const conversaoemmetros = pes/3.281

// console.log('50ft equivalem a', conversaoemmetros+'m')

// desafio 3.e)
// const galao = 103.56
// const conversaoemlitros = galao * 3.785

// console.log('103.56gal equivalem a', conversaoemlitros+'l')

// desafio 3.f)
// const xic = 450
// const conversaoemlitros = xic * 28.413

// console.log('450 xic equivalem a', conversaoemlitros+'l')

//desafio 3.g)
const milha = Number(prompt('Digite um valor em milhas'))
const conversaoemmetros = milha * 1609

console.log(milha+'mi equivalem a', conversaoemmetros+'m')