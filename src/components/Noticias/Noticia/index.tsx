import React from "react";
import * as S from "./styles";
import Imagem from "../../../assets/imagemNoticia.png";

const Noticia = () => {
  return (
    <S.ContainerNoticia>
      <S.TextoNoticia>
        Ucrânia pede mais sanções à Rússia; Putin diz que represálias atuais já
        são semelhantes a declaração de guerra
      </S.TextoNoticia>
      <S.ImgNoticia src={Imagem} />
    </S.ContainerNoticia>
  );
};

export default Noticia;
