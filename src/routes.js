import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Header from './components/Header';
import Formulario from './pages/Formulario';
import Login from './pages/Login';
import Registro from './pages/Registro';
import Cliente from './pages/Cliente';

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/sobre" element={<Sobre/>}/>
                <Route path="/contato" element={<Contato/>}/>
                <Route path="/formulario" element={<Formulario/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/registro" element={<Registro/>}/>
                <Route path="/cliente" element={<Cliente />}/>
            </Routes>
        </BrowserRouter>
    )

}

export default RoutesApp;