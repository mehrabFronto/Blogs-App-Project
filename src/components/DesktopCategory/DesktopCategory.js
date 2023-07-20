import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const DesktopCategory = ({ blogsCategories }) => {
   const [isOpen, setIsOpen] = useState(true);
   const { pathname, query } = useRouter();

   return (
      // accordian
      <div className="bg-white rounded-2xl overflow-hidden cursor-pointer shadow-md">
         {/* accordian header */}
         <div
            className="flex items-center justify-between p-4 bg-blue-100 text-blue-600"
            onClick={() => setIsOpen((prevState) => !prevState)}>
            <span className="text-xl">دسته بندی مقالات</span>
            <ChevronDownIcon
               className={`w-6 h-6 transition-all duration-200 text-blue-500 ${
                  isOpen ? "rotate-180" : "rotate-0"
               }`}
            />
         </div>
         {/* accordian content */}
         {isOpen && (
            <ul className="flex flex-col items-center justify-start text-slate-800">
               <li className="w-full">
                  <Link
                     className={`block p-4 w-full transition-all duration-100
                     ${
                        pathname === "/blogs"
                           ? "border-r-4 border-blue-600 text-blue-600"
                           : "hover:bg-blue-100"
                     }`}
                     href="/blogs">
                     همه مقالات
                  </Link>
               </li>
               {blogsCategories.map((category) => {
                  return (
                     <li
                        key={category._id}
                        className="w-full">
                        <Link
                           className={`block p-4 w-full transition-all duration-100
                           ${
                              query.categorySlug === category.englishTitle
                                 ? "border-r-4 border-blue-600 text-blue-600"
                                 : "hover:bg-blue-100"
                           }`}
                           href={`/blogs/${category.englishTitle}`}>
                           {category.title}
                        </Link>
                     </li>
                  );
               })}
            </ul>
         )}
      </div>
   );
};

export default DesktopCategory;
