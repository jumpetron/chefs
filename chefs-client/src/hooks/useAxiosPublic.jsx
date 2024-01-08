import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://chefs.onrender.com",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
