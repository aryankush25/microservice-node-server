import axios from 'axios';
import { userBaseUrl } from '../../../utils/subServerUrls';

const mutations = {
  createUser: async (parent, args) => {
    const response = await axios.post(userBaseUrl, {
      name: args.name,
      email: args.email,
    });

    return response.data;
  },
};

export default mutations;
