import "./CTA.css";

export function CTA() {
  const whatsappUrl =
    "https://wa.me/5537971076555?text=Olá! Gostaria de agendar minha avaliação.";

  return (
    <section id="cta" className="cta">
      <div className="cta-container">
        <h2>Pronto para cuidar do seu sorriso?</h2>
        <p>Agende sua avaliação pelo WhatsApp</p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-large"
        >
          Agendar Agora
        </a>
      </div>
    </section>
  );
}
