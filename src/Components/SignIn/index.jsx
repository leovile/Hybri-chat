import React from "react";
import { auth } from "../../services/firebase";
import firebase from "firebase/compat/app";
import * as S from "./styles";

const SignIn = () => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <S.Container>
      <S.HybriWelcome>
        <S.Title>Bem-Vindo ao Chat Hybri</S.Title>
        <S.Text>Faça Login Abaixo</S.Text>
        <S.Button onClick={signInWithGoogle}>Fazer login com o Google</S.Button>
      </S.HybriWelcome>
    </S.Container>
  );
};

export default SignIn;
