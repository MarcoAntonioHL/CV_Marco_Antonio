import Portada from './Componentes/Portada';
import './App.css';
//import { Foto } from './Componentes/FotoPortada';
import Sobremi from './Componentes/Contenido/AcercaDe';
import Experiencias from './Componentes/Contenido/Experiencia';
import Formacion from './Componentes/Contenido/Formacion';
import Aptitudes from './Componentes/Contenido/Aptitudes';
import Pasatiempo from './Componentes/Contenido/pasatiempos';
import Contactos from './Componentes/Contenido/Contactos';
import PiePagina from './Componentes/Contenido/PiePagina';
function App() {
  return (
    <div className="App" >
      <Portada></Portada>
      <div className='fondo1' ></div>
      <div className='fondo2'></div>
      <div className='fondo3'></div>
      <Sobremi></Sobremi>
      <Experiencias></Experiencias>
      <Formacion></Formacion>
      <Aptitudes></Aptitudes>
      <Pasatiempo></Pasatiempo>
      <PiePagina></PiePagina>
      {/*<Contactos></Contactos>*/}
    </div>
  );
}

export default App;
