import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "./services/firebase";
import ChatRoom from "./Components/ChatRoom";
import SignIn from "./Components/SignIn";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div style={{ height: "100vh" }}>{user ? <ChatRoom /> : <SignIn />}</div>
  );
}

export default App;
