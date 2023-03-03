import React from "react";
import "./contenido.css";
function Contactos(){
    const Datos={
        correo:"marco.hl9antonio@gmail.com",
        telefono:"928751897"
    }
    return (
    <>
        <div className="contenedorContacto">
            <div id="contacto">
                <h2>CONTACTOS</h2>
                <div>
                    <p className="Correo">
                        {Datos.correo}
                    </p>
                    <p className="celular">
                        {Datos.telefono}
                    </p>
                </div>
            </div>
        </div>
    </>
    )
}
export default Contactos;