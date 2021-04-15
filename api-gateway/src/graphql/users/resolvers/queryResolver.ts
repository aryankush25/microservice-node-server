import { UserProvider } from '../providers/UserProvider';

export const QueryResolver = {
  Query: {
    me: (_0: any, _1: any, { injector, user_id }: any) => {
      return injector.get(UserProvider).getMe(user_id);
    },
  },
};
