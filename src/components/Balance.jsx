/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { MoneyFormat } from "../helpers";
import { useState, useEffect } from "react";

function Balance({ count, subs, setSpent,spent }) {

  const updateBalance = () => {
    const spent = subs.reduce((total, item) => Number(item.price) + total, 0);
    setSpent(spent);
  }

  useEffect(() => {
    updateBalance();
  }, [subs]);

  return (
    <>
      <div className="balance">
        <h3>Presupuesto : {MoneyFormat(count)}</h3>
        <h3>Dispobile: {MoneyFormat(count - spent)}</h3>
        <h3>Gastado: {MoneyFormat(spent)}</h3>
      </div>
    </>
  );
}

export default Balance;
