import apiClient from "@/lib/apiClient";

const fetchTestimonials = async (limit, page, search) => {
  const response = await apiClient.get("/testimonial", {
    params: {
      limit,
      page,
      search,
    },
  });
  return response.data;
};

const addTestimonial = async (formData) => {
  const response = await apiClient.post("/testimonial", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

const deleteTestimonial = async (id) => {
  const response = await apiClient.delete(`/testimonial/${id}`);
  return response.data;
};

const updateTestimonial = async (id, formData) => {
  const response = await apiClient.put(`/testimonial/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export {
  fetchTestimonials,
  addTestimonial,
  deleteTestimonial,
  updateTestimonial,
};
