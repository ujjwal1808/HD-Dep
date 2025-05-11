import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: "https://hd-dep.onrender.com/api/v1",  // ✅ No need to add api/v1 again later
	withCredentials: true,
  });
  
