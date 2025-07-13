import { addFaq, deleteFaq, updateFaq } from "@/services/admin/faq";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useFaqActions = () => {
  const queryClient = useQueryClient();

  const createMutation = useMutation({
    mutationFn: addFaq,
    onSuccess: () => {
      queryClient.invalidateQueries(["faqs"]);
      toast.success("Faq added successfully!");
    },

    onError: (error) => {
      console.log(error);
      toast.error(error.message);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteFaq,
    onSuccess: () => {
      queryClient.invalidateQueries(["faqs"]);
      toast.success("Faq deleted successfully!");
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateFaq,
    onSuccess: () => {
      queryClient.invalidateQueries(["faqs"]);
      toast.success("Faq updated successfully!");
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  return {
    create: createMutation.mutate,
    created: createMutation.isSuccess,
    creating: createMutation.isLoading,
    createError: createMutation.error,

    remove: deleteMutation.mutate,
    deleted: deleteMutation.isSuccess,
    deleting: deleteMutation.isLoading,
    deleteError: deleteMutation.error,

    update: updateMutation.mutate,
    updated: updateMutation.isSuccess,
    updating: updateMutation.isLoading,
    updateError: updateMutation.error,
  };
};
