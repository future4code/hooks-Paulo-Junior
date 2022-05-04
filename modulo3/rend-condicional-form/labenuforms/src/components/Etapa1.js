import React from "react";



class Etapa1 extends React.Component{
    render(){
    return (
        <div>
            <h3>Etapa 1 - Dados Gerais</h3>
            <h5>1 - Qual o seu nome?</h5>
            <input></input>
            <h5>2 - Qual a sua idade?</h5>
            <input></input>
            <h5>3 - Qual seu email?</h5>
            <input></input>
            <h5>4 - Qual a sua escolaridade?</h5>
            <select name="select">
                <option value="Ensino médio incompleto">Ensino médio incompleto</option>
                <option value="Ensino médio completo">Ensino médio Completo</option>
                <option value="Ensino superior incompleto">Ensino superior incompleto</option>
                <option value="Ensino superior completo">Ensino superior completo</option>
            </select>
        </div>
    );
    }
}

export default Etapa1;