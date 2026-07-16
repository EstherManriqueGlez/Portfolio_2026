import type { ReactNode } from 'react';
import styles from './MainLayout.module.scss';

export const MainLayout = ({ children }: { children?: ReactNode }) => {
  return (
    <div className={styles.mainLayout}>
      <main>{children}</main>
    </div>
  );
};
