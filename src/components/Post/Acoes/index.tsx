import React from "react";
import * as S from "./styles";

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
        <S.Icone className="fa-solid fa-arrow-up"></S.Icone>
      </S.BotaoDestacar>
    </S.ContainerAcoes>
  );
};

export default Acoes;
