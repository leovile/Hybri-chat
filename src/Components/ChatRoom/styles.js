import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #40aff0;
  height: 100%;
`;

export const ChatArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: white;
  gap: 50px;
  overflow-y: auto;
  border-bottom: 1px solid grey;
  padding: 20px 0;
`;

export const Form = styled.form`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
`;

export const Span = styled.span``;

export const Input = styled.input`
  width: 80%;
  outline: none;
  border: none;
`;

export const InputRoom = styled.input`
  width: 70%;
  margin-bottom: 20px;
  height: 50px;
  outline: none;
  border: none;
`;

export const Send = styled.button`
  width: 20%;
  cursor: pointer;
  border: none;
  background-color: #5e3f91;
`;

export const RoomSelect = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #5e3f91;
  width: 20%;

  @media screen and (max-width: 1024px) {
    width: 40%;
  }

  @media screen and (max-width: 768px) {
    width: 50%;
  }
`;

export const WrapperOut = styled.div`
  display: flex;
  width: 100%;
  height: calc(100% - 60px);
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
`;

export const CreateRoom = styled.button`
  width: 80%;
  height: 50px;
  color: white;
  background-color: #40aff0;
  border: none;
  border-radius: 5px;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
`;

export const RoomsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px 0;
`;

export const Room = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #40aff0;
  width: 100%;
  height: 50px;
  color: white;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
