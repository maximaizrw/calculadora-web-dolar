export function calculateTransferPrice(precioJuego, dolar) {
  
  var precioJuegoPesos = precioJuego * dolar;
  //Mi ganancia es el 8% del precio del juego
  var ganancia = (precioJuegoPesos * 0.08);
  console.log("ganancia: " + ganancia);

  var precioVenta = Math.round(precioJuegoPesos + ganancia);
  
  return precioVenta;
}
