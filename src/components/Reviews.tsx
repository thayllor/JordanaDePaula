import { useState } from "react";
import { reviews } from "../data/reviews";
import "./Reviews.css";

export function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const currentReview = reviews[currentIndex];

  return (
    <section id="reviews" className="reviews">
      <div className="reviews-container">
        <h2>Depoimentos de Pacientes</h2>

        <div className="carousel">
          <button className="carousel-button prev" onClick={goToPrevious}>
            &lt;
          </button>

          <div className="review-card">
            <div className="stars">{"⭐".repeat(currentReview.rating)}</div>
            <p className="review-text">"{currentReview.text}"</p>
            {currentReview.author && (
              <p className="review-author">— {currentReview.author}</p>
            )}
          </div>

          <button className="carousel-button next" onClick={goToNext}>
            &gt;
          </button>
        </div>

        <div className="carousel-dots">
          {reviews.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
