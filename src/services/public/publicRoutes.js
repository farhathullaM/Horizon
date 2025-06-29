import apiClient from "@/lib/apiClient";

const getUniversityList = async () => {
  const response = await apiClient.get(`/public/universities`);
//   console.log(response.data);
  return response.data;
};

const getUniversityDetails = async (id) => {
  const response = await apiClient.get(`public/universities/${id}`);
  console.log(response.data);
  return response.data;
};




export { getUniversityList, getUniversityDetails };
