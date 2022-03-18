import React from "react";
import * as S from "./styles";
import ImgTexto from "./ImgTexto";
import Acoes from "./Acoes";
import Interacoes from "./Interacoes";
import { PiuData } from "../../interfaces";

const Post: React.FC<PiuData> = ({ text, user }) => {
  return (
    <S.Post>
      <ImgTexto
        imgSrc={user.photo}
        userEData={user.username}
        conteudoPost={text}
      ></ImgTexto>
      <Acoes></Acoes>
      <Interacoes></Interacoes>
    </S.Post>
  );
};

export default Post;
