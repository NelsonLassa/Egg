import React from "react";
import Plato from "./Plato";

const ListaPlato = () => {
    return (
        <div className="postres">
            {/* pucha */}
            <Plato 
            nombre = "Helado"
            descrip = "Frio y se hace con la mano"
            imagen = "https://images.cookforyourlife.org/wp-content/uploads/2020/06/Chocolate-Whipped-Ice-Cream-shutterstock_1010248351.jpg"
            precio = "$2200.00"
            />
            <Plato
             nombre = "Helado"
             descrip = "Frio y se hace con la mano"
             imagen = "https://images.cookforyourlife.org/wp-content/uploads/2020/06/Chocolate-Whipped-Ice-Cream-shutterstock_1010248351.jpg"
             precio = "$2200.00"
            />
        </div>
    )
}

export default ListaPlato;