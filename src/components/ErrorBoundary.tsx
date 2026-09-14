import { Component, type ErrorInfo, type ReactNode } from 'react';

import { LanguageContext, type LanguageContextValue } from '@/context/LanguageContext';

import styles from './ErrorBoundary.module.scss';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  static contextType = LanguageContext;

  declare context: LanguageContextValue;

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      const { title, message } = this.context.content.ui.errorBoundary;
      return (
        this.props.fallback ?? (
          <div role="alert" className={styles.fallback}>
            <h2>{title}</h2>
            <p>{message}</p>
          </div>
        )
      );
    }
    return this.props.children;
  }
}
