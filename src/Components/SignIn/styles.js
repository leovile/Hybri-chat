import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #5e3f91;
`;

export const HybriWelcome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 30%;
  height: 70%;
  border: 3px solid #40aff0;
  padding: 24px;
  border-radius: 10px;

  @media screen and (max-width: 1024px) {
    width: 50%;
  }

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: white;
  text-align: center;
`;

export const Text = styled.p`
  font-size: 24px;
  font-weight: 500;
  color: white;
  text-align: center;
`;

export const Button = styled.button`
  width: 50%;
  height: 50px;
  border-radius: 10px;
  border: none;
  background-color: #40aff0;
  color: white;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`;
