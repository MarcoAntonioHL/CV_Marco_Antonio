import React,{useState} from 'react';
import estilos from 'styled-components';
import BurguerMenu from './BurguerMenu';
import { Navbar, Nav, Container } from 'react-bootstrap';

function MenuDinamico(){
    const [clicked,setClicked]=useState(false);
    const handle=()=>{
        setClicked(!clicked);
    }
    const arreglo=["Acerca de mi","Experiencias","Formacion","Aptitudes e idiomas","Pasatiempo","Contactos"];
    return (
        <div>
            <MenuContainer>
            
                <a href="#ContenedorPortada">  <h2>Marco <span>Antonio</span></h2></a>
                <div className={`links ${clicked?'active':''}`}>
                    <ul id="menu" className="responsive">
                        <li><a href="#me">
                            {arreglo[0]}</a>
                        </li>
                        <li><a href="#experiencia">
                            {arreglo[1]}
                        </a>
                        </li>
                        <li><a href="#formacion">
                            {arreglo[2]}
                        </a></li>
                        <li><a href="#aptitudes">
                            {arreglo[3]}
                        </a></li>
                        <li><a href="#tiempolibre">
                            {arreglo[4]}
                        </a></li>
                        <li>
                            <a href="#contacto">
                                {arreglo[5]}
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='burger'>
                    <BurguerMenu value={clicked} handleClicked={handle}></BurguerMenu>
                </div>
            </MenuContainer>
        </div>
    )
}
export default MenuDinamico;
//despues de estilos podemos poner cualquier elemento html
const MenuContainer=estilos.nav`
    h2{
        font-weight:350;
        color:white;
        span{
            font-weight:bold;
        }
    }
    
    width:100%;
    position:fixed;
    padding:.1rem;
    background-color:#335;
    display:flex;
    justify-content:space-between;
    
    .links{
        position:absolute;
        top:-700px;
        left:-2000px;
        margin-left:auto;
        margin-rigth:auto;
        
        text-align:center;
        li a{
            color:white;
            font-size:1rem;
            display:block;
        }
        @media(min-width:768px){
            position:initial;
            margin:0;
             a{
                font-size:1rem;
                color:white;
                display:inline;
            }
        }
    }
    .links.active{
        width:100%;
        display:block;
        position:absolute;
        margin-left:auto;
        margin-rigth:auto;
        top:90%;
        left:0;
        rigth:0;
        text-align:center;
        li a{
            color:#335;
        }
    }
    
    .burger{
        
        @media(min-width:768px){
            display:none;
        }
    }
`