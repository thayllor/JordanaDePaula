import "./Navbar.css";

export function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h2>Dra. Jordana de Paula</h2>
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
