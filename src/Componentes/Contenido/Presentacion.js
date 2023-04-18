
import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import presentacion from 'styled-components';

export function Presentacion(){
    const datos={
        telefono:"928751897",
        dni:"73498020",
        email:"marco.hl9antonio@gmail.com",
    }

    return(
        
        <Bloques className="contenedorPresentacion">
                <div id="ParteIzquierda">
                    <img src="images/perfil.png" style={{width:"100%"}}></img>
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
            
        </Bloques>

    )
}

const Bloques=presentacion.div`
    
    display:block;
    width:65%;
    background-color: rgba(0,0,0,0.2);
    height:550px;
    #ParteIzquierda{
        width: 100%;
        height:270px;
        display: flex;
        align-items: center;
        #ParteIzquierda img{
            object-fit: cover;
            width: 100%;
            height: 100%;}
    }
    @media(min-width:760px){
        display: flex;
        background-color: rgba(0,250,0,0.2);
        width: 60%;
        height: 350px;
        #ParteIzquierda{
            width: 100%;
            height:350px;
            display: flex;
            align-items: center;
            #ParteIzquierda img{
                object-fit: cover;
                width: 100%;
                height: 100%;}
        }
        #ParteDerecha{
            width: 100%;
            margin: 20px;
            padding:0%;
        }
    }
    
`