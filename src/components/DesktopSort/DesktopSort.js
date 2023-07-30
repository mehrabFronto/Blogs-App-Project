import { routerPush } from "@/utils/routerPush";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const DesktopSort = () => {
   const router = useRouter();
   const [sort, setSort] = useState(router.query.sort || "newest");

   const sortHandler = (id) => {
      setSort(id);
      router.query.sort = id;
      routerPush(router);
   };

   // this useEffect handle the sort query change in mobile. it changes in mobile , so it changes in desktop too.
   useEffect(() => {
      setSort(router.query.sort);
   }, [router.query.sort]);

   const sortOptions = [
      { label: "جدید ترین", id: "newest" },
      { label: "پر بازدید ترین", id: "most" },
      { label: "محبوب ترین", id: "popular" },
   ];

   return (
      <div className="bg-white rounded-2xl overflow-hidden flex items-center px-4 shadow-md">
         <div className="flex items-center gap-x-2 text-gray-500">
            <span>
               <AdjustmentsHorizontalIcon className="w-6 h-6" />
            </span>
            <span>مرتب سازی: </span>
         </div>
         {/* sort options */}
         <ul className=" flex items-center gap-x-2 lg:gap-x-4 font-medium mr-2">
            {sortOptions.map((sortOption) => {
               return (
                  <li
                     onClick={() => sortHandler(sortOption.id)}
                     key={sortOption.id}
                     className={`flex items-center justify-center px-4 lg:px-6 py-[18px]
                     transition-all duration-100 relative ${
                        sortOption.id === sort
                           ? "text-blue-600"
                           : "hover:bg-blue-100 rounded-lg cursor-pointer text-slate-800"
                     }`}>
                     {sortOption.label}
                     <span
                        className={`bg-blue-600 absolute bottom-0 right-5 rounded-lg transition-all
                     ${sortOption.id === sort ? "w-10 h-1" : "w-0"}`}></span>
                  </li>
               );
            })}
         </ul>
      </div>
   );
};

export default DesktopSort;
