
import { addBlog, deleteBlog, editBlog } from "@/services/admin/blogs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useBlogActions = () => {
  const queryClient = useQueryClient();

  const createMutation = useMutation({
    mutationFn:  addBlog,
    onSuccess: () => {
      queryClient.invalidateQueries(["blogs"]);
      toast.success("Blog added successfully!");
    },

    onError: (error) => {
      console.log(error);
      toast.error(error.message);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteBlog,
    onSuccess: () => {
      queryClient.invalidateQueries(["blogs"]);
      toast.success("Blog deleted successfully!");
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  const updateMutation = useMutation({
    mutationFn: editBlog,
    onSuccess: () => {
      queryClient.invalidateQueries(["blogs"]);
      toast.success("Blog updated successfully!");
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
