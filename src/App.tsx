import React from "react";
import "./App.css";
import Post from "./components/Post";

function App() {
  return (
    <div id="containerGeral">
      <div className="containerLateral">
        <img src="../imagens/pintinhoAndando.png" id="patinho" />
        <div id="containerPaginas">
          <a href="#" className="textoPaginas">
            <div className="paginasBotao" id="selecionada">
              <i className="fa-solid fa-house"></i>
              <h2>Início</h2>
            </div>
          </a>
          <a href="#" className="textoPaginas">
            <div className="paginasBotao">
              <i className="fa-solid fa-circle-user"></i>
              <h2>Perfil</h2>
            </div>
          </a>
          <a href="#" className="textoPaginas">
            <div className="paginasBotao">
              <i className="fa-solid fa-gear"></i>
              <h2>Opções</h2>
            </div>
          </a>
        </div>
      </div>
      <div className="containerCentral">
        <h1 id="titulo">Início</h1>
        <div id="novoPiu">
          <div className="imgETexto">
            <img src="../imagens/cachorro.jpg" id="cachorro" />
            <div className="textosPosts">
              <p className="userEData">@username123</p>
              <form id="formNovoPiu">
                <input
                  placeholder="O que deseja falar?"
                  id="conteudoNovoPiu"
                ></input>
              </form>
            </div>
            <p id="contadorCaracter">0/140</p>
          </div>
          <button id="postarBotao">Postar</button>
        </div>
        <Post imgSrc="#" userEData="@lucas . 27 fev" conteudoPost="oiii"></Post>
        <div className="containerLateral">
          <form id="containerBusca">
            <input type="text" placeholder="🔍 Buscar" id="busca" />
          </form>
          <div id="containerNoticias">
            <h3 id="headerNoticias">Notícias</h3>
            <div className="noticia">
              <p className="textoNoticia">
                Ucrânia pede mais sanções à Rússia; Putin diz que represálias
                atuais já são semelhantes a declaração de guerra
              </p>
              <img
                src="../imagens/imagemNoticia.png"
                className="imagemNoticia"
              />
            </div>
            <div className="noticia">
              <p className="textoNoticia">
                Ucrânia pede mais sanções à Rússia; Putin diz que represálias
                atuais já são semelhantes a declaração de guerra
              </p>
              <img
                src="../imagens/imagemNoticia.png"
                className="imagemNoticia"
              />
            </div>
            <div className="noticia">
              <p className="textoNoticia">
                Ucrânia pede mais sanções à Rússia; Putin diz que represálias
                atuais já são semelhantes a declaração de guerra
              </p>
              <img
                src="../imagens/imagemNoticia.png"
                className="imagemNoticia"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
