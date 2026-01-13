import "../../styles/navbar.css";
import myAvatar from "../../assets/MyAvatar.jpg"; // poné tu foto real si querés

export default function NavBar() {
  return (
    <aside className="navbar">
      <div className="nav-top">
        <div className="nav-icon active">💬</div>
        <div className="nav-icon">🔄</div>
        <div className="nav-icon">👥</div>
      </div>

      <div className="nav-bottom">
        <div className="nav-icon">⚙️</div>

        <img
          src={myAvatar}
          alt="Mi perfil"
          className="nav-avatar"
        />
      </div>
    </aside>
  );
}
