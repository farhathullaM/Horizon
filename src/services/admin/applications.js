import apiClient from "@/lib/apiClient";

const fetchApplications = async (limit, page, search) => {
  const response = await apiClient.get("/apply", {
    params: {
      limit,
      page,
      search,
    },
  });
  return response.data;
};

const deleteApplication = async (id) => {
  const response = await apiClient.delete(`/apply/${id}`);
  return response.data;
};

export { fetchApplications, deleteApplication };
