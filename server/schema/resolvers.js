const { UserLists } = require("./Userdata");
const { MovieList } = require("./Moviedata");
const _ = require("lodash");
const resolvers = {
  Query: {
    users: () => {
      return UserLists;
    },
    user: (parent, args) => {
      const id = args.id;
      const user = _.find(UserLists, { id: Number(id) });
      return user;
    },
    movies: () => {
      return MovieList;
    },
    movie: (parent, args) => {
      const name = args.name;
      const movie = _.find(MovieList, { name });
      return movie;
    },
  },
  Mutation: {
    createUser: (parent, args) => {
      const user = args.input;
      const lastId = UserLists[UserLists.length - 1].id;
      user.id = lastId + 1;
      UserLists.push(user);
      return user;
    },
    updateUsername: (parent, { input }) => {
      const id = input.id;
      const newName = input.newName;
      const userIndex = UserLists.findIndex((user) => user.id === Number(id));
      if (userIndex === -1) {
        throw new Error("User not found");
      }
      UserLists[userIndex].name = newName;
      return UserLists[userIndex];
    },
    deleteUser: (parent, args) => {
      const id = args.id;
      _.remove(UserLists, (user) => user.id === Number(id));
      return null;
    },
  },
};

module.exports = { resolvers };
