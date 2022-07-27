import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
    test("Verifica se o array contém items duplicados", ()=>{
        const checa = checaItensDuplicados([1,2,1])

        expect(checa).toEqual(true)
    })

    test("verifica se o array contém itens duplicados", () =>{
        const checa = checaItensDuplicados(["f", "d", "e", "f"])

        expect(checa).toEqual(true)
    })
});
