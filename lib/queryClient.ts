import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // ✅ Reduced staleTime: 30 seconds for real-time data (exams, subscriptions)
      // Prevents stale user data visible after logout
      staleTime: 1000 * 30,
      // ✅ Refetch on window focus to sync data when user returns to tab
      refetchOnWindowFocus: true,
      // ✅ Retry once on network error, but not on 4xx errors
      retry: (failureCount, error: any) => {
        // Don't retry auth errors (401/403)
        if (error?.status === 401 || error?.status === 403) return false;
        // Retry once on other failures
        return failureCount < 1;
      },
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    },
  },
});