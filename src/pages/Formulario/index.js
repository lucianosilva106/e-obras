import React, { useState } from 'react';

import './Formulario.css'

function Form() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [habilidade, setHabilidade] = useState('');

  function handleGrava(){
    alert('vou gravar')
  }

  return (
    <div className='texto'>
      <br/>
      <form>
        <label>Nome Completo:
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          /> <br/>
       </label>
       <label>Email:
          <input 
            type="text" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
       </label><br/>
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

export default Form;