import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';

export function Sigueme(){
    return( 
    <>
        <div className="PiePagina" style={{backgroundImage:"url(/images/fondoContraste.jpg)"}}>
            <div className="Contactos" >
            
            <a href="https://github.com/MarcoAntonioHL">
                <img src="images/github.png" className="git"></img>
            </a>
            
            
            <a href="https://web.facebook.com/marcoantonio.huamanlonconi">
                <img src="images/fbk.png" className="fb"></img>
            </a>
            
            
            <a href="https://www.instagram.com/marcohlantonio/">
                <img src="images/insta.png" className="insta"></img>
            </a>
            
            
            <a>
                <img src="images/whats.png" className="whats"></img>
            </a>
            {/*<p> by Marco Antonio huaman lonconi</p>*/}
            </div>
        
        </div>
    </>
    )
}