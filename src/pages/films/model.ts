import type { PageContext } from 'nextjs-effector';
import { attach, createEvent, restore, sample } from 'effector';
import { commonApi } from 'shared/api';

export const pageStarted = createEvent<PageContext>();

const getFilmsFx = attach({ effect: commonApi.getCatalog });
export const $films = restore(getFilmsFx, null);

sample({
  clock: pageStarted,
  filter: Boolean,
  fn: ({ query }) => ({ query, type: 1 }),
  target: getFilmsFx,
});
