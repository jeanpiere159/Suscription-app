/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { MoneyFormat } from "../helpers";
import React from "react";

function Singleitem({price, type, id, eliminarItem, editItem}) {
    const handleDelete = (e) => {
        e.preventDefault();
        const answer = window.confirm(`Borrar suscripcion ${type}`);
        if(answer){
          eliminarItem(id);
        }
    }
    const handleEdit = (e) => {
      e.preventDefault();
      editItem(id);
    }

    const urlImages = `src/images/${type}.png`;
  return (
    <>
      <div className="single-item">
        <img src={urlImages} alt="Services" />
        <h3>Precio: {MoneyFormat(Number(price))}</h3>
        <a href="" onClick={handleDelete}>Borrar</a>
        <a href="" onClick={handleEdit}>Editar</a>
      </div>
    </>
  );
}

export default Singleitem;
