import apiClient from "@/lib/apiClient";

const fetchUniversities = async (limit, page, search) => {
  console.log(limit, page, search, "search");
  const response = await apiClient.get("/university", {
    params: {
      limit,
      page,
      search,
    },
  });

  return response.data;
};

const addUniversity = async (university) => {
  const response = await apiClient.post("/university", university);
  return response.data;
};

const deleteUniversity = async (id) => {
  const response = await apiClient.delete(`/university/${id}`);
  return response.data;
};

const editUniversity = async (id, university) => {
  const response = await apiClient.put(`/university/${id}`, university);
  return response.data;
};

const getUniversity = async (id) => {
  const response = await apiClient.get(`/university/${id}`);
  return response.data;
};

export { fetchUniversities, addUniversity, deleteUniversity, editUniversity };
