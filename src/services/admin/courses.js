import apiClient from "@/lib/apiClient";

const addCourse = async (formData) => {
  console.log(formData);
  const response = await apiClient.post("/course", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

const fetchCourses = async (limit, page, search) => {
  const response = await apiClient.get("/course", {
    params: {
      limit,
      page,
      search,
    },
  });
  return response.data;
};

const deleteCourse = async (id) => {
  const response = await apiClient.delete(`/course/${id}`);
  return response.data;
};

const editCourse = async (id, course) => {
  const response = await apiClient.put(`/course/${id}`, course, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

const getCourseById = async (id) => {
  const response = await apiClient.get(`/course/${id}`);
  return response.data;
};

export { addCourse, fetchCourses, deleteCourse, editCourse, getCourseById };
