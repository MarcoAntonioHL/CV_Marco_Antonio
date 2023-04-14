import { Grid } from "@mui/material";
import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


export function Presentacion(){
    const datos={
        telefono:"928751897",
        dni:"73498020",
        email:"marco.hl9antonio@gmail.com",
    }

    return(
        
        <div className="contenedorPresentacion">
            <div id="ParteIzquierda">
                <img src="images/Me.jpeg" style={{width:"100%"}}></img>
            </div>
            <div id="ParteDerecha">
                <p>Marco Antonio Huaman Lonconi</p>
                <div id="Datos">
                    <p>Telefono:<br></br>{datos.telefono}</p>
                    <p>Dni:<br></br>{datos.dni}</p>
                    <p>Email:<br></br>{datos.email}</p>
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
    )
}