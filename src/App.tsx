import React, { createContext } from "react";
import { useEffect, useState } from "react";
import "./App.css";
import Post from "./components/Post";
import SideNavBar from "./components/SideNavBar";
import NovoPost from "./components/NovoPost";
import Noticias from "./components/Noticias";
import api from "./config/api";
import { PiuData } from "./interfaces";

async function getData() {
  const response = await api.get("/pius");
  return response.data;
}

interface ContextFavoritosProps {
  favoritos: string[];
  setFavoritos: React.Dispatch<React.SetStateAction<string[]>>;
}
export const ContextFavoritos = createContext({} as ContextFavoritosProps);

interface ContextPiusProps {
  pius: PiuData[];
  setPius: React.Dispatch<React.SetStateAction<PiuData[]>>;
}
export const ContextPius = createContext({} as ContextPiusProps);

function App() {
  const [pius, setPius] = useState([] as PiuData[]);
  useEffect(() => {
    const call = async () => {
      const dados = await getData();
      setPius(dados);
      console.log(pius);
    };
    call();
  }, []);

  const [favoritos, setFavoritos] = useState([""]);

  return (
    <div id="containerGeral">
      <div className="containerLateral">
        <SideNavBar />
      </div>
      <div className="containerCentral">
        <h1 id="titulo">Início</h1>
        <ContextPius.Provider value={{ pius, setPius }}>
          <NovoPost />
        </ContextPius.Provider>
        <ContextFavoritos.Provider value={{ favoritos, setFavoritos }}>
          {pius.map((piu) => {
            return (
              <Post
                key={piu.id}
                text={piu.text}
                user={piu.user}
                created_at={piu.created_at}
                id={piu.id}
              />
            );
          })}
        </ContextFavoritos.Provider>
      </div>
      <div className="containerLateral">
        <form id="containerBusca">
          <input type="text" placeholder="🔍 Buscar" id="busca" />
        </form>
        <Noticias />
      </div>
    </div>
  );
}

export default App;
