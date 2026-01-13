import { useState, useEffect } from "react";
import {
  Routes,
  Route,
  useSearchParams,
  Navigate,
} from "react-router-dom";

import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";
import NavBar from "./components/NavBar/Navbar";

import "./styles/app.css";

/* ================= DATA ================= */

const initialMessages = {
  Juan: [
    {
      from: "them",
      text: "si hubiese jugado en el siglo 21 minimo 2 balon de oro",
      time: "10:10",
    },
  ],
  María: [
    { from: "them", text: "te paga dios, confia", time: "00:00" },
  ],
  Trabajo: [
    { from: "them", text: "reunion a las 10", time: "09:10" },
  ],

  "Lionel Messi": [
    { from: "them", text: "unas ganas de estar solo en casa", time: "22:10" },
  ],
  "Cristiano Ronaldo": [
    { from: "them", text: "Entrenamos mañana 💪", time: "21:40" },
  ],
  "Neymar Jr": [
    {
      from: "them",
      text: "soy el jugador de cristal de super campeones no?",
      time: "23:10",
    },
  ],
  "Kylian Mbappé": [
    {
      from: "them",
      text: "hice lo que pude en qatar, no tenia team jaja",
      time: "20:10",
    },
  ],
  "Erling Haaland": [
    {
      from: "them",
      text: "estoy pensando en un cambio de liga, que decis?",
      time: "22:17",
    },
  ],
  "Karim Benzema": [
    {
      from: "them",
      text: "no se en que pensaba cuando me vine arabia, dios",
      time: "10:47",
    },
  ],
  "Ronaldo Nazário": [
    {
      from: "them",
      text: "imaginate si tuviese 2 rodillas y casado... jaja",
      time: "19:10",
    },
  ],
  "Luka Modrić": [
    {
      from: "them",
      text: "le di mi mejor brillo y me descartaron como a cr7",
      time: "23:23",
    },
  ],
  "Mohamed Salah": [
    { from: "them", text: "mvp y me sientan, te parece?", time: "22:10" },
  ],
};

/* ================= APP ================= */

export default function App() {
  const [searchParams, setSearchParams] = useSearchParams();

  const chatFromUrl = searchParams.get("user") || "Juan";

  const [activeChat, setActiveChat] = useState(chatFromUrl);
  const [messagesByChat, setMessagesByChat] = useState(initialMessages);

  /* 🔥 SINCRONIZA URL ↔ ESTADO */
  useEffect(() => {
    setActiveChat(chatFromUrl);
  }, [chatFromUrl]);

  const sendMessage = (text) => {
    const time = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    setMessagesByChat((prev) => ({
      ...prev,
      [activeChat]: [
        ...(prev[activeChat] || []),
        { from: "me", text, time },
      ],
    }));
  };

  return (
    <div className="app">
      <NavBar />

      <Routes>
        {/* REDIRECCIÓN */}
        <Route path="/" element={<Navigate to="/chat" replace />} />

        {/* CHAT */}
        <Route
          path="/chat"
          element={
            <>
              <Sidebar
                activeChat={activeChat}
                setActiveChat={(chat) =>
                  setSearchParams({ user: chat })
                }
              />

              <Chat
                activeChat={activeChat}
                messages={messagesByChat[activeChat]}
                sendMessage={sendMessage}
              />
            </>
          }
        />
      </Routes>
    </div>
  );
}
