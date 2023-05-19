import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useEvent, useStore } from 'effector-react';
import { pageModel } from 'pages/movie';
import { favoritesModel } from 'features/favorites';
import { useToggler } from 'shared/lib';
import { Icon } from 'shared/ui/icon';
import styles from './styles.module.scss';

export const MobileActions = () => {
  const { query } = useRouter();
  const trailerModal = useToggler(pageModel.trailerToggler);
  const shareModal = useToggler(pageModel.shareToggler);
  const toggleFavorite = useEvent(favoritesModel.toggleFavorite);
  const isFavorite = useStore(favoritesModel.$isFavorite);

  const items = [
    { label: 'Трейлер', handler: trailerModal.open, icon: <Icon type="common" name="play" /> },
    {
      label: isFavorite ? 'Запомнен' : 'Запомнить',
      activeClass: isFavorite,
      handler: () => toggleFavorite({ id: query?.id as string }),
      icon: <Icon type="common" name="bookmark" />,
    },
    { label: 'Оценить', icon: <Icon type="common" name="star" /> },
    { label: 'Поделится', handler: shareModal.open, icon: <Icon type="common" name="share" /> },
  ];

  return (
    <div className={styles.root}>
      {items.map((item, idx) => {
        const { label, handler, icon, activeClass } = item;

        return (
          <button
            onClick={handler}
            key={idx}
            className={clsx('btn-reset', activeClass && styles.activeClass, styles.btn)}>
            <span className={styles.icon}>{icon}</span>
            <span className={styles.label}>{label}</span>
          </button>
        );
      })}
    </div>
  );
};
