import React from 'react';

function Form() {

  return (
    <div>
      <br/>
      <form>
        <label>
         Nome:
         <input type="text" name="name" />
       </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default Form;