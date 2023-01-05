import clsx from 'clsx';
import type { NextPage } from 'next';
import { useStore } from 'effector-react';
import { pageModel, getGenre, getMovieBreadcrumb } from 'pages/movie';
import { Breadcrumbs } from 'shared/ui/breadcrumbs';
import { Player } from './player';
import { Info } from './info';
import styles from './styles.module.scss';

export const Movie: NextPage = () => {
  const { genres, type } = useStore(pageModel.$movie)!;
  const breadcrumbs = [getMovieBreadcrumb(type), getGenre(genres)];

  return (
    <section className={styles.section}>
      <div className={clsx('container', styles.container)}>
        <Breadcrumbs className={styles.breadcrumbs} items={breadcrumbs} />
        <div className={styles.content}>
          <Player />
          <Info />
        </div>
      </div>
    </section>
  );
};
