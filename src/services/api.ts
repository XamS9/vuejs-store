import axiosInstance from "./axiosInstance";

export const fetchUserData = async () => {
  const response = await axiosInstance.get("/users/me");
  return response.data;
};

export const login = async (credentials: LoginCredentials) => {
  const response = await axiosInstance.post("/auth/local", credentials);
  return response.data;
};

export const register = async (userData: UserRegisterData) => {
  const response = await axiosInstance.post("/auth/local/register", userData);
  return response.data;
};

export const getProducts = async (): Promise<Product[]> => {
  const response = await axiosInstance.get("/products", {
    params: { populate: "*" },
  });
  return response.data.data;
};

export const getCategories = async (): Promise<any[]> => {
  const response = await axiosInstance.get("/categories");
  return response.data.data;
};
