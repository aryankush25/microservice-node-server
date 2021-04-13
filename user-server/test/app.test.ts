import createServer from '../src/server';
import { test } from 'tap';

const app = createServer();

test('GET /ping', async (t) => {
  const response = await app.inject({
    method: 'GET',
    url: '/ping',
  });

  t.equal(response.statusCode, 200);
});

test('POST /user', async (t) => {
  const response = await app.inject({
    method: 'POST',
    url: '/user',
    payload: {
      name: 'test',
      email: 'test101@test.com',
    },
  });

  t.equal(response.statusCode, 200);
});

test('GET /user', async (t) => {
  const response = await app.inject({
    method: 'GET',
    url: '/user/test@test.com',
  });

  t.equal(response.statusCode, 200);
});
