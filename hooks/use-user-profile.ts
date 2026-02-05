import { useQuery } from '@tanstack/react-query';

export interface UserProfile {
  fossilPoints: number;
  explorerLevel: number;
}

export interface Quest {
  id: number;
  title: string;
  description: string;
  rewardPoints: number;
  status: 'active' | 'completed' | 'on-hold';
}

export interface QuestResponse {
  profile: UserProfile;
  quests: Quest[];
  stats: {
    total: number;
    completed: number;
    active: number;
  };
}

/**
 * Hook to fetch and manage the user's loyalty profile data.
 * Leverages TanStack Query for caching and automatic re-fetching.
 */
export function useUserProfile() {
  const { data, isLoading, error, refetch } = useQuery<QuestResponse>({
    queryKey: ['user-profile'],
    queryFn: async () => {
      const response = await fetch('/api/quests');
      if (!response.ok) {
        throw new Error('Failed to fetch user profile');
      }
      return response.json();
    },
    // Keep data fresh but don't over-fetch
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  return {
    profile: data?.profile || { fossilPoints: 0, explorerLevel: 1 },
    quests: data?.quests || [],
    stats: data?.stats || { total: 0, completed: 0, active: 0 },
    isLoading,
    error,
    refetch,
    // Helper to check if someone is a "Veteran Explorer"
    isVeteran: (data?.profile.explorerLevel || 1) >= 5,
  };
}

