import { useState } from "react";
import { treatments } from "../data/treatments";
import { TreatmentModal } from "./TreatmentModal";
import "./Treatments.css";

const ITEMS_PER_PAGE = 4;

export function Treatments() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedTreatment, setSelectedTreatment] = useState(null);

  const totalPages = Math.ceil(treatments.length / ITEMS_PER_PAGE);
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const currentTreatments = treatments.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  const goToPrevious = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section id="treatments" className="treatments">
      <div className="treatments-container">
        <h2>Nossos Tratamentos</h2>
        <p className="treatments-subtitle">
          Conheça os principais procedimentos que oferecemos
        </p>

        <div className="treatments-carousel">
          <button className="carousel-button prev" onClick={goToPrevious}>
            &lt;
          </button>

          <div className="treatments-grid">
            {currentTreatments.map((treatment) => (
              <div
                key={treatment.id}
                className="treatment-card"
                onClick={() => setSelectedTreatment(treatment)}
              >
                <div className="treatment-image-placeholder">
                  {treatment.image ? (
                    <img src={treatment.image} alt={treatment.title} />
                  ) : (
                    <span className="treatment-icon">🦷</span>
                  )}
                </div>
                <div className="treatment-content">
                  <h3>{treatment.title}</h3>
                  <p>{treatment.shortDescription}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-button next" onClick={goToNext}>
            &gt;
          </button>
        </div>

        <div className="carousel-dots">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentPage ? "active" : ""}`}
              onClick={() => goToPage(index)}
            />
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
