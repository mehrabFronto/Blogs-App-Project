import http from "./httpService";

export const getCategoriesService = () => {
   return http.get("/post-category");
};
