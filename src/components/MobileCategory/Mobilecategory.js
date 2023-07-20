import Link from "next/link";
import { useRouter } from "next/router";

const MobileCategory = ({ blogsCategories }) => {
   const { pathname, query } = useRouter();

   return (
      <div
         className="flex md:hidden items-center gap-x-4 overflow-auto text-slate-800 pb-4 
         customScrollBar text-sm">
         <Link
            className={`block px-4 py-2 transition-all duration-100 border 
             rounded-3xl whitespace-nowrap 
            ${
               pathname === "/blogs"
                  ? "bg-blue-600 text-blue-100 !border-blue-600"
                  : "border-gray-500 text-gray-600"
            }`}
            href="/blogs">
            همه مقالات
         </Link>
         {blogsCategories.map((category) => {
            return (
               <Link
                  key={category._id}
                  className={`block px-4 py-2 transition-all duration-100 border 
                   rounded-3xl whitespace-nowrap 
                  ${
                     query.categorySlug === category.englishTitle
                        ? "bg-blue-600 text-blue-100 border-blue-600"
                        : "border-gray-500 text-gray-600"
                  }`}
                  href={`/blogs/${category.englishTitle}`}>
                  {category.title}
               </Link>
            );
         })}
      </div>
   );
};

export default MobileCategory;
