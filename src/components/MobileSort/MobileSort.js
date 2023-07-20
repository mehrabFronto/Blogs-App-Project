import {
   BarsArrowDownIcon,
   FunnelIcon,
   XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

const MobileSort = () => {
   const [isSortOpen, setIsSortOpen] = useState(false);
   const [isFilterOpen, setIsFilterOpen] = useState(false);

   return (
      <div className="md:hidden">
         {/* buttons */}
         <div className="flex items-center gap-x-4">
            <button
               className="flex items-center justify-center gap-x-2 flex-1 text-sm py-2 border 
               border-slate-800 text-slate-800 rounded-3xl"
               onClick={() => setIsFilterOpen(true)}>
               <span>
                  <FunnelIcon className="w-5 h-5" />
               </span>
               <span>فیلتر</span>
            </button>
            <button
               className="flex items-center justify-center gap-x-2 flex-1 text-sm py-2 border 
               border-slate-800 text-slate-800 rounded-3xl"
               onClick={() => setIsSortOpen(true)}>
               <span>
                  <BarsArrowDownIcon className="w-5 h-5" />
               </span>
               <span>مرتب سازی</span>
            </button>
         </div>
         {/* sort list */}
         {isSortOpen && (
            <>
               {/* backdrop */}
               <div
                  className="fixed w-full h-full top-0 bottom-0 right-0 left-0 bg-gray-600 
                  opacity-50 z-20"
                  onClick={() => {
                     setIsSortOpen(false);
                  }}></div>
               {/* list */}
               <div className="fixed w-full bottom-0 right-0 left-0 bg-white z-30 rounded-t-xl shadow-lg">
                  {/* header */}
                  <div className="flex items-center justify-between px-2 pt-3 mb-6">
                     <span className="pr-5"></span>
                     <h3 className="font-semibold text-slate-800 text-lg">
                        مرتب سازی
                     </h3>
                     <button
                        onClick={() => {
                           setIsSortOpen(false);
                        }}>
                        <XMarkIcon className="w-6 h-6 text-gray-500" />
                     </button>
                  </div>
                  {/* list */}
                  <ul className="flex flex-col items-center text-slate-800">
                     <li className={`w-full text-center py-4 transition-all`}>
                        جدید ترین
                     </li>
                     <li className={`w-full text-center py-4 transition-all`}>
                        پر بازدید ترین
                     </li>
                     <li
                        className={`w-full text-center py-4 transition-all mb-6`}>
                        محبوب ترین
                     </li>
                  </ul>
               </div>
            </>
         )}
         {/* filter list */}
         {isFilterOpen && (
            <>
               {/* backdrop */}
               <div
                  className="fixed w-full h-full top-0 bottom-0 right-0 left-0 bg-gray-600 
                  opacity-50 z-20"
                  onClick={() => setIsFilterOpen(false)}></div>
               {/* list */}
               <div className="fixed w-full bottom-0 right-0 left-0 bg-white z-30 rounded-t-xl shadow-lg">
                  <div className="flex items-center justify-between px-2 pt-3 mb-6">
                     <span className="pr-5"></span>
                     <h3 className="font-semibold text-slate-800 text-lg">
                        فیلتر ها
                     </h3>
                     <button
                        onClick={() => {
                           setIsFilterOpen(false);
                        }}>
                        <XMarkIcon className="w-6 h-6 text-gray-500" />
                     </button>
                  </div>
                  <ul className="flex flex-col items-center text-slate-800">
                     <li className="w-full text-center py-4">جدید ترین</li>
                     <li className="w-full text-center py-4">پر بازدید ترین</li>
                     <li className="w-full text-center py-4 mb-6">
                        محبوب ترین
                     </li>
                  </ul>
               </div>
            </>
         )}
      </div>
   );
};

export default MobileSort;
