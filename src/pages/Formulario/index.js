import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

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
    <Form className='form_container'>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Entre com seu e-mail" />
        <Form.Text className="text-muted">
          Não forneça seu e-mail sem ter confiança.
        </Form.Text>
      </Form.Group>
    </Form>
  );
}

export default Formulario;