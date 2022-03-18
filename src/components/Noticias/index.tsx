import React from "react";
import * as S from "./styles";
import Noticia from "./Noticia";

const Noticias = () => {
  return (
    <S.ContainerNoticias>
      <S.TituloNoticias>Notícias</S.TituloNoticias>
      <Noticia />
      <Noticia />
      <Noticia />
    </S.ContainerNoticias>
  );
};

export default Noticias;
