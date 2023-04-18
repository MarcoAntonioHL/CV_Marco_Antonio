import React from "react";

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
        </div>
        <Cv></Cv>
      </div>
      
    </div>
    
  );
}
export default Portada;
