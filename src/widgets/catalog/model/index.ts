import type { PageContext } from 'nextjs-effector';
import { attach, combine, createEvent, createStore, restore, sample } from 'effector';
import { navigationModel } from 'entities/navigation';
import { commonApi } from 'shared/api';
import { getCatalogType } from '../lib';

export const pageStarted = createEvent<PageContext>();

export const getCatalogFx = attach({ effect: commonApi.getCatalog });
export const $catalog = restore(getCatalogFx, null);

export const loadMore = createEvent();

export const $hasMore = createStore(false);

export const $limit = createStore(30)
  .on(loadMore, (state) => state + 30)
  .reset(navigationModel.routerUpdated);

const $pageContext = createStore<PageContext | null>(null);

sample({
  clock: pageStarted,
  target: [$pageContext, navigationModel.routerUpdated],
});

const $params = combine($pageContext, $limit, (context, limit) => {
  return { context, limit };
});

sample({
  clock: [pageStarted, loadMore],
  source: $params,
  fn: ({ limit, context }) => ({ ...context?.query, limit, type: getCatalogType(context?.pathname) }),
  target: getCatalogFx,
});

sample({
  clock: getCatalogFx.doneData,
  source: $limit,
  fn: (limit, { total }) => total > limit,
  target: $hasMore,
});
