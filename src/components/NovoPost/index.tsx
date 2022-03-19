import React, { useContext } from "react";
import { createContext, useState, useEffect } from "react";
import * as S from "./styles";
import ImgETexto from "./ImgETexto";
import api from "../../config/api";
import { ContextPius } from "../../App";
import { PiuData, UserData } from "../../interfaces";
import Foto from "../../assets/cachorro.jpg";

interface ContadorContextProps {
  contador: number;
  setContador: React.Dispatch<React.SetStateAction<number>>;
  texto: string;
  setTexto: React.Dispatch<React.SetStateAction<string>>;
}

export const ContadorContext = createContext({} as ContadorContextProps);

const NovoPost = () => {
  const [contador, setContador] = useState(0);
  const [texto, setTexto] = useState("");
  const { pius, setPius } = useContext(ContextPius);

  function Postar() {
    if (contador == 0) {
      console.log(
        <S.MensagemVazia>Escreva algo antes de postar!</S.MensagemVazia>
      );
      return <img src={Foto} />;
    } else if (contador > 140) {
      console.log("lol");
    } else {
      api
        .post("/pius", {
          text: texto,
        })
        .then(function (response) {
          console.log(response);
          setPius([
            {
              text: response.data.text,
              id: response.data.id,
              user: { username: "usuario123", photo: Foto } as UserData,
              created_at: response.data.created_at,
              likes: [],
            },
            ...pius,
          ]);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    setTexto("");
  }
  return (
    <ContadorContext.Provider
      value={{ contador, setContador, texto, setTexto }}
    >
      <S.ContainerNovoPost>
        <ImgETexto />
        <S.BotaoPostar onClick={Postar}>Postar</S.BotaoPostar>
      </S.ContainerNovoPost>
    </ContadorContext.Provider>
  );
};

export default NovoPost;
