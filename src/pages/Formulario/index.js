import React, { label } from 'react';

function Form() {

  return (
    <div>
      <br/>
      <label>
        Nome:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Enviar" />
    </div>
  );
}

export default Form;