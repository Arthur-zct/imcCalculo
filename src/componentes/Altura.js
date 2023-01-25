import React from "react";


export default function Altura({altura, setAltura}){
    return (
        <div>
            <label>
                Altura
                <input type="text" value={altura} onChange={(e)=>{setAltura(e.target.value)} } />
            </label>
        </div>
    )
}