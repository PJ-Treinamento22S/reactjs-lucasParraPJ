import React from "react";
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

  return (
    <div id="containerGeral">
      <div className="containerLateral">
        <SideNavBar />
      </div>
      <div className="containerCentral">
        <h1 id="titulo">Início</h1>
        <NovoPost />
        {pius.map((piu) => {
          return (
            <Post
              key={piu.id}
              text={piu.text}
              user={piu.user}
              created_at={piu.created_at}
            />
          );
        })}
        <div className="containerLateral">
          <form id="containerBusca">
            <input type="text" placeholder="🔍 Buscar" id="busca" />
          </form>
          <Noticias />
        </div>
      </div>
    </div>
  );
}

export default App;
