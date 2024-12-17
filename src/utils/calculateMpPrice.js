import { CARGO_VENTA_MP, GANANCIA } from "@/pages/api/constants";

export function calculateMpPrice(precioJuego, dolar) {
  if (precioJuego === 0) {
    return 0;
  }

  let precioJuegoPesos = precioJuego * dolar;
  let ganancia = precioJuego < 30 ? precioJuegoPesos * GANANCIA : precioJuegoPesos * 0.08;
  
  let precioVenta = precioJuegoPesos + ganancia;
  precioVenta += precioVenta * CARGO_VENTA_MP;

  let resta = precioVenta - (precioVenta * CARGO_VENTA_MP) - precioJuegoPesos;
  let puntoVenta = ganancia - resta;

  precioVenta += puntoVenta;

  return Math.round(precioVenta);
}


