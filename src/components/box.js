import React, { useState } from "react";
import {
  calculateMpPrice} from "@/utils/calculateMpPrice";
import { calculateTransferPrice } from "@/utils/calculateTransferPrice";

function Box({ dolar }) {
  const [precioJuego, setprecioJuego] = useState("");
  const [mpPrice, setMpPrice] = useState("");
  const [transferPrice, setTransferPrice] = useState("");

  const handleprecioJuegoChange = (event) => {
    const precioJuego = event.target.value;
    setprecioJuego(precioJuego);
    setMpPrice(calculateMpPrice(precioJuego, dolar));
    setTransferPrice(calculateTransferPrice(precioJuego, dolar));
  };

  return (
    <div class="flex flex-col gap-4 p-4 border-4 border-[#363062] rounded-md text-lg">
      <div class=" flex flex-col bg-[#363062] text-white p-4 items-center">
        <label>PRECIO JUEGO EN DOLARES</label>
        <input
          class="bg-[#4D4C7D] w-1/2 text-center"
          type="number"
          value={precioJuego}
          onChange={handleprecioJuegoChange}
        />
      </div>
      <div class="flex border-b-2 border-[#363062] items-center gap-x-2">
        <div class="flex flex-col items-center text-sky-600">
          <label>MERCADOPAGO</label>
          <input
            class="bg-transparent w-20 text-center"
            type="number"
            value={mpPrice}
            readOnly
          />
        </div>
      </div>
      <div class="flex flex-col items-center">
        <label>TRANSFERENCIA</label>
        <input
          class="bg-transparent W-20 text-center"
          type="number"
          value={transferPrice}
          readOnly
        />
      </div>
      <button class="bg-[#363062] text-white hover:bg-[#5c5c8a]" onClick={() => copyToClipboard(transferPrice, mpPrice)}>Copiar precios</button>
    </div>
  );
}

export default Box;

function copyToClipboard(transferPrice, mpPrice) {
  const str = `Transferencia: ${transferPrice}, MercadoPago: ${mpPrice}`;
  navigator.clipboard.writeText(str);
}