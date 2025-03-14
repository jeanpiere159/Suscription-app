/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Singleitem from "./Singleitem";

function Displayitems({subs, eliminarItem, editItem}) {
  return (
    <>
      <h2>Suscripciones</h2>
      {subs.map((item) => (
        <Singleitem
          key={item.id}
          id={item.id}
          price={item.price}
          type={item.type}
          eliminarItem={eliminarItem}
          editItem={editItem}
        />
      ))}
    </>
  );
}

export default Displayitems;
