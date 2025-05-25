import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css';

const estados = [
  "Todos", "AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO",
  "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ",
  "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"
];

function App() {
  const [plantas, setPlantas] = useState([]);
  const [estadoFiltro, setEstadoFiltro] = useState("Todos");

  useEffect(() => {
    axios.get("https://backend-plantas.onrender.com/plantas").then(res => {
      setPlantas(res.data);
    });
  }, []);

  const filtradas = estadoFiltro === "Todos"
    ? plantas
    : plantas.filter(p => p.estado === estadoFiltro);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">🌱 Anúncios de Plantas</h1>
      <select
        value={estadoFiltro}
        onChange={e => setEstadoFiltro(e.target.value)}
        className="mb-4 p-2 border rounded"
      >
        {estados.map(uf => <option key={uf}>{uf}</option>)}
      </select>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtradas.map(p => (
          <div key={p.id} className="border p-4 rounded shadow">
            <img src={p.imagem} alt={p.nome} className="w-full h-48 object-cover mb-2" />
            <h2 className="text-xl font-semibold">{p.nome} - R$ {p.preco}</h2>
            <p className="text-gray-600">📍 {p.estado}</p>
            <p>{p.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;