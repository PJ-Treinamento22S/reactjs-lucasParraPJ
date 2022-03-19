import React from "react";
import { useContext } from "react";
import * as S from "./styles";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { ContextFavoritos } from "../../../App";
import { ContextPius } from "../../../App";
import api from "../../../config/api";

interface AcoesProps {
  id: string;
  username: string;
}

const Acoes: React.FC<AcoesProps> = ({ id, username }) => {
  const { favoritos, setFavoritos } = useContext(ContextFavoritos);
  const { pius, setPius } = useContext(ContextPius);

  if (username == "usuario123") {
    return (
      <S.ContainerAcoes>
        <S.BotaoFavoritar
          onClick={() => {
            if (!favoritos.includes(id)) {
              setFavoritos([...favoritos, id]);
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
        </S.BotaoFavoritar>
        <S.BotaoDeletar
          onClick={() => {
            setPius(
              pius.filter((piu) => {
                return piu.id != id;
              })
            );
            try {
              api.delete("/pius", {
                data: {
                  piu_id: id,
                },
              });
            } catch (e) {
              console.log(e);
            }
          }}
        >
          <S.Icone icon={faX} />
        </S.BotaoDeletar>
      </S.ContainerAcoes>
    );
  } else {
    return (
      <S.ContainerAcoes>
        <S.BotaoFavoritar
          onClick={() => {
            if (!favoritos.includes(id)) {
              setFavoritos([...favoritos, id]);
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
        </S.BotaoFavoritar>
      </S.ContainerAcoes>
    );
  }
};

export default Acoes;
