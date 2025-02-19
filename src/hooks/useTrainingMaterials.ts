
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { TrainingMaterial } from "@/types/training";

export const useTrainingMaterials = (sessionId: string) => {
  return useQuery({
    queryKey: ['training-materials', sessionId],
    queryFn: async () => {
      if (!sessionId) return [];
      
      const { data, error } = await supabase
        .from('training_materials')
        .select('*')
        .eq('session_id', sessionId)
        .order('order_index', { ascending: true });

      if (error) throw error;
      return data as TrainingMaterial[];
    },
    enabled: !!sessionId
  });
};
