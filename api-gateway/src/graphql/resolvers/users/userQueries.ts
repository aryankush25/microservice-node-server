import axios from 'axios';
import { userBaseUrl } from '../../../utils/subServerUrls';

const queries = {
  getUser: async (parent, args) => {
    const response = await axios.get(userBaseUrl + '/' + args.email);

    return response.data;
  },
};

export default queries;
