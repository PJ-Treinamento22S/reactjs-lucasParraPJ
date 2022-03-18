import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import * as S from "./styles";

interface InfoPaginas {
  nome: string;
  icone: IconDefinition;
  destacada: boolean;
}

const Pagina: React.FC<InfoPaginas> = ({ nome, icone, destacada }) => {
  if (destacada) {
    return (
      <S.Link href="#">
        <S.ContainerSelecionada>
          <S.Icone icon={icone} />
          <S.Nome>{nome}</S.Nome>
        </S.ContainerSelecionada>
      </S.Link>
    );
  } else {
    return (
      <S.Link href="#">
        <S.ContainerNaoSelecionada>
          <S.Icone icon={icone} />
          <S.Nome>{nome}</S.Nome>
        </S.ContainerNaoSelecionada>
      </S.Link>
    );
  }
};

export default Pagina;
