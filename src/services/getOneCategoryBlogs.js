import http from "./httpService";

export const getOneCategoryService = (query, cookie) => {
   return http.get(`/posts?${query}`, {
      headers: {
         Cookie: cookie,
      },
   });
};
