import { rest } from 'msw';

const PREFIX_VER1 = '/api/v1';

const testAPI = rest.get(`${PREFIX_VER1}/test`, (_, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      username: 'test',
    }),
  );
});

export const TestHandler = [testAPI];
