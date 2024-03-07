import axios from "./axios";

export const getAllTask = async <T>(): Promise<T> => {
  const response = await axios.get("/todos");

  return response.data as T;
};

export const getTaskById = async <T>(id: string): Promise<T> => {
  const response = await axios.get(`/todos/${id}`);
  return response.data;
};
