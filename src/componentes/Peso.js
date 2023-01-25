import React from "react";


export default function Peso({peso, setPeso}){
    return (
        <div>
            <label>
                Peso
                <input type="text" value={peso} onChange={(e)=>{setPeso(e.target.value)} } />
            </label>
        </div>
    )
}