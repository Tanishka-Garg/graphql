const UserLists = [
  {
    id: 1,
    name: "tan",
    email: "tan@g",
    age: 20,
    nationality: "INDIAN",
  },
  {
    id: 2,
    name: "man",
    email: "man@g",
    age: 24,
    nationality: "INDIAN",
    friends: [
      { id: 1, name: "tan", email: "tan@g", age: 20, nationality: "INDIAN" },
      { id: 8, name: "glen", email: "tan@g", age: 20, nationality: "BRITISH" },
    ],
  },
  {
    id: 3,
    name: "ran",
    email: "ran@g",
    age: 28,
    nationality: "FRENCH",
  },
  {
    id: 4,
    name: "dan",
    email: "dan@g",
    age: 26,
    nationality: "JAPANESE",
  },
];

module.exports = { UserLists };
