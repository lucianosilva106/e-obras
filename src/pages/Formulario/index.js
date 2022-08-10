import React, { useState } from "react";

import "./styles.css";

function Form() {
  const [name, setName] = useState('');
  const [last_name, setLastName] = useState('');
  const [cpf, setCpf] = useState('');
  const [news, setNews] = useState(true);
  const [promotions, setPromotions] = useState(true);

  const [CPFError, setCPFError] = useState(false);

  return (
    <div>Preencha o formulario</div>
  );
}

export default Form;