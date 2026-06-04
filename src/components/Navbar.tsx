import "./Navbar.css";
import logo from "../assets/identidade_visual/Uso digital/Logotipo/Logo Horizontal 1.png";

export function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Logo da Dra. Jordana" className="logo-image" />
        </div>
        <ul className="navbar-menu">
          <li>
            <button onClick={() => scrollToSection("hero")}>Início</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("about")}>Sobre</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("treatments")}>
              Tratamentos
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("differentials")}>
              Diferenciais
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("reviews")}>
              Depoimentos
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("contact")}>Contato</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
