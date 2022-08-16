import { Link } from 'react-router-dom';
import './style.css';

function Header(){
    return(
        <header>
            <h2>Construção Reforma Ampliação - Faça sua obra acontecer</h2>
            <div className="menu">
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/contato">Contato</Link>
                <Link to="/formulario">Seja um parceiro</Link>
                <Link to="/login">Login</Link>
            </div>
        </header>
    )
}

export default Header;