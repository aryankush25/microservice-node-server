import axios from 'axios';
import { Injectable } from 'graphql-modules';
import { userBaseUrl } from '../../utils/subServerUrls';
import { UserInterface } from '../types';

@Injectable()
export class UserServiceProvider {
  async login(email: string, password: string) {
    const response: UserInterface = await axios.get(`${userBaseUrl}?email=${email}&password=${password}`);

    return response;
  }

  async register(name: string, email: string, password: string) {
    const response: UserInterface = await axios.post(userBaseUrl, {
      name: name,
      email: email,
      password: password,
    });

    return response;
  }

  async getUser(userId: string) {
    const response: UserInterface = await axios.get(userBaseUrl + '/' + userId);

    return response;
  }
}
