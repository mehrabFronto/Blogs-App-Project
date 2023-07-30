import http from "./httpService";

export const getAllBlogsService = (cookie, query) => {
   return http.get(`/posts?${query}`, {
      headers: {
         Cookie: cookie,
      },
   });
};
