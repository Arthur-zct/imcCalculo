import React from "react";


export default function Calcular({peso, altura, resposta}){
    
    function calculo() {
       resposta(peso/(altura*altura))
    }
    
    
    return (
        <div>
            <button onClick={calculo}>Calcular</button>
        </div>
    )
}