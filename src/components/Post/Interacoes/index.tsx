import React from "react";
import * as S from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";

const Interacoes = () => {
  return (
    <S.ContainerInteracoes>
      <S.BotaoInteracao>
        <S.IconeInteracao icon={faThumbsUp} size="lg" />
        <S.ContadorInteracao>0</S.ContadorInteracao>
      </S.BotaoInteracao>
      <S.BotaoInteracao>
        <S.IconeInteracao icon={faComment} size="lg" />
        <S.ContadorInteracao>0</S.ContadorInteracao>
      </S.BotaoInteracao>
      <S.BotaoInteracao>
        <S.IconeInteracao icon={faRetweet} size="lg" />
        <S.ContadorInteracao>0</S.ContadorInteracao>
      </S.BotaoInteracao>
    </S.ContainerInteracoes>
  );
};

export default Interacoes;
