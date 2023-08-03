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
  },
};

module.exports = { resolvers };
