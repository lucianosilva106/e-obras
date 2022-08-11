import React, { useState } from 'react'
import './Contato.css'

function Contato(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    function handleEnvia(){
        alert('A Konezia agradece seu contato')
      }
      
    return(
        <div className="texto">        
            <h2>Olá, meu nome é Benedito Caetano e vou te acompanhar durante toda a solução do seu problema.</h2> <p/>
            <h3>Meu e-mail é bene.caetano@uol.com.br e meu celular e whatsapp é ddd 11 99123 4567</h3>
            <hr/>
            <h3>Deixe sua mensagem</h3>
            <form>
                <label>Nome Completo:
                  <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.name)}
                  />
                </label> <br/>
                <label>Email:
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.email)}
                  />
                </label> <br/>
                <textarea name="textarea"
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}>
                    Mensagem:

                </textarea> <br/>
                <button onChange={() => handleEnvia()}> Enviar Mensagem</button>
            </form>


        </div>
    );
}

export default Contato;

