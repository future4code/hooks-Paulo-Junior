```js
function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
  const exercicios = ex*1
  const prova1 = p1*2
  const prova2 = p2*3
  let conceito = ''
  const media = (exercicios + prova1 + prova2) / 6
  if( media >= 9 ){
    conceito = 'A'
  }else if(media > 7.5){
    conceito = 'B'
  }else if(media >= 6){
    conceito ='C'
  }else if( media < 6){
    conceito = 'D'
  }
  
  return conceito
}
```