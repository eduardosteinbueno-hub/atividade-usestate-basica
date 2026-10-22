
import { useState } from "react";

function App() {
  const [contador, setContador] = useState(0);
  const [visivel, setVisivel] = useState(false);
  const [nome, setNome] = useState("");
  const [mostrar, setMostrar] = useState(true);

  return (
    <div>
      <h2>Missão 1 - Contador</h2>
      <p>Valor: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>
        Aumentar
      </button>
      <button onClick={() => setContador(contador - 1)}>
        Diminuir
      </button>

      <hr />

      <h2>Missão 2 - Aviso</h2>
      <button onClick={() => setVisivel(!visivel)}>
        Alternar aviso
      </button>
      {visivel && <p>O aviso está visível.</p>}

      <hr />

      <h2>Missão 3 - Saudação</h2>
      <input
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Digite seu nome"
      />
      <p>Olá, {nome || "visitante"}!</p>

      <hr />

      <h2>Desafio final</h2>
      <button onClick={() => setMostrar(!mostrar)}>
        Mostrar ou esconder
      </button>
      {mostrar && <p>Olá, {nome || "visitante"}!</p>}
    </div>
  );
}

export default App;
