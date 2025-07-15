import apiClient from "@/lib/apiClient";

const getAllUsers = async (page, limit, search) => {
  const response = await apiClient.get(`/user`, {
    params: {
      page,
      limit,
      search,
    },
  });

  console.log(response.data);
  return response.data;
};

const makeUserAdmin = async (id) => {
  const response = await apiClient.patch(`/user/make-admin/${id}`);
  return response.data;
};

const makeAdminUser = async (id) => {
  const response = await apiClient.patch(`/user/demote-admin/${id}`);
  return response.data;
};

const removeUser = async (id) => {
  const response = await apiClient.delete(`/user/${id}`);
  return response.data;
};

export { getAllUsers, makeUserAdmin, makeAdminUser, removeUser };
