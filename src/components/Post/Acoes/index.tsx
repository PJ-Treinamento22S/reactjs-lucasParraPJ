import React from "react";
import * as S from "./styles";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Acoes = () => {
  /* if(meu == 1){
    return(
      <div>
        <button>
          <i></i>
        </button>
        <button>
          <i></i>
        </button>
      </div>
    );
  }
  else{
*/
  return (
    <S.ContainerAcoes>
      <S.BotaoDestacar>
        <S.Icone icon={faHeart} />
      </S.BotaoDestacar>
    </S.ContainerAcoes>
  );
};

export default Acoes;
