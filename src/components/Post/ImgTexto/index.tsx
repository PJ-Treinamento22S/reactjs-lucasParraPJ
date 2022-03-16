import React from "react";
import * as S from "./styles";

interface ImgTextoProps {
  imgSrc: string;
  userEData: string;
  conteudoPost: string;
}

const ImgTexto: React.FC<ImgTextoProps> = ({
  imgSrc,
  userEData,
  conteudoPost,
}) => {
  return (
    <S.ContainerImgTexto>
      <S.Imagem src={imgSrc} />
      <S.ContainerTextos>
        <S.UserEData>{userEData}</S.UserEData>
        <S.ConteudoPost>{conteudoPost}</S.ConteudoPost>
      </S.ContainerTextos>
    </S.ContainerImgTexto>
  );
};

export default ImgTexto;
