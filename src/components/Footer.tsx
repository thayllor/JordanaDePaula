import "./Footer.css";

export function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <h3>Dra. Jordana de Paula</h3>
          <p>Cirurgiã-Dentista</p>
          <p>Rio Grande - RS</p>
        </div>

        <div className="footer-contact">
          <h4>Contato</h4>
          <a
            href="https://wa.me/5537971076555"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            📱 WhatsApp: (53) 9710-7655
          </a>
          <p>Pronto para atendê-lo(a)</p>
        </div>

        <div className="footer-hours">
          <h4>Horários</h4>
          <p>Segunda a Sexta: 8h - 18h</p>
          <p>Sábado: 8h - 12h</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Dra. Jordana de Paula. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
