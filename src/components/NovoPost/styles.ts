import styled from "styled-components";

export const ContainerNovoPost = styled.div`
  width: 90%;
  min-height: 160px;
  height: fit-content;
  background-color: rgba(203, 124, 6, 0.42);
  border: 1px solid rgba(203, 124, 6, 1);
  border-radius: 8px;
  align-self: center;
  margin: 0;
  display: flex;
  flex-direction: column;
  margin-bottom: 2%;
  flex-shrink: 0;
  position: relative;
`;

export const BotaoPostar = styled.button`
  width: 22%;
  height: 37px;
  background-color: rgba(203, 124, 6, 1);
  color: white;
  border: none;
  border-radius: 32px;
  align-self: flex-end;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  margin-right: 5%;
  margin-bottom: 10px;
  &:hover {
    cursor: pointer;
    background-color: rgba(223, 144, 26, 1);
  }
  &:active {
    background-color: rgba(203, 124, 6, 1);
  }
`;

export const MensagemVazia = styled.p`
  color: red;
  position: absolute;
  font-size: 22px;
  font-family: "Roboto", sans-serif;
  width: 40%;
  left: 35%;
  top: 0px;
`;
