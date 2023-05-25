'use client';

import { useEffect } from 'react';
import EmptyState from './components/empty-state/empty-state';

interface ErrorStateProps {
  error: Error;
}

const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <EmptyState title="ای وای!" subtitle="مشکلی پیش آمد!" />;
};

export default ErrorState;
