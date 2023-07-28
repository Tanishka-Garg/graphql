const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    age: Int!
    nationality: nationality!
    friends: [User]
  }
  type Query {
    users: [User!]!
    user(id: ID!): User!
  }

  enum nationality {
    INDIAN
    FRENCH
    JAPANESE
    BRITISH
  }
`;

module.exports = { typeDefs };
