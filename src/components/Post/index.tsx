import React from "react";
import * as S from "./styles";
import ImgTexto from "./ImgTexto";
import Acoes from "./Acoes";
import Interacoes from "./Interacoes";

interface PropsPost {
  imgSrc: string;
  userEData: string;
  conteudoPost: string;
}

const Post: React.FC<PropsPost> = ({ imgSrc, userEData, conteudoPost }) => {
  return (
    <S.Post>
      <ImgTexto
        imgSrc={imgSrc}
        userEData={userEData}
        conteudoPost={conteudoPost}
      ></ImgTexto>
      <Acoes></Acoes>
      <Interacoes></Interacoes>
    </S.Post>
  );
};

export default Post;
