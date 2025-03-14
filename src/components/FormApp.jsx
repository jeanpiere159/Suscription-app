/* eslint-disable react/prop-types */
import { useState } from "react";
function FormApp({ setCount, setIsValid }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
    if (input === "" || Number(input) < 0) {
      setError(true);
      return;
    }
    setError(false);
    setCount(Number(input));
    console.log(input);
    setIsValid(true);
  };

  return (
    <>
      <div className="form-add-money">
        <form onSubmit={handleForm}>
          <p>Agregar Presupuesto</p>
          <input
            type="number"
            placeholder="300$"
            onChange={(e) => setInput(e.target.value)} 
          />
          <input type="submit" value="Agregar" />
        </form>
        {error ? <p className="error">Presupuesto invalido</p> : null}
      </div>
    </>
  );
}

export default FormApp;
