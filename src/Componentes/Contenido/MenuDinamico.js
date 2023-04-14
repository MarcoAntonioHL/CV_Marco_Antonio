import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
function MenuDinamico(){
    return (
        <div>
            <nav>
                <button>☰</button>
                <ul id="menu" class="responsive">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Hamburguesas</a></li>
                    <li><a href="#">Bebidas</a></li>
                    <li><a href="#">Postres</a></li>
                    <li><a href="#">Contacto</a></li>
		        </ul>
            </nav>
        </div>
    )
}
export default MenuDinamico;