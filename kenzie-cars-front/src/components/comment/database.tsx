const comments = [
  {
    id: "1",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    createdAt: new Date("2023-01-01"),
    updatedAt: new Date("2023-01-02"),
    postId: "1",
    user: {
      id: "aa05fa28-f094-4c79-9adc-4b7fb942ae89",
      firstName: "João",
      lastName: "Silva",
    },
  },
  {
    id: "2",
    text: "Adorei o post! Muito informativo.",
    createdAt: new Date("2023-01-03"),
    updatedAt: new Date("2023-01-03"),
    postId: "1",
    user: {
      id: "503ffdef-8d86-485d-aab6-2830216a413a",
      firstName: "Maria",
      lastName: "Santos",
    },
  },
  {
    id: "3",
    text: "Parabéns pelo blog!",
    createdAt: new Date("2023-03-04"),
    updatedAt: new Date("2023-03-04"),
    postId: "2",
    user: {
      id: "7b3066cd-aee7-424b-bbd0-a7d41b655e44",
      firstName: "Lucas",
      lastName: "Ferreira",
    },
  },
  {
    id: "4",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    createdAt: new Date("2023-03-04"),
    updatedAt: new Date("2023-03-04"),
    postId: "2",
    user: {
      id: "9b3066cd-aee7-424b-bbd0-a7d41b655e44",
      firstName: "Lucas",
      lastName: "Ferreira",
    },
  },
];

export default comments;
