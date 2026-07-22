import type { PropsWithChildren } from 'react';
import styles from './Button.module.scss';

export const Button = ({
  children,
  ...props
}: PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};
