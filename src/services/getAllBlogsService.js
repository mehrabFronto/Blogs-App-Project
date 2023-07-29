import http from "./httpService";

export const getAllBlogsService = (cookie) => {
   return http.get("/posts?page=1&limit=6", {
      headers: {
         Cookie: cookie,
      },
   });
};
