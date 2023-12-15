import { CARGO_VENTA_ML, COSTO_FIJO, GANANCIA } from "@/pages/api/constants";


export function calculateMlPrice(precioJuego, 1314) {
  var precioJuegoPesos = precioJuego * dolar;
  let ganancia = precioJuego < 30 ? precioJuegoPesos * GANANCIA : precioJuegoPesos * 0.10;
  
  var precioVenta = precioJuegoPesos + ganancia;
  precioVenta+=precioVenta * CARGO_VENTA_ML;
  precioVenta+=COSTO_FIJO;

  var resta = precioVenta - (precioVenta * CARGO_VENTA_ML);
  resta = resta - COSTO_FIJO;
  resta = resta - precioJuegoPesos;

  var puntoVenta = ganancia - resta;
  precioVenta = precioVenta + puntoVenta;

  if (precioJuego == 0) {
    return 0;
  }
  return Math.round(precioVenta);
}
