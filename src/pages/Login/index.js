import { useState } from 'react';
import './login.css'
import logo from '../img/Logom.jpg'
import { Link } from 'react-router-dom';

function Login(){
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        alert('clicou')
    }

    return(
        <div className='container-center'>
            <div className='login'>
                <div className='logo-area'>
                    <img src={logo} alt="Logotipo do sistema" />
                </div>

                <form onSubmit={handleSubmit}>
                    <h1>Entrar</h1>
                    <input type="text" placeholder="email@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="*******" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button type="submit">Acessar</button>
                </form>
                <Link to="/registro">Criar uma conta</Link>
                <br/>
            </div>
        </div>
    );
}

export default Login;