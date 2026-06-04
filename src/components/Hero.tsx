import "./Hero.css";
import dente from "../assets/identidade_visual/Uso digital/Logotipo/simbolo 3.png";

export function Hero() {
  const whatsappUrl =
    "https://wa.me/5537971076555?text=Olá! Gostaria de agendar uma consulta com a Dra. Jordana.";

  const scrollToTreatments = () => {
    document
      .getElementById("treatments")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="hero">
      <img src={dente} alt="Dente 1" className="dente-decoration" />
      <div className="hero-content">
        <h1 className="hero-title">Dra. Jordana de Paula</h1>
        <p className="hero-subtitle">Cirurgiã-Dentista em Rio Grande - RS</p>
        <p className="hero-tagline">
          Cuidando do seu sorriso com excelência,
          <br />
          segurança e atendimento humanizado.
        </p>
        <div className="hero-buttons">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Agendar pelo WhatsApp
          </a>
          <button className="btn btn-secondary" onClick={scrollToTreatments}>
            Ver Tratamentos
          </button>
        </div>
      </div>
    </section>
  );
}
