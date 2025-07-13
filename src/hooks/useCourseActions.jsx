import { addCourse, deleteCourse, editCourse } from "@/services/admin/courses";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useCourseActions = () => {
  const queryClient = useQueryClient();

  const createMutation = useMutation({
    mutationFn: addCourse,
    onSuccess: () => {
      queryClient.invalidateQueries(["courses"]);
      toast.success("Course added successfully!");
    },

    onError: (error) => {
      console.log(error);
      toast.error(error.message);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteCourse,
    onSuccess: () => {
      queryClient.invalidateQueries(["courses"]);
      toast.success("Course deleted successfully!");
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  const updateMutation = useMutation({
    mutationFn: editCourse,
    onSuccess: () => {
      queryClient.invalidateQueries(["courses"]);
      toast.success("Course updated successfully!");
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
