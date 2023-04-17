import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

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
                <h2 className="titulo">CONTACTOS</h2>
                <div className="letrasContenido">
                    <p className="Correo">
                        Correo:<br></br>{Datos.correo}
                    </p>
                    <p className="celular">
                        Telefono:<br></br>{Datos.telefono}
                    </p>
                    <div>
                            <p>SIGUEME</p>
                            <a href="https://web.facebook.com/marcoantonio.huamanlonconi" style={{color:"black",margin:"10px"}}><FacebookIcon></FacebookIcon></a>
                            <a href="https://github.com/MarcoAntonioHL" style={{color:"black",margin:"10px"}}><GitHubIcon></GitHubIcon></a>
                            <a href="https://www.instagram.com/marcohlantonio/" style={{color:"black",margin:"10px"}}><InstagramIcon></InstagramIcon></a>
                            <a ><WhatsAppIcon></WhatsAppIcon></a>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
export default Contactos;