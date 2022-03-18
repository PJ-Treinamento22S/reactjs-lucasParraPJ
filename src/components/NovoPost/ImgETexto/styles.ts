import styled from "styled-components";

export const ContainerImgETexto = styled.div`
  display: flex;
  flex-direction: row;
  height: fit-content;
  margin-top: 2%;
  margin-left: 4%;
`;

export const FotoPerfil = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  border: 1px solid rgba(203, 124, 6, 1);
  flex-shrink: 0;
`;

export const ContadorOk = styled.p`
  font-family: "Roboto", sans-serif;
  margin-top: 8%;
  margin-right: 5%;
  font-size: 18px;
  color: rgba(203, 124, 6, 1);
`;

export const ContadorErro = styled.p`
  font-family: "Roboto", sans-serif;
  margin-top: 8%;
  margin-right: 5%;
  font-size: 18px;
  color: red;
`;
