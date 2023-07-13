import axios from "../../utils/axios";

export const getJobsAPI = async () => {
  const response = await axios.get("/jobs");
  return response.data;
};
export const getJobAPI = async (id) => {
  const response = await axios.get(`/jobs/${id}`);
  return response.data;
};
export const addJobApi = async (data) => {
  const response = await axios.post("/jobs", data);
  return response.data;
};
export const editJobAPI = async (data) => {
  const response = await axios.put(`/jobs/${data.id}`, data);
  return response.data;
};
export const deleteJobAPI = async (id) => {
  const response = await axios.delete(`/jobs/${id}`);
  return response.data;
  console.log(response.data);
};
