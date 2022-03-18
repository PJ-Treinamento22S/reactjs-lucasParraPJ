import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ContainerAcoes = styled.div`
  display: flex;
  flex-direction: row;
  height: fit-content;
  width: fit-content;
  position: absolute;
  top: 15px;
  right: 30px;
`;

export const BotaoDestacar = styled.button`
  font-size: 20px;
  background-color: rgba(0, 0, 0, 0);
  height: 20px;
  width: 20px;
  border: none;
`;

export const BotaoDeletar = styled.button`
  font-size: 20px;
  background-color: rgba(0, 0, 0, 0);
  height: 20px;
  width: 20px;
  border: none;
  margin-left: 10px;
`;

export const Icone = styled(FontAwesomeIcon)`
  &:hover {
    cursor: pointer;
    color: white;
  }
`;
