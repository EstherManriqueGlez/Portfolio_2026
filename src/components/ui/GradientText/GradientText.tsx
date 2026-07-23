import type { PropsWithChildren } from 'react';
import styles from './GradientText.module.scss';

export const GradientText = ({ children }: PropsWithChildren) => {
  return <span className={styles.gradient}>{children}</span>;
};
