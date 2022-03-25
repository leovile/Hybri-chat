import styled from "styled-components";

export const MessageWrapper = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: ${(props) =>
    props.class === "sent" ? "flex-end" : "flex-start"};
  word-break: break-word;
  padding: 0 10px;
`;

export const Message = styled.div`
  width: 45%;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px;
  background-color: #c8c2bc;
  border-radius: ${(props) =>
    props.class === "sent" ? "5px 20px 5px 20px" : "20px 5px 20px 5px"};
  -webkit-box-shadow: 9px 10px 34px -10px rgba(0, 0, 0, 0.58);
  -moz-box-shadow: 9px 10px 34px -10px rgba(0, 0, 0, 0.58);
  box-shadow: 9px 10px 34px -10px rgba(0, 0, 0, 0.58);
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
`;

export const Image = styled.img`
  border-radius: 50%;
  height: 50px;
  width: 50px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Name = styled.p`
  font-size: 16px;
  font-weight: 400;
  text-align: ${(props) => (props.class === "sent" ? "left" : "right")};
`;
