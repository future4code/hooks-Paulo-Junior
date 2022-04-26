import React from "react";
import './CardPequeno.cs🇸'

function CardPequeno(props) {
    return(
        <div className="card-pequeno-container">
            <img src={props.imagem}/>
            <p> {props.texto} </p>

        </div>
    )
}

export default CardPequeno;