import React, { useState, useEffect } from 'react';
import Box from '@/components/box'; // Asegúrate de que la ruta de importación sea correcta
import { getDollarPrice, getDollarCriptoPrice, getDollarMepPrice } from "@/pages/api/constants";

function App() {
  const [dolarTarjeta, setDolarTarjeta] = useState(0);
  const [dolarMep, setDolarMep] = useState(0);
  const [dolarCripto, setDolarCripto] = useState(0);
  const [selectedDolar, setSelectedDolar] = useState('tarjeta'); // Estado para el tipo de dólar seleccionado

  useEffect(() => {
    getDollarPrice().then(price => setDolarTarjeta(price));
    getDollarMepPrice().then(price => setDolarMep(price));
    getDollarCriptoPrice().then(price => setDolarCripto(price));
  }, []);

  const handleDolarChange = (event) => {
    setSelectedDolar(event.target.value);
  };

  const dolarValue = () => {
    switch (selectedDolar) {
      case 'tarjeta':
        return dolarTarjeta;
      case 'mep':
        return dolarMep;
      case 'cripto':
        return dolarCripto;
      default:
        return 0;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-custom-color font-roboto">
      <div className="flex flex-col items-center pb-4">
        <h1 className="text-4xl text-[#F99417]">Calculadora de precios</h1>
        <div className="flex flex-row space-x-4">
          <div className="flex flex-col">
            <h2 className="text-lg text-slate-400">Dolar Tarjeta💲= {dolarTarjeta}</h2>
            <h2 className="text-lg text-slate-400">Dolar Mep 💲= {dolarMep}</h2>
            <h2 className="text-lg text-slate-400">Dolar Cripto 💲= {dolarCripto}</h2>
          </div>
          <div className="flex flex-col justify-center">
            <label className="flex items-center">
              <input
                type="radio"
                value="tarjeta"
                checked={selectedDolar === 'tarjeta'}
                onChange={handleDolarChange}
                className="mr-2"
              />
              Dólar Tarjeta
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="mep"
                checked={selectedDolar === 'mep'}
                onChange={handleDolarChange}
                className="mr-2"
              />
              Dólar Mep
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="cripto"
                checked={selectedDolar === 'cripto'}
                onChange={handleDolarChange}
                className="mr-2"
              />
              Dólar Cripto
            </label>
          </div>
        </div>
      </div>

      <Box dolar={dolarValue()} />
    </div>
  );
}

export default App;