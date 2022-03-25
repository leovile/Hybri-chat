import React, { useState, useRef, useEffect } from "react";

import { auth, firestore } from "../../services/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from "firebase/compat/app";
import { getDocs } from "@firebase/firestore";
import SignOut from "../SignOut";
import ChatMessage from "../ChatMessage";

import * as S from "./styles";
import uniqid from "uniqid";

const ChatRoom = () => {
  const messagesRef = firestore.collection("messages");
  const roomsRef = firestore.collection("rooms");

  const [rooms, setRooms] = useState();
  const [name, setName] = useState();
  const [selectedRoom, setSelectedRoom] = useState("l16szgo8");
  const [selectedRoomName, setSelectedRoomName] = useState("Sala 1");
  const [formValue, setFormValue] = useState("");

  const customRef = useRef();

  const query = messagesRef.orderBy("createdAt").limitToLast(25);
  const [messages] = useCollectionData(query, { idField: "id" });

  useEffect(() => {
    customRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();

    if (formValue !== "") {
      e.preventDefault();

      const { uid, photoURL, displayName } = auth.currentUser;

      await messagesRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL,
        selectedRoom,
        displayName,
      });

      setFormValue("");
    }
    return;
  };

  const createRoom = async () => {
    if (name) {
      await roomsRef.add({
        name,
        roomId: uniqid(),
      });
      getRooms();
      setSelectedRoom(rooms[rooms.length].roomId);
      setSelectedRoomName(rooms[rooms.length].name);
    }
    return;
  };

  const getRooms = async () => {
    const data = await getDocs(roomsRef);
    setRooms(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getRooms();
    if (rooms) {
      setSelectedRoom(rooms[rooms.length].roomId);
    }
  }, []);

  return (
    <S.Container>
      <SignOut roomName={selectedRoomName} />
      <S.WrapperOut>
        <S.RoomSelect>
          <S.InputRoom
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Escolha um nome para a sala"
          />
          <S.CreateRoom onClick={() => createRoom()}>Criar Sala</S.CreateRoom>
          <S.RoomsWrapper>
            {rooms &&
              rooms.map((room) => (
                <S.Room
                  onClick={() => {
                    setSelectedRoom(room.roomId);
                    setSelectedRoomName(room.name);
                  }}
                  key={uniqid()}
                >
                  {room.name}
                </S.Room>
              ))}
          </S.RoomsWrapper>
        </S.RoomSelect>
        <S.Wrapper>
          <S.ChatArea>
            {messages &&
              messages.map(
                (msg) =>
                  msg.selectedRoom === selectedRoom && (
                    <ChatMessage key={msg.id} message={msg}></ChatMessage>
                  )
              )}
            <S.Span ref={customRef}></S.Span>
          </S.ChatArea>

          <S.Form onSubmit={sendMessage}>
            <S.Input
              value={formValue}
              onChange={(e) => setFormValue(e.target.value)}
            />
            <S.Send type="submit">👉</S.Send>
          </S.Form>
        </S.Wrapper>
      </S.WrapperOut>
    </S.Container>
  );
};

export default ChatRoom;
