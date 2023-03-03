import "./MenuStyle.css";

function Menu(){
    const arreglo=["Acerca de mi","Experiencias","Formacion","Aptitudes e idiomas","Pasatiempo","Contactos"];

    return(
    <>
        <div className="Menu">
            <div className="Logo">
                <a href="#ContenedorPortada"> Logo</a>
            </div>
            <nav>
                <ul>
                    
                    <li>
                        <a href="#me">
                            {arreglo[0]}
                        </a>
                    </li>
                    <li>
                        <a href="#experiencia">
                            {arreglo[1]}
                        </a>
                    </li>
                    <li>
                        <a href="#formacion">
                            {arreglo[2]}
                        </a>
                    </li>
                    <li>
                        <a href="#aptitudes">
                            {arreglo[3]}
                        </a>
                    </li>
                    <li>
                        <a href="#tiempolibre">
                            {arreglo[4]}
                        </a>
                    </li>
                    <li>
                        <a href="#contacto">
                            {arreglo[5]}
                        </a>
                    </li>   

                </ul>
            </nav>
        </div>
    </>
    )
}
export default Menu;