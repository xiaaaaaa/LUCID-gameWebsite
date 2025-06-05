import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { 
    getGlobalHearts, getGlobalHeartById, updateGlobalHeartQty,
    getFanQuestionVotes, updateFanQuestionVote,
    getCharacterVotes, updateCharacterVote
} from "@/api/fireStore";

// useGlobalHearts: React Query hook 用於獲取所有 globalHeart 資料
// useGlobalHeartById: React Query hook 用於根據 ID 獲取特定 globalHeart 資料

export const useGlobalHearts = () => {
  return useQuery({
    queryKey: ['globalHearts'],
    queryFn: getGlobalHearts
  });
};

export const useGlobalHeartById = (heartId) => {
  return useQuery({
    queryKey: [heartId],
    queryFn: getGlobalHeartById
  });
};


export const useUpdateGlobalHeart = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: updateGlobalHeartQty,
    onSuccess: () => {
      queryClient.invalidateQueries('globalHearts');
    }
  });
};


export const useFanQuestionVotes = () => {
  return useQuery({
    queryKey: ['fanQuestionVotes'],
    queryFn: getFanQuestionVotes
  });
};

export const useUpdateFanQuestionVote = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: updateFanQuestionVote,
    onSuccess: () => {
      queryClient.invalidateQueries('fanQuestionVotes');
    }
  });
};


export const useCharacterVotes = () => {
  return useQuery({
    queryKey: ['characterVotes'],
    queryFn: getCharacterVotes
  });
};

export const useUpdateCharacterVote = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: updateCharacterVote,
    onSuccess: () => {
      queryClient.invalidateQueries('characterVotes');
    }
  });
};