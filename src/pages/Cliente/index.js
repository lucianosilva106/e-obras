import { useState } from 'react';
import firebase from '../../firebaseConnection';

function Cliente(){
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
                <form onSubmit={handleSubmit}>
                    <h1>Cadastro de Clientes</h1>
                    <input type="text" placeholder="Seu nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                    <input type="text" placeholder="email@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="*******" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button type="submit">Cadastrar</button>
                </form>
                <br/>
            </div>
        </div>
    );
}

export default Cliente;
