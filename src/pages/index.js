import React, { useState, useEffect } from 'react';
import Box from '@/components/box'; // Asegúrate de que la ruta de importación sea correcta
import { getDollarPrice } from "@/pages/api/constants";


function App() {
  const [dolar, setDolar] = useState(0);

  useEffect(() => {
    getDollarPrice().then(price => setDolar(price));
  }, []);


  return (
    <div class="flex flex-col items-center justify-center h-screen bg-custom-color font-roboto">
      <div class="flex flex-col items-center pb-4">
      <h1 class="text-4xl text-[#F99417]">Calculadora de precios</h1>
      <h2 class="text-lg text-slate-400">1 Dolar💲= {dolar}</h2>
      </div>
      <Box dolar={dolar}/>
    </div>
  );
}

export default App;