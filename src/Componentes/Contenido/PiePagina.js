import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function PiePagina(){
    const Datos={
        correo:"marco.hl9antonio@gmail.com",
        telefono:"928751897"
    }
    return(
    <>
        <div className="Pie_pagina">
            <p>
                Telefono:<br></br>{Datos.telefono}
            </p>
            <p>
                Correo:<br></br>{Datos.correo}
            </p>
            
            <div>
                    <p>Sígueme</p>
                    <a href="https://web.facebook.com/marcoantonio.huamanlonconi" style={{color:"black",margin:"10px"}}><FacebookIcon></FacebookIcon></a>
                    <a href="https://github.com/MarcoAntonioHL" style={{color:"black",margin:"10px"}}><GitHubIcon></GitHubIcon></a>
                    <a href="https://www.instagram.com/marcohlantonio/" style={{color:"black",margin:"10px"}}><InstagramIcon></InstagramIcon></a>
                    <a ><WhatsAppIcon></WhatsAppIcon></a>
            </div>
            <div>
                <div><h6>2023 Creado por Marco Antonio Huaman Lonconi</h6></div>
            </div>
        

        </div>
    </>
    )
}
export default PiePagina;