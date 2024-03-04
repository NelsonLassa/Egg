import React from "react";

const Plato = (promps) => {
    return (
        <div className="contenedor">
            <h2>{promps.nombre}</h2>
            <p>{promps.descrip}</p>
            <img src={promps.imagen}/> 
            <h4>{promps.precio}</h4>
        </div>
    );
};

export default Plato;