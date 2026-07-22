import type { PropsWithChildren } from 'react';
import styles from './Card.module.scss';

interface CardProps extends PropsWithChildren {
  className?: string;
}

export const Card = ({ children, className = '' }: CardProps) => {
  return <div className={`${styles.card} ${className}`}>{children}</div>;
};
