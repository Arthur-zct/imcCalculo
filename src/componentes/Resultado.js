import React from "react";


export default function Resultado({result}){   
    return (
        <div>
            <p>Resultado: {result.toFixed(2)}</p>
        </div>
    )
}