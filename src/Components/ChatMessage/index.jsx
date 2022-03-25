import React from "react";

import { auth } from "../../services/firebase";
import * as S from "./styles";

const ChatMessage = (props) => {
  const { text, uid, photoURL, displayName } = props.message;

  const sentTrue = uid === auth.currentUser.uid ? true : false;

  return sentTrue ? (
    <S.MessageWrapper class="sent">
      <S.Message class="sent">
        <S.Wrapper>
          <S.Name class="sent">{displayName}</S.Name>
          <S.Text>{text}</S.Text>
        </S.Wrapper>
        <S.Image alt="" src={photoURL} />
      </S.Message>
    </S.MessageWrapper>
  ) : (
    <S.MessageWrapper class="received">
      <S.Message class="received">
        <S.Image alt="" src={photoURL} />
        <S.Wrapper>
          <S.Name class="received">{displayName}</S.Name>
          <S.Text>{text}</S.Text>
        </S.Wrapper>
      </S.Message>
    </S.MessageWrapper>
  );
};

export default ChatMessage;
