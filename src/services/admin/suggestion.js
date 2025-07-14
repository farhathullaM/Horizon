import apiClient from "@/lib/apiClient";

const fetchSuggestions = async (limit, page, search) => {
  const response = await apiClient.get("/suggest", {
    params: {
      limit,
      page,
      search,
    },
  });
  return response.data;
};

const deleteSuggestion = async (id) => {
  const response = await apiClient.delete(`/suggest/${id}`);
  return response.data;
};

export { fetchSuggestions, deleteSuggestion };
