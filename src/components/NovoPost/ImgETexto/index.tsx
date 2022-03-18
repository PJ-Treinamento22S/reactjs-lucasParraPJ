import React from "react";
import { useState, useContext } from "react";
import FotoPerfil from "../../../assets/cachorro.jpg";
import TextosPost from "./TextosPost";
import * as S from "./styles";
import { ContadorContext } from "..";

const ImgETexto = () => {
  const { contador, setContador } = useContext(ContadorContext);
  if (contador <= 140) {
    return (
      <S.ContainerImgETexto>
        <S.FotoPerfil src={FotoPerfil} />
        <TextosPost />
        <S.ContadorOk>{contador}/140</S.ContadorOk>
      </S.ContainerImgETexto>
    );
  } else {
    return (
      <S.ContainerImgETexto>
        <S.FotoPerfil src={FotoPerfil} />
        <TextosPost />
        <S.ContadorErro>{contador}/140</S.ContadorErro>
      </S.ContainerImgETexto>
    );
  }
};

export default ImgETexto;
