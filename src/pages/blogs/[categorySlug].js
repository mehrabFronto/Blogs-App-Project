import BlogsList from "@/components/BlogsList/BlogsList";
import DesktopCategory from "@/components/DesktopCategory/DesktopCategory";
import DesktopSort from "@/components/DesktopSort/DesktopSort";
import MobileCategory from "@/components/MobileCategory/Mobilecategory";
import MobileSort from "@/components/MobileSort/MobileSort";
import axios from "axios";
import queryString from "query-string";

export default function BlogsListPage({ blogsData, blogsCategories }) {
   return (
      <main className="bg-gray-200">
         {/* mobile category and sort section */}
         <div className="flex md:hidden flex-col gap-y-2 p-2">
            <MobileCategory blogsCategories={blogsCategories} />
            <MobileSort />
         </div>
         {/* desctop category and sort section - blogs */}
         <div
            className="container mx-auto grid gap-4 lg:gap-8 md:grid-cols-12 
            md:grid-rows-[60px_minmax(300px,1fr)] min-h-screen p-2 lg:p-4">
            {/* desctop category section*/}
            <div className="hidden md:block md:col-span-4 lg:col-span-3 row-span-2">
               <DesktopCategory blogsCategories={blogsCategories} />
            </div>
            {/* mobile category section */}
            {/* desctop sort section */}
            <div className="hidden md:block md:col-span-8 lg:col-span-9">
               <DesktopSort />
            </div>
            {/* blogs section */}
            <div className="md:col-span-8 lg:col-span-9 grid grid-cols-6 gap-8">
               <BlogsList blogs={blogsData.docs} />
            </div>
         </div>
      </main>
   );
}

export async function getServerSideProps(ctx) {
   const { query } = ctx;

   const { data: blogsResult } = await axios.get(
      `http://localhost:5000/api/posts?${queryString.stringify(query)}`,
   );

   const { data: blogsCategoriesResult } = await axios.get(
      "http://localhost:5000/api/post-category",
   );

   const { data: blogsData } = blogsResult;

   const { data: blogsCategories } = blogsCategoriesResult;

   return {
      props: {
         blogsData,
         blogsCategories,
      },
   };
}
