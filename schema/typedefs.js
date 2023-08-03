const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    age: Int!
    nationality: Nationality!
    friends: [User]
    fav_movie: Movie
  }

  type Movie {
    id: ID!
    name: String!
    genre: Genre!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User!
    movies: [Movie!]!
    movie(name: String!): Movie!
  }
  input createUserInput {
    name: String!
    email: String!
    age: Int!
    nationality: Nationality!
  }
  type Mutation {
    createUser(input: createUserInput!): User!
  }

  enum Nationality {
    INDIAN
    FRENCH
    JAPANESE
    BRITISH
  }
  enum Genre {
    COMEDY
    HORROR
    DRAMA
    THRILLER
    FANTASY
    SCI_FI
  }
`;

module.exports = { typeDefs };
