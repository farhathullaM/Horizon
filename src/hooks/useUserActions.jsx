import {
  makeAdminUser,
  makeUserAdmin,
  removeUser,
} from "@/services/superAdmin/user";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const userUserActions = () => {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: removeUser,
    onSuccess: () => {
      queryClient.invalidateQueries(["userList"]);
      toast.success("User Removed successfully!");
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  const makeAdminMutation = useMutation({
    mutationFn: makeUserAdmin,
    onSuccess: () => {
      queryClient.invalidateQueries(["userList"]);
      toast.success("Role updated successfully!");
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  const makeUserMutation = useMutation({
    mutationFn: makeAdminUser,
    onSuccess: () => {
      queryClient.invalidateQueries(["userList"]);
      toast.success("Role updated successfully!");
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  return {
    makeAdmin: makeAdminMutation.mutate,
    maked: makeAdminMutation.isSuccess,
    making: makeAdminMutation.isLoading,
    makeError: makeAdminMutation.error,

    remove: deleteMutation.mutate,
    deleted: deleteMutation.isSuccess,
    deleting: deleteMutation.isLoading,
    deleteError: deleteMutation.error,

    makeUser: makeUserMutation.mutate,
    usered: makeUserMutation.isSuccess,
    usering: makeUserMutation.isLoading,
    userError: makeUserMutation.error,
  };
};
