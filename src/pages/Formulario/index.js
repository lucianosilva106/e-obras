import React, { useState } from 'react';

import './Formulario.css'

function Formulario() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [habilidade, setHabilidade] = useState('');

  function handleGrava(){
    alert('vou gravar')
  }

  return (
    <div className='form_container'>
    <h2>Formulário de Cadastro de Parceiros</h2>
    <br/>
    <form className='form_campo'>
      <div>
        <label>Nome Completo:
          <input 
            type="text" 
            placeholder='Insira o seu nome completo'
            value={name}
            onChange={(e) => setName(e.target.value)}
         /> 
        </label>
      </div>
      <div>
        <label>Email:
          <input 
            type="text" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
           />
        </label>
      </div>
     <label>Celular/Whatsapp:
        <input 
          type="text" 
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
     </label><br/>
     <label>Habilidades profissionais:
        <input 
          type="text" 
          value={habilidade}
          onChange={(e) => setHabilidade(e.target.value)}
        />
     </label><br/>
      <button onChange={() => handleGrava()}> Enviar Formulário</button>
    </form>
  </div>

  );
}

export default Formulario;