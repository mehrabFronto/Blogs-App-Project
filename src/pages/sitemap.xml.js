import http from "@/services/httpService";
import * as fs from "fs";

const Sitemap = () => {
   return null;
};

export default Sitemap;

export const getServerSideProps = async ({ res }) => {
   const staticPaths = fs
      .readdirSync("src/pages")
      .filter((staticPage) => {
         return ![
            "api",
            "_app.js",
            "_document.js",
            "404.js",
            "sitemap.xml.js",
         ].includes(staticPage);
      })
      .map((staticPagePath) => {
         return `${process.env.NEXT_PUBLIC_BASE_API_URL}/${staticPagePath}`;
      });

   // blogs
   const { data } = await http.get(`/posts`);

   const dynamicPaths = data.data.docs.map((singleBlog) => {
      return `${process.env.NEXT_PUBLIC_BASE_API_URL}/posts/${singleBlog.slug}`;
   });

   const allPaths = [...staticPaths, ...dynamicPaths];

   const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPaths
         .map((url) => {
            return `
         <url>
            <loc>${url}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>1.0</priority>
         </url>
         `;
         })
         .join("")}
    </urlset>
  `;

   res.setHeader("Content-Type", "text/xml");
   res.write(sitemap);
   res.end();

   return {
      props: {},
   };
};
