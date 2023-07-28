const { UserLists } = require("./data");
const _ = require("lodash");
const resolvers = {
  Query: {
    users: () => {
      UserLists;
    },
    user: (parent, args) => {
      const id = args.id;
      const user = _.find(UserLists, { id });
      return user;
    },
  },
};

module.exports = { resolvers };
