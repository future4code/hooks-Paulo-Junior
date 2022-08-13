const nome: string = "Paulo"
const data : string = "09/12/1992"
const splitted = data.split("/")

console.log(` Olá meu nome é ${nome}, nasci no dia ${splitted[0]}, no mês ${splitted[1]}, do ano de ${splitted[2]}`)