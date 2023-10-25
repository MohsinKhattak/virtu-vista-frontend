import React from "react";
import Chat from "../../../components/Chat/Chat";
function ChatPage() {
  return (
    <>
      <div className="d-flex flex-row align-items-center justify-content-start w-100 border-bottom mb-3">
        <p className="notification-title">Chats</p>
      </div>
      <Chat />
    </>
  );
}

export default ChatPage;
