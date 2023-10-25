import React from "react";
import "./Chat.css";
import chatAvatar from "../../assets/icons/Ellipse 499.svg";
import attachIcon from "../../assets/icons/Path-75_3_.svg";
function Chat() {
  return (
    <div className="chat d-flex flex-row w-100 vh-75">
      <div
        style={{ minHeight: "500px" }}
        className="chats-available d-flex flex-column col-lg-3 h-100 py-2 px-1"
      >
        <div className="d-flex flex-row w-100  ">
          <div>
            <img src={chatAvatar} />
          </div>
          <div className="d-flex flex-column w-75 ">
            <div className="d-flex flex-row align-items-center justify-content-between ">
              <div>
                <p className="chat-username my-0">Sarah Johnson</p>
              </div>
              <div>
                <p className="chat-username chat-time my-0">12:01pm</p>
              </div>
            </div>
            <div className="d-flex flex-row align-items-center">
              <p className="chat-message">
                Lorem ipsum dolor sit amet consectetur. Donec.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ minHeight: "500px" }}
        className="chats-box   d-flex flex-column align-items-between col-lg-9   "
      >
        <div className="d-flex flex-row align-items-center">
          <div>
            <img src={chatAvatar} />
          </div>
          <div className="chat-receive d-flex flex-row align-items-center jsutofy-content-center px-3 py-2 rounded-pill">
            <div>
              <p className="chat-username text-light my-0">Hey</p>
            </div>
          </div>
        </div>
        <div className="d-flex flex-row align-items-center justify-content-end">
          <div className="chat-send  d-flex flex-row align-items-center jsutofy-content-center px-3 py-2 rounded-pill">
            <div>
              <p className="chat-username text-black my-0">
                Lorem ipsum dolor sit amet consectetur. Lacus ante sollicitudin
                feugiat <br />
                vulputate fermentum amet massa.
              </p>
            </div>
          </div>
        </div>

        <div className="d-flex flex-row align-items-center">
          <div>
            <img src={chatAvatar} />
          </div>
          <div className="chat-receive d-flex flex-row align-items-center jsutofy-content-center px-3 py-2 rounded-pill">
            <div>
              <p className="chat-username text-light my-0">Hey are you</p>
            </div>
          </div>
        </div>
        <div className="d-flex flex-row align-items-center justify-content-end">
          <div className="chat-send  d-flex flex-row align-items-center jsutofy-content-center px-3 py-2 rounded-pill">
            <div>
              <p className="chat-username text-black my-0">
                Lorem ipsum dolor sit amet consectetur. Lacus ante sollicitudin
              </p>
            </div>
          </div>
        </div>

        <div className="mesasge-type-container d-flex flex-row align-items-center justify-content-center  ">
          <div className="message-type-area d-flex flex-row bg-white align-items-center justify-content-between w-75 rounded-4 px-3">
            <input
              type="text"
              class="input-box ib-placeholder rounded-4 px-2  w-50   "
              id="username"
              placeholder="type here ..."
            />
            <div className="d-flex flex-row align-items-center">
              <img src={attachIcon} className="me-2" />
              <button className="sign-in-button rounded-pill px-3  ">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
