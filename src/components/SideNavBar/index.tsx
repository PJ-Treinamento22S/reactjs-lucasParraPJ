import React from "react";
import Pagina from "./Pagina";
import * as S from "./styles";
import Pintinho from "../../assets/pintinhoAndando.png";
import {
  faHome,
  faGear,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";

const SideNavBar = () => {
  return (
    <>
      <S.ImagemPato src={Pintinho} />
      <S.containerPaginas>
        <Pagina nome="Início" icone={faHome} destacada={true} />
        <Pagina nome="Perfil" icone={faCircleUser} destacada={false} />
        <Pagina nome="Opções" icone={faGear} destacada={false} />
      </S.containerPaginas>
    </>
  );
};

export default SideNavBar;
