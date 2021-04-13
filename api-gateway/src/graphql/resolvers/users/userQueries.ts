import { me } from '../../../services/userService';

const queries = {
  getUser: async (parent, args) => {
    const response = await me(args.email);

    return response.data;
  },
};

export default queries;
