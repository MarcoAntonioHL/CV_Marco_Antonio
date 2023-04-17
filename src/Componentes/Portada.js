import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import "./Portada.css";
//import { Foto } from "./FotoPortada";
import Menu from "./Menu";
import { Presentacion } from "./Contenido/Presentacion";
import { Sigueme } from "./Contenido/Sigueme";
import MenuDinamico from "./Contenido/MenuDinamico";
import Cv from "./Contenido/Curriculum";

function Portada() {
  return (
    <div id="ContenedorPortada">
      
      <MenuDinamico></MenuDinamico>
      <div
        className="ImgCabecera"
        style={{ backgroundImage: "url(/images/fondo2.jpg)" }}
      >
        <div className="PresentacionFoto">    
          <Presentacion ></Presentacion>
        {/*<Foto></Foto>*/}
        </div>

        {/*<Grid container spacing={3}>
          <Grid item xs={4} md={4}>
                
          </Grid>
          <Grid item xs={4} md={4}>
            <div>
            
              <p className="FuenteCabecera">Marco Antonio Huaman Lonconi</p>
            </div>
          </Grid>
          
  </Grid>*/}
          <Cv></Cv>
      </div>
      
    </div>
    
  );
}
export default Portada;
