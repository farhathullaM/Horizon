import apiClient from "@/lib/apiClient";

const fetchBlogs = async (limit, page, search) => {
  const response = await apiClient.get("/blog", {
    params: {
      limit,
      page,
      search,
    },
  });
  return response.data;
};

const addBlog = async (formData) => {
  const response = await apiClient.post("/blog", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

const editBlog = async (id, formData) => {
  const response = await apiClient.put(`/blog/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

const deleteBlog = async (id) => {
  const response = await apiClient.delete(`/blog/${id}`);
  return response.data;
};

export { fetchBlogs, addBlog, editBlog, deleteBlog };
