import React from "react";
import { useContext } from "react";
import * as S from "./styles";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { ContextFavoritos } from "../../../App";

interface AcoesProps {
  id: string;
}

const Acoes: React.FC<AcoesProps> = ({ id }) => {
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

  const { favoritos, setFavoritos } = useContext(ContextFavoritos);

  return (
    <S.ContainerAcoes>
      <S.BotaoDestacar
        onClick={() => {
          if (!favoritos.includes(id)) {
            setFavoritos([...favoritos, id]);
            console.log("oi");
          } else {
            setFavoritos(
              favoritos.filter((e) => {
                return e != id;
              })
            );
          }
          console.log(favoritos);
        }}
      >
        <S.Icone icon={faHeart} />
      </S.BotaoDestacar>
    </S.ContainerAcoes>
  );
};

export default Acoes;
