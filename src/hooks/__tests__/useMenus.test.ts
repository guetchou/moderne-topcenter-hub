
import { renderHook } from '@testing-library/react';
import { useMenus } from '../useMenus';
import { describe, it, expect } from 'vitest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

const queryClient = new QueryClient();

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
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
