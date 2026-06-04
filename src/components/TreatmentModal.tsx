import "./TreatmentModal.css";

interface Treatment {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image?: string;
}

interface TreatmentModalProps {
  treatment: Treatment;
  onClose: () => void;
}

export function TreatmentModal({ treatment, onClose }: TreatmentModalProps) {
  const whatsappUrl =
    "https://wa.me/5537971076555?text=Olá! Tenho interesse no procedimento de " +
    encodeURIComponent(treatment.title);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>

        {treatment.image && (
          <img
            src={treatment.image}
            alt={treatment.title}
            className="modal-image"
          />
        )}

        <h2>{treatment.title}</h2>
        <p className="modal-description">{treatment.fullDescription}</p>

        <div className="modal-buttons">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Fale conosco pelo WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
