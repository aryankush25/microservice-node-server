import { getRepository } from 'typeorm';
import { v4 } from 'uuid';
import { User } from '../database/entity/User';

class UserRepository {
  private userRepository = getRepository(User);

  async createUser(name: string, email: string) {
    const randomUuid = v4();

    const user = await this.userRepository.save({
      name,
      email,
      hashedPassword: randomUuid,
      createdAt: new Date().toISOString(),
      id: randomUuid,
    });

    return user;
  }

  async getUser(props: Object = {}, options: Object = {}) {
    const user = await this.userRepository.findOne(props, options);

    return user;
  }
}

export default UserRepository;
