// Impuestos
export const PERCEPCION_GANANCIAS = 0.45;
export const LEY_IMPUESTO_PAIS = 0.30;
export const PERCEPCION_BIENES_PERSONALES = 0.25;
export const TOTAL = PERCEPCION_GANANCIAS + LEY_IMPUESTO_PAIS + PERCEPCION_BIENES_PERSONALES;

//Costos MERCADELIBRE
export const CARGO_VENTA_MP = 0.08;

//Ganancia
export const GANANCIA = 0.10;



export async function getDollarPrice() {
  try {
    const response = await fetch("https://dolarapi.com/v1/dolares/tarjeta");
    const data = await response.json();
    return data.venta;
  } catch (error) {
    console.error(error);
    return 0;
  }
}

export async function getDollarCriptoPrice() {
  return fetch("https://dolarapi.com/v1/dolares/cripto")
  .then(response => response.json())
  .then(data => data.venta);
}

export async function getDollarMepPrice() {
  return fetch("https://dolarapi.com/v1/dolares/bolsa")
    .then(response => response.json())
    .then(data => {
      const precioBase = data.venta;
      const precioConIVA = precioBase * 1.21; // Sumar el 21% de IVA
      return precioConIVA.toFixed(2); // Opcional: Limitar a dos decimales
    });
}


export default async function handler(req, res) {
  const dollarPrice = await getDollarPrice();
  res.status(200).json({ dollarPrice });
}


