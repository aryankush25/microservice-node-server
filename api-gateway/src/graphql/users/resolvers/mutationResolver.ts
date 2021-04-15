import { UserProvider } from '../providers/UserProvider';

export const MutationResolver = {
  Mutation: {
    signup: (_0: any, args: any, { injector }: any) => {
      return injector.get(UserProvider).signup(args);
    },
    login: (_0: any, args: any, { injector }: any) => {
      return injector.get(UserProvider).login(args);
    },
  },
};
