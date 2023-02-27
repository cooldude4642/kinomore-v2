import clsx from 'clsx';
import { CSSProperties, useState } from 'react';
import { useRouter } from 'next/router';
import { pageModel } from 'pages/movie';
import { useToggler } from 'shared/lib';
import { CloseIcon, Modal, Spinner } from 'shared/ui';
import { useWindowSize } from './lib';
import styles from './styles.module.scss';

export const Player = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { isOpen, close } = useToggler(pageModel.playerModal);
  const { query } = useRouter();
  const { height } = useWindowSize();

  const handleClose = () => {
    setIsLoading(true);
    close();
  };

  return (
    <Modal
      isOpen={isOpen}
      close={handleClose}
      style={{ '--height': `${height}px` } as CSSProperties}
      className={styles.root}>
      <iframe
        onLoad={() => setIsLoading(false)}
        title="Плеер"
        src={`https://voidboost.net/embed/${query.id}?poster=1&poster_id=4&df=1`}
        allow="autoplay"
        className={styles.iframe}
        allowFullScreen
      />
      <div className={clsx(styles.spinner, isLoading && styles.isLoading)}>
        <Spinner strokeWidth={3} />
      </div>
      <button onClick={handleClose} className={clsx('btn-reset', styles.close)}>
        <CloseIcon />
      </button>
    </Modal>
  );
};
