import { useState } from 'react';

import logo from '../img/Logom.jpg'
import { Link } from 'react-router-dom';

function Registro(){
    const[nome, setNome] = useState('');
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
                    <h1>Cadastro</h1>
                    <input type="text" placeholder="Seu nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                    <input type="text" placeholder="email@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="*******" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button type="submit">Cadastrar</button>
                </form>
                <Link to="/">Já tem uma conta? Entre</Link>
                <br/>
            </div>
        </div>
    );
}

export default Registro;