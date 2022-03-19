import React from "react";
import { useState } from "react";
import * as S from "./styles";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";
import api from "../../../config/api";

interface InteracoesProps {
  likesN: number;
  id: string;
}

const Interacoes: React.FC<InteracoesProps> = ({ likesN, id }) => {
  const [likes, setLike] = useState(likesN);

  function curtir() {
    if (likes == likesN) {
      setLike(likesN + 1);
    } else {
      setLike(likesN);
    }
    try {
      api.post("/pius/like", {
        piu_id: id,
      });
    } catch (e) {
      console.log(e);
    }
  }
  if (likes == likesN) {
    return (
      <S.ContainerInteracoes>
        <S.BotaoInteracao onClick={curtir}>
          <S.IconeInteracao icon={faThumbsUp} size="lg" />
          <S.ContadorInteracao>{likes}</S.ContadorInteracao>
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
  } else {
    return (
      <S.ContainerInteracoes>
        <S.BotaoInteracao onClick={curtir}>
          <S.IconeInteracaoCheck icon={faThumbsUp} size="lg" />
          <S.ContadorInteracao>{likes}</S.ContadorInteracao>
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
  }
};

export default Interacoes;
