import apiClient from "@/lib/apiClient";

const addFaq = async (formData) => {
  const response = await apiClient.post("/faq", formData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

const fetchFaqs = async (limit, page, search) => {
  const response = await apiClient.get("/faq", {
    params: {
      limit,
      page,
      search,
    },
  });
  return response.data;
};

const updateFaq = async (id, formData) => {
  const response = await apiClient.put(`/faq/${id}`, faq, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

const deleteFaq = async (id) => {
  const response = await apiClient.delete(`/faq/${id}`);
  return response.data;
};

export { addFaq, fetchFaqs, deleteFaq, updateFaq };
