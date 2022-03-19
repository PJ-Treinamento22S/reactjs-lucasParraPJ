import React from "react";
import { useContext } from "react";
import * as S from "./styles";
import { ContadorContext } from "../../index";

const TextosPost = () => {
  const { contador, setContador, texto, setTexto } =
    useContext(ContadorContext);
  if (contador < 140) {
    return (
      <S.ContainerTextosPost>
        <S.UserEData>@usuario123</S.UserEData>
        <S.Form>
          <S.InputOk
            placeholder="O que deseja falar?"
            onChange={(e) => {
              setTexto(e.target.value);
              setContador(e.target.value.length);
            }}
          />
        </S.Form>
      </S.ContainerTextosPost>
    );
  } else {
    return (
      <S.ContainerTextosPost>
        <S.UserEData>@username123</S.UserEData>
        <S.Form>
          <S.InputErro
            placeholder="O que deseja falar?"
            onChange={(e) => {
              setTexto(e.target.value);
              setContador(texto.length);
            }}
            value={texto}
          />
        </S.Form>
      </S.ContainerTextosPost>
    );
  }
};

export default TextosPost;
