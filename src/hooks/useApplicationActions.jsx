import { deleteApplication } from "@/services/admin/applications";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useApplicationActions = () => {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: deleteApplication,
    onSuccess: () => {
      queryClient.invalidateQueries(["applications"]);
      toast.success("Application deleted successfully!");
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
