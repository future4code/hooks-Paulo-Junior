// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length

}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    const arrayOrdenada = array.sort((a, b) => {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0
    })
    return arrayOrdenada
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const numPar = array.filter(obj => obj % 2 == 0)
    return numPar
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const numPar = array.filter(obj => obj % 2 == 0)
    const potencia = numPar.map(obj => obj ** 2)

    return potencia
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i];
        }
    } return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero; 
    let menorNumero;
    let maiorDivisivelPorMenor = false
  
  if(num1 > num2){
   maiorNumero = num1
   menorNumero = num2
  }else{
     maiorNumero = num2
     menorNumero = num1
  }
  
  if(maiorNumero % menorNumero === 0 ){
      maiorDivisivelPorMenor = true
  }
  
    const diferenca = maiorNumero - menorNumero
  
  
  const myobj = {
    'maiorNumero': maiorNumero,
    'maiorDivisivelPorMenor': maiorDivisivelPorMenor,
    'diferenca': diferenca
  }
  return myobj
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let array = []
    for(let i =0 ; array.length < n; i++){
        if(i % 2 == 0){
            array.push(i)
        }
    }
    return array
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}