import http from "./httpService";

export const getOneCategoryBlogsService = (query, cookie) => {
   return http.get(`/posts?${query}`, {
      headers: {
         Cookie: cookie,
      },
   });
};
