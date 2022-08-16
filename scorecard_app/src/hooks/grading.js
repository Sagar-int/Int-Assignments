import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getGradingscaleData = () => {
  return axios.get(`http://localhost:4000/gradingscale`);
};

//Query-hook1
export const useGradingscaleData = () => {
  return useQuery(["grade"], () => getGradingscaleData(), {
    cacheTime: 5000, //It means data from the cache will be garbage collected after 5sec
  });
};