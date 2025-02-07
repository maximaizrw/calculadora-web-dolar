import { GANANCIA } from "@/utils/constants";

export function calculateTransferPrice(precioJuego, dolar) {
  const precioJuegoPesos = precioJuego * dolar;
  const ganancia = precioJuegoPesos * GANANCIA;
  console.log("ganancia: " + ganancia);

  // Calcula el precio base sumando y luego redondea al múltiplo de 5 más cercano
  const precioVenta = Math.round((precioJuegoPesos + ganancia) / 5) * 5;
  
  return precioVenta;
}
