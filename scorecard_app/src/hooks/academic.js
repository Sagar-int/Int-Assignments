import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getPart1Data = () => {
  return axios.get(`http://localhost:4000/scolasticsarea`);
};

//Query-hook1
export const useScolasticsData = () => {
  return useQuery(["part_1"], () => getPart1Data(), {
    cacheTime: 5000, //It means data from the cache will be garbage collected after 5sec
  });
};


const getPart2Data = () => {
  return axios.get(`http://localhost:4000/coscalasticsarea`);
};

//Query-hook2
export const useCoScolasticsData = () => {
  return useQuery(["part_2"], () => getPart2Data(), {
    cacheTime: 5000, //It means data from the cache will be garbage collected after 5sec
  });
};


const getPart3Data = () => {
  return axios.get(`http://localhost:4000/attendance`);
};

//Query-hook2
export const useAttendenceData = () => {
  return useQuery(["part_3"], () => getPart3Data(), {
    cacheTime: 5000, //It means data from the cache will be garbage collected after 5sec
  });
};
