import apiClient from "@/lib/apiClient";

const getUniversityList = async () => {
  const response = await apiClient.get(`/public/universities`);
  return response.data;
};

const getUniversityDetails = async (id) => {
  const response = await apiClient.get(`public/universities/${id}`);
  console.log(response.data);
  return response.data;
};

const getAllBlogs = async () => {
  const response = await apiClient.get(`/public/blogs`);
  console.log(response.data);
  return response.data;
};

const getAllFaqs = async () => {
  const response = await apiClient.get(`/public/faqs`);
  console.log(response.data);
  return response.data;
};

const getAllTestimonials = async () => {
  const response = await apiClient.get(`/public/testimonials`);
  console.log(response.data);
  return response.data;
};

const requestSuggestion = async (formData) => {
  const response = await apiClient.post(`/public/suggest`, formData);
  console.log(response.data);

  return response.data;
};

const contact = async (formData) => {
  const response = await apiClient.post(`/public/contact`, formData);
  console.log(response.data);
  return response.data;
};

export {
  getUniversityList,
  getUniversityDetails,
  getAllBlogs,
  getAllFaqs,
  getAllTestimonials,
  requestSuggestion,
  contact,
};
