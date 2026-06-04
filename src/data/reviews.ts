export interface Review {
  id: number;
  rating: number;
  text: string;
  author?: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    rating: 5,
    text: "Excelente atendimento, muito cuidadosa e atenciosa.",
    author: "Paciente Satisfeito",
  },
  {
    id: 2,
    rating: 5,
    text: "Procedimento tranquilo e recuperação ótima.",
    author: "Paciente Satisfeito",
  },
  {
    id: 3,
    rating: 5,
    text: "Profissional extremamente competente.",
    author: "Paciente Satisfeito",
  },
];
