import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import "./Portada.css";
import { Foto } from "./FotoPortada";
import Menu from "./Menu";

function Portada() {
  return (
    <div id="ContenedorPortada">
      <Menu></Menu>
      <div
        className="ImgCabecera"
        style={{ backgroundImage: "url(/images/fondo2.jpg)" }}
      >
        <Foto></Foto>
        
        <Grid container spacing={3}>
          <Grid item xs={4} md={4}>
                
          </Grid>
          <Grid item xs={4} md={4}>
            <div>
              <p className="FuenteCabecera">Marco Antonio Huaman Lonconi</p>
            </div>
          </Grid>
          
        </Grid>
      </div>
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
      
    </div>
    
  );
}
export default Portada;
