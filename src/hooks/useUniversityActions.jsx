import {
  addUniversity,
  deleteUniversity,
  editUniversity,
} from "@/services/admin/university";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useUniversityActions = () => {
  const queryClient = useQueryClient();

  const createMutation = useMutation({
    mutationFn: addUniversity,
    onSuccess: () => {
      queryClient.invalidateQueries(["universities"]);
      toast.success("University added successfully!");
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteUniversity,
    onSuccess: () => {
      queryClient.invalidateQueries(["universities"]);
      toast.success("University deleted successfully!");
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  const updateMutation = useMutation({
    mutationFn: editUniversity,
    onSuccess: () => {
      queryClient.invalidateQueries(["universities"]);
      toast.success("University updated successfully!");
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
