import { deleteSuggestion } from "@/services/admin/suggestion";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";


export const useSuggestionActions = () => {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: deleteSuggestion,
    onSuccess: () => {
      queryClient.invalidateQueries(["suggestions"]);
      toast.success("Suggestion deleted successfully!");
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  return {
    remove: deleteMutation.mutate,
    deleted: deleteMutation.isSuccess,
    deleting: deleteMutation.isLoading,
    deleteError: deleteMutation.error,
  };
};
