import { deleteContact } from "@/services/admin/contacts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useContactActions = () => {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: deleteContact,
    onSuccess: () => {
      queryClient.invalidateQueries(["contacts"]);
      toast.success("Contact deleted successfully!");
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
