```js
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui

    const search = arrayDeNumeros.filter(value => value == numeroEscolhido)
    let frase = ''
    if(search.length > 0){
        frase = `O número ${numeroEscolhido} aparece ${search.length}x`
    }else{
        frase = `Número não encontrado`
    }
    
    return frase
}
```