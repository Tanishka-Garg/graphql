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
      const movie = _.find(MovieList, { name: Number(name) });
      return movie;
    },
  },
};

module.exports = { resolvers };
