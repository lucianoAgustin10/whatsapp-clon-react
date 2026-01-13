import "../../styles/sidebar.css";
import { useNavigate } from "react-router-dom";

import juan from "../../assets/juan.jpg";
import maria from "../../assets/maria.jpg";
import trabajo from "../../assets/trabajo.jpg";
import messi from "../../assets/messi.jpg";
import cristiano from "../../assets/cristiano.jpg";
import neymar from "../../assets/neymar.jpg";
import mbappe from "../../assets/mbappe.jpg";
import haaland from "../../assets/haaland.jpg";
import benzema from "../../assets/benzema.jpg";
import ronaldo from "../../assets/ronaldo.jpg";
import modric from "../../assets/modric.jpg";
import salah from "../../assets/salah.jpg";

const chats = [
  { name: "Juan", avatar: juan },
  { name: "María", avatar: maria },
  { name: "Trabajo", avatar: trabajo },
  { name: "Lionel Messi", avatar: messi },
  { name: "Cristiano Ronaldo", avatar: cristiano },
  { name: "Neymar Jr", avatar: neymar },
  { name: "Kylian Mbappé", avatar: mbappe },
  { name: "Erling Haaland", avatar: haaland },
  { name: "Karim Benzema", avatar: benzema },
  { name: "Ronaldo Nazário", avatar: ronaldo },
  { name: "Luka Modrić", avatar: modric },
  { name: "Mohamed Salah", avatar: salah },
];

export default function Sidebar({ activeChat }) {
  const navigate = useNavigate();

  return (
    <aside className="sidebar">
      {/* HEADER */}
      <div className="sidebar-header">
        <span className="sidebar-title">WhatsApp</span>
        <div className="sidebar-actions">
          <button>✎</button>
          <button>⋮</button>
        </div>
      </div>

      {/* BUSCADOR */}
      <div className="sidebar-search">
        <input placeholder="Buscar o iniciar un chat" />
      </div>

      {/* FILTROS */}
      <div className="sidebar-filters">
        <button className="active">Todos</button>
        <button>No leídos</button>
        <button>Favoritos</button>
        <button>Grupos</button>
      </div>

      {/* LISTA DE CHATS */}
      <div className="chat-list">
        {chats.map((chat) => (
          <div
            key={chat.name}
            className={`chat-item ${
              activeChat === chat.name ? "active" : ""
            }`}
            onClick={() =>
              navigate(`/chat?user=${encodeURIComponent(chat.name)}`)
            }
          >
            <img src={chat.avatar} alt={chat.name} />
            <span>{chat.name}</span>
          </div>
        ))}
      </div>
    </aside>
  );
}