export interface Treatment {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image?: string;
}

export const treatments: Treatment[] = [
  {
    id: 1,
    title: "Implantes",
    shortDescription: "Reposição de dentes perdidos",
    fullDescription:
      "Reposição de dentes perdidos através de implantes modernos e seguros. Procedimento que restaura funcionalidade e estética do seu sorriso.",
    image: "",
  },
  {
    id: 2,
    title: "Extração de Sisos",
    shortDescription: "Procedimento seguro e confortável",
    fullDescription:
      "Procedimento realizado com planejamento, segurança e conforto. Técnicas modernas para minimizar desconforto e recuperação rápida.",
    image: "",
  },
  {
    id: 3,
    title: "Cirurgias Odontológicas",
    shortDescription: "Tratamentos cirúrgicos especializados",
    fullDescription:
      "Tratamentos cirúrgicos realizados com técnicas atualizadas e acompanhamento completo. Segurança e precisão em cada procedimento.",
    image: "",
  },
  {
    id: 4,
    title: "Clareamento",
    shortDescription: "Estética do sorriso restaurada",
    fullDescription:
      "Melhora estética do sorriso com resultados naturais e duradouros. Técnica profissional para um sorriso mais branco e brilhante.",
    image: "",
  },
];
