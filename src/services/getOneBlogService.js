import http from "./httpService";

export const getOneBlogService = (blogSlug, cookie) => {
   return http.get(`/posts/${blogSlug}`, {
      headers: {
         Cookie: cookie,
      },
   });
};
