import type { AnchorHTMLAttributes, ButtonHTMLAttributes, PropsWithChildren } from 'react';
import styles from './Button.module.scss';

type ButtonProps = PropsWithChildren<
  | ({ as?: 'button' } & ButtonHTMLAttributes<HTMLButtonElement>)
  | ({ as: 'a'; href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
>;

export const Button = ({ children, as = 'button', ...props }: ButtonProps) => {
  if (as === 'a') {
    const { href, target, rel, ...anchorProps } = props as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a href={href} target={target} rel={rel} className={styles.button} {...anchorProps}>
        {children}
      </a>
    );
  }

  return (
    <button className={styles.button} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
};
