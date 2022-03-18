import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ContainerInteracoes = styled.div`
  display: flex;
  flex-direction: row;
  width: 40%;
  justify-content: space-between;
  margin-left: 16%;
  margin-top: 3.5%;
`;

export const BotaoInteracao = styled.button`
  background: rgba(0, 0, 0, 0);
  border: none;
  display: flex;
  flex-direction: row;
`;

export const IconeInteracao = styled(FontAwesomeIcon)`
  height: 20px;
  &:hover {
    color: white;
  }
`;

export const ContadorInteracao = styled.p`
  font-size: 22px;
  align-self: baseline;
  margin: 0 0 0 30%;
  font-family: "Roboto", sans-serif;
`;
