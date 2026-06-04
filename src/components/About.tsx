import "./About.css";

export function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image">
          <div className="image-placeholder">Foto da Dra. Jordana</div>
        </div>
        <div className="about-content">
          <h2>Sobre a Dra. Jordana</h2>
          <p>
            Atendimento odontológico focado na saúde, funcionalidade e estética
            do sorriso.
          </p>
          <p>
            Compromisso com procedimentos seguros, tecnologia atualizada e
            cuidado individualizado para cada paciente.
          </p>
          <div className="about-highlights">
            <div className="highlight">
              <span className="number">+10</span>
              <span className="label">
                Semanas de Experiência "(" isso aki e pra editar pro q tu
                quiser")"
              </span>
            </div>
            <div className="highlight">
              <span className="number">2000+</span>
              <span className="label">
                Pacientes Satisfeitos "(" futuramente")"
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
