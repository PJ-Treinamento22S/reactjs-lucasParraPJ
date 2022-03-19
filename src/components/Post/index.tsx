import React from "react";
import * as S from "./styles";
import ImgTexto from "./ImgTexto";
import Acoes from "./Acoes";
import Interacoes from "./Interacoes";
import { PiuData } from "../../interfaces";

function mesC(mes: string) {
  switch (mes) {
    case "01":
      return "jan";
    case "02":
      return "fev";
    case "03":
      return "mar";
    case "04":
      return "abr";
    case "05":
      return "jun";
    case "06":
      return "jul";
    case "07":
      return "ago";
    case "08":
      return "set";
    case "09":
      return "out";
    case "10":
      return "nov";
    case "11":
      return "dez";
    case "12":
      return "jan";
  }
}

const Post: React.FC<PiuData> = ({ text, user, created_at, id, likes }) => {
  const dia = String(created_at).slice(8, 10);
  const mes = mesC(String(created_at).slice(5, 7));
  const ano = String(created_at).slice(0, 4);
  const data = `${dia} ${mes} ${ano}`;
  return (
    <S.Post>
      <ImgTexto
        imgSrc={user.photo}
        userEData={`@${user.username} . ${data}`}
        conteudoPost={text}
      ></ImgTexto>
      <Acoes id={String(id)} username={user.username}></Acoes>
      <Interacoes id={String(id)} likesN={(likes as []).length}></Interacoes>
    </S.Post>
  );
};

export default Post;
