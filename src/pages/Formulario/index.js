import React, { useState } from 'react';

function Form() {

  const [name, setName] = useState('');

  function handleGrava(){
    alert('vou gravar')
  }

  return (
    <div>
      <br/>
      <form>
        <label>Nome:
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.name)}
          />
       </label>
        <button onChange={handleGrava()}> Enviar Formulário</button>
      </form>
    </div>
  );
}

export default Form;