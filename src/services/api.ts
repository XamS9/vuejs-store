import axiosInstance from "./axiosInstance";

export const fetchUserData = async () => {
  const response = await axiosInstance.get("/me");
  return response.data.data;
};

export const login = async (credentials: URLSearchParams) => {
  const response = await axiosInstance.post("/login", credentials, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  return response.data.data;
};

export const register = async (userData: URLSearchParams) => {
  const response = await axiosInstance.post("/register", userData, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
  });
  return response.data.data;
};

export const getProducts = async (): Promise<Product[]> => {
  const response = await axiosInstance.get("/products");
  return response.data.data;
};

export const getCategories = async (): Promise<any[]> => {
  const response = await axiosInstance.get("/categories");
  return response.data.data;
};
