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

const addUniversity = async (formData) => {
  console.log(formData);
  const response = await apiClient.post("/university", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  console.log(response.data);
  return response.data;
};

const deleteUniversity = async (id) => {
  const response = await apiClient.delete(`/university/${id}`);
  return response.data;
};

const editUniversity = async (id, formData) => {
  const response = await apiClient.put(`/university/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

const getUniversity = async (id) => {
  const response = await apiClient.get(`/university/${id}`);
  return response.data;
};

export { fetchUniversities, addUniversity, deleteUniversity, editUniversity, getUniversity };
