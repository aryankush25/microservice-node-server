import axios from 'axios';
import { register } from '../../../services/userService';
import { userBaseUrl } from '../../../utils/subServerUrls';

const mutations = {
  createUser: async (parent, args) => {
    const response = await register(args.name, args.email);

    return response.data;
  },
};

export default mutations;
