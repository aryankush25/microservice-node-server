import axios from 'axios';
import { Injectable } from 'graphql-modules';
import { userBaseUrl } from '../../utils/subServerUrls';
import { UserInterface } from '../types';

@Injectable()
export class UserServiceProvider {
  async register(email: string, password: string) {
    const response: UserInterface = await axios.post(userBaseUrl, {
      email: email,
      password: password,
    });

    return response;
  }

  async getUser(user_id: string) {
    const response: UserInterface = await axios.get(userBaseUrl + '/' + user_id);

    return response;
  }
}
