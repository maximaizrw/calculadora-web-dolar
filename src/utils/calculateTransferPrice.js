export function calculateTransferPrice(precioJuego, dolar) {
  
  var precioJuegoPesos = precioJuego * dolar;
  //Mi ganancia es el 15% del precio del juego
  var ganancia = (precioJuegoPesos * 0.10);
  console.log("ganancia: " + ganancia);

  var precioVenta = Math.round(precioJuegoPesos + ganancia);
  
  return precioVenta;
}
