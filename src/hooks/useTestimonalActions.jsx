import {
  addTestimonial,
  deleteTestimonial,
  updateTestimonial,
} from "@/services/admin/testimonials";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useTestimonalActions = () => {
  const queryClient = useQueryClient();

  const createMutation = useMutation({
    mutationFn: addTestimonial,
    onSuccess: () => {
      queryClient.invalidateQueries(["testimonials"]);
      toast.success("Testimonial added successfully!");
    },

    onError: (error) => {
      console.log(error);
      toast.error(error.message);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteTestimonial,
    onSuccess: () => {
      queryClient.invalidateQueries(["testimonials"]);
      toast.success("Testimonial deleted successfully!");
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateTestimonial,
    onSuccess: () => {
      queryClient.invalidateQueries(["testimonials"]);
      toast.success("Testimonial updated successfully!");
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
