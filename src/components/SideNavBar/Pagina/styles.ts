import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Link = styled.a`
  text-decoration: none;
  color: black;
  font-size: 26px;
  font-family: "Roboto", sans-serif;
  height: fit-content;
`;

export const ContainerSelecionada = styled.div`
  display: flex;
  width: 180px;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 0px;
  background-color: rgba(203, 124, 6, 0.42);
  border: 1px solid rgba(203, 124, 6, 1);
  border-radius: 32px;
`;

export const ContainerNaoSelecionada = styled.div`
  display: flex;
  width: 180px;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 0px;
  &:hover {
    border: 1px solid rgba(203, 124, 6, 1);
    border-radius: 32px;
  }
`;

export const Icone = styled(FontAwesomeIcon)`
  margin-right: 3%;
  margin-left: 6%;
`;

export const Nome = styled.h2`
  text-decoration: none;
  color: black;
  font-size: 39px;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
`;
