import { useState } from "react";
import { treatments } from "../data/treatments";
import { TreatmentModal } from "./TreatmentModal";
import "./Treatments.css";

export function Treatments() {
  const [selectedTreatment, setSelectedTreatment] = useState(null);

  return (
    <section id="treatments" className="treatments">
      <div className="treatments-container">
        <h2>Nossos Tratamentos</h2>
        <p className="treatments-subtitle">
          Conheça os principais procedimentos que oferecemos
        </p>
        <div className="treatments-grid">
          {treatments.map((treatment) => (
            <div key={treatment.id} className="treatment-card">
              <div className="treatment-icon">
                <span>🦷</span>
              </div>
              <h3>{treatment.title}</h3>
              <p>{treatment.shortDescription}</p>
              <button
                className="btn btn-outline"
                onClick={() => setSelectedTreatment(treatment)}
              >
                Saiba Mais
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedTreatment && (
        <TreatmentModal
          treatment={selectedTreatment}
          onClose={() => setSelectedTreatment(null)}
        />
      )}
    </section>
  );
}
