import styled from "styled-components";

export const ContainerImgTexto = styled.div`
  display: flex;
  flex-direction: row;
  height: 55%;
  margin-top: 2%;
  margin-left: 4%;
`;

export const Imagem = styled.img`
  height: 80px;
  width: 80px;
  flex-shrink: 0;
  border-radius: 50%;
  border: 1px solid rgba(203, 124, 6, 1);
`;

export const ContainerTextos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 0.6%;
  padding: 0;
`;

export const UserEData = styled.p`
  color: rgba(203, 124, 6, 1);
  margin: 1%;
  width: 80%;
  margin-bottom: 0;
  overflow: hidden;
  font-size: 20px;
`;

export const ConteudoPost = styled.p`
  color: black;
  width: 80%;
  margin-top: 4%;
  margin-left: 1%;
  margin-bottom: 0;
  overflow: hidden;
  font-size: 20px;
  font-family: "Roboto", sans-serif;
`;
