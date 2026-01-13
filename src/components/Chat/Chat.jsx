import { useState, useEffect, useRef } from "react";
import "../../../styles/chat.css";
import myAvatar from "../../assets/MyAvatar.jpg"; // tu foto

import avatarJuan from "../../assets/juan.jpg";
import avatarMaria from "../../assets/maria.jpg";
import avatarTrabajo from "../../assets/trabajo.jpg";
import messi from "../../assets/messi.jpg";
import cristiano from "../../assets/cristiano.jpg";
import neymar from "../../assets/neymar.jpg";
import mbappe from "../../assets/mbappe.jpg";
import haaland from "../../assets/haaland.jpg";
import benzema from "../../assets/benzema.jpg";
import ronaldo from "../../assets/ronaldo.jpg";
import modric from "../../assets/modric.jpg";
import salah from "../../assets/salah.jpg";



const avatars = {
  Juan: avatarJuan,
  María: avatarMaria,
  Trabajo: avatarTrabajo,

  "Lionel Messi": messi,
  "Cristiano Ronaldo": cristiano,
  "Neymar Jr": neymar,
  "Kylian Mbappé": mbappe,
  "Erling Haaland": haaland,
  "Karim Benzema": benzema,
  "Ronaldo Nazário": ronaldo,
  "Luka Modrić": modric,
  "Mohamed Salah": salah
};



export default function Chat({ activeChat, messages, sendMessage }) {
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage(input);
    setInput("");
  };

  // 🔥 AUTO SCROLL (clave)
 useEffect(() => {
  const timer = setTimeout(() => {
    bottomRef.current?.scrollIntoView({ behavior: "auto" });
  }, 0);

  return () => clearTimeout(timer);
}, [activeChat, messages]);

if (!messages || messages.length === 0) {

  return (
    <section className="chat">
     <div className="chat-header">
  <button className="back-btn" onClick={() => window.history.back()}>
    ←
  </button>

  <img src={avatars[activeChat]} className="chat-avatar" />
  <span>{activeChat}</span>
</div>

      <div className="chat-messages" />
    </section>
  );
}

  return (
    <section className="chat">
     <div className="chat-header">
  <img src={avatars[activeChat]} className="chat-avatar" />
  <span>{activeChat}</span>
</div>


   <div className="chat-messages">
 {messages.map((msg, index) => (
  <div key={index} className={`message-row ${msg.from}`}>
    
    {/* AVATAR DEL OTRO */}
    {msg.from === "them" && (
      <img
        src={avatars[activeChat]}
        className="message-avatar"
        alt="avatar"
      />
    )}

    {/* MENSAJE */}
    <div className={`msg ${msg.from}`}>
      <span className="msg-text">{msg.text}</span>
      <span className="msg-time">{msg.time}</span>
    </div>

    {/* TU AVATAR */}
    {msg.from === "me" && (
      <img
        src={myAvatar}
        className="message-avatar me"
        alt="mi avatar"
      />
    )}
  </div>
))}



        {/* ANCLA INVISIBLE */}
  <div ref={bottomRef} />
</div>

     <form className="chat-input" onSubmit={handleSend}>
  <input
    value={input}
    onChange={(e) => setInput(e.target.value)}
    placeholder="Escribe un mensaje"
  />

  <button
    type="submit"
    className={`send-btn ${input.trim() ? "active" : ""}`}
  >
    ➤
  </button>
</form>

    </section>
  );
}
