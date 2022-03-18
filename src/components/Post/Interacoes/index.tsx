import React from "react";
import { useState } from "react";
import * as S from "./styles";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";

const Interacoes = () => {
  const [likes, setLike] = useState(0);

  function curtir() {
    if (likes == 0) {
      setLike(1);
    } else {
      setLike(0);
    }
  }
  if (likes == 0) {
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
