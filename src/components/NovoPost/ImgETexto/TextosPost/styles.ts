import styled from "styled-components";

export const ContainerTextosPost = styled.div`
  width: 68%;
  display: flex;
  flex-direction: column;
  margin-left: 0.6%;
  padding: 0;
  overflow-y: visible;
`;

export const UserEData = styled.p`
  font-size: 20px;
  font-family: "Roboto", sans-serif;
  color: rgba(203, 124, 6, 1);
  margin: 1%;
`;

export const Form = styled.form`
  margin-left: 1%;
  margin-top: 3%;
  width: 90%;
`;

export const InputOk = styled.input`
  font-size: 20px;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  font-family: "Roboto", sans-serif;
  outline: none;
  color: black;
  margin-top: 1.5%;
  width: 99%;
  &::placeholder {
    color: rgba(0, 0, 0, 0.56);
  }
`;

export const InputErro = styled.input`
  font-size: 20px;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  font-family: "Roboto", sans-serif;
  outline: none;
  color: red;
  margin-top: 1.5%;
  width: 99%;
  &::placeholder {
    color: rgba(0, 0, 0, 0.56);
  }
`;
