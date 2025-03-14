/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

function FormAddSubs({
  setType,
  setPrice,
  type,
  price,
  setSubs,
  subs,
  editId,
  setEditId,
  spent,
  count,
}) {
  const [error, setError] = useState(false);
  const [errorMoney, setErrorMoney] = useState(false);

  const handleSubs = (e) => {
    e.preventDefault();
    if (price === "" || Number(price) < 0 || type === "") {
      setError(true);
      return;
    }
    if (count - spent < Number(price)) {
      setErrorMoney(true);
      return;
    }

    setError(false);
    setErrorMoney(false);

    if (editId !== "") {
      // Actualiza la suscripción en lugar de agregar una nueva
      const newSubs = subs.map((item) =>
        item.id === editId ? { ...item, type, price } : item
      );
      setSubs(newSubs);
      setEditId(""); // Resetea el ID de edición
    } else {
      // Agrega una nueva suscripción
      const data = {
        type,
        price,
        id: Date.now(),
      };
      setSubs((prevSubs) => [...prevSubs, data]);
    }

    // Resetea los campos del formulario
    setType("");
    setPrice("");
  };

  return (
    <div className="add-subscription">
      <h3>Agregar Suscripción</h3>
      <form onSubmit={handleSubs}>
        <p>Servicio</p>
        <select onChange={(e) => setType(e.target.value)} value={type}>
          <option value="">-- Elegir --</option>
          <option value="netflix">Netflix</option>
          <option value="disneyPlus">Disney Plus</option>
          <option value="hboMax">HBO Max</option>
          <option value="starPlus">Star Plus</option>
          <option value="primeVideo">Prime Video</option>
          <option value="spotify">Spotify</option>
          <option value="appletv">Apple TV</option>
        </select>
        <p>Monto</p>
        <input
          type="number"
          placeholder="20$"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
        {editId !== "" ? (
          <input type="submit" value="Guardar" />
        ) : (
          <input type="submit" value="Agregar" />
        )}
      </form>
      {error && <p className="error">Campos inválidos</p>}
      {errorMoney && <p className="error">No tienes suficiente dinero</p>}
    </div>
  );
}

export default FormAddSubs;
