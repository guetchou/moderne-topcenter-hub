
import { renderHook } from '@testing-library/react';
import { useMenus } from '../useMenus';
import { describe, it, expect, vi } from 'vitest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

type WrapperProps = {
  children: React.ReactNode;
};

const Wrapper = ({ children }: WrapperProps) => (
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
);

describe('useMenus', () => {
  it('should return menus data', async () => {
    const { result } = renderHook(() => useMenus('header'), { wrapper: Wrapper });
    expect(result.current.data).toBeDefined();
  });

  it('should handle loading state', () => {
    const { result } = renderHook(() => useMenus('header'), { wrapper: Wrapper });
    expect(result.current.isLoading).toBeDefined();
  });

  it('should handle error state', () => {
    const { result } = renderHook(() => useMenus('header'), { wrapper: Wrapper });
    expect(result.current.error).toBeDefined();
  });
});
