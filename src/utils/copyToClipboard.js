export function copyToClipboard(transferPrice, mpPrice) {
    const str = `MercadoPago: $${mpPrice} / Transferencia: $${transferPrice}`;
    navigator.clipboard.writeText(str);
  }