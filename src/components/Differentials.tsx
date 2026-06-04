import "./Differentials.css";

const differentials = [
  {
    id: 1,
    title: "Atendimento Humanizado",
    icon: "❤️",
  },
  {
    id: 2,
    title: "Planejamento Individual",
    icon: "📋",
  },
  {
    id: 3,
    title: "Tecnologia Atualizada",
    icon: "🔬",
  },
  {
    id: 4,
    title: "Segurança em Procedimentos",
    icon: "🛡️",
  },
];

export function Differentials() {
  return (
    <section id="differentials" className="differentials">
      <div className="differentials-container">
        <h2>Nossos Diferenciais</h2>
        <div className="differentials-grid">
          {differentials.map((diff) => (
            <div key={diff.id} className="differential-card">
              <div className="differential-icon">{diff.icon}</div>
              <h3>{diff.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
