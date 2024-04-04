// Impuestos
export const PERCEPCION_GANANCIAS = 0.45;
export const LEY_IMPUESTO_PAIS = 0.30;
export const PERCEPCION_BIENES_PERSONALES = 0.25;
export const TOTAL = PERCEPCION_GANANCIAS + LEY_IMPUESTO_PAIS + PERCEPCION_BIENES_PERSONALES;

//Costos MERCADELIBRE
export const CARGO_VENTA_ML = 0.13;
export const CARGO_VENTA_MP = 0.08;
export const COSTO_FIJO = 1100;

//Ganancia
export const GANANCIA = 0.15;



export async function getDollarPrice() {
  return fetch("https://dolarapi.com/v1/dolares/tarjeta")
    .then(response => response.json())
    .then(data => data.venta);
}

export default async function handler(req, res) {
  const dollarPrice = await getDollarPrice();
  res.status(200).json({ dollarPrice });
}



