import createServer from '../src/server';
import { test } from 'tap';

test('Test /ping', async (t) => {
  const app = createServer();

  const response = await app.inject({
    method: 'GET',
    url: '/ping',
  });

  // console.log('status code: ', response.statusCode)
  // console.log('body: ', response.body)

  t.equal(response.statusCode, 200, 'returns a status code of 200');
});
