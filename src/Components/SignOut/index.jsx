import React from "react";
import { auth } from "../../services/firebase";

import * as S from "./styles";

const SignOut = ({ roomName }) => {
  return (
    auth.currentUser && (
      <S.Header>
        <S.Wrapper>
          <S.Title>Hybri Chat</S.Title>
          <S.Title>{roomName}</S.Title>
          <S.Button onClick={() => auth.signOut()}>Sign Out</S.Button>
        </S.Wrapper>
      </S.Header>
    )
  );
};

export default SignOut;
