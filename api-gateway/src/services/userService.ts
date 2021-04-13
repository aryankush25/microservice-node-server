import axios from 'axios';
import { userBaseUrl } from '../utils/subServerUrls';

export const register = async (name: string, email: string) => {
  const response = await axios.post(userBaseUrl, {
    name: name,
    email: email,
  });

  return response;
};

export const me = async (email: string) => {
  const response = await axios.get(userBaseUrl + '/' + email);

  return response;
};
