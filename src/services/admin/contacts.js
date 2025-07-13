import apiClient from "@/lib/apiClient";

const fetchContacts = async (limit, page, search) => {
  const response = await apiClient.get("/contact", {
    params: {
      limit,
      page,
      search,
    },
  });
  return response.data;
};

const deleteContact = async (id) => {
  const response = await apiClient.delete(`/contact/${id}`);
  return response.data;
};

export { fetchContacts, deleteContact };
