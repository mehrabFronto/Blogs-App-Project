import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

const DesktopSort = () => {
   return (
      <div className="bg-white rounded-2xl overflow-hidden flex items-center px-4 shadow-md">
         <div className="flex items-center gap-x-2 text-gray-500">
            <span>
               <AdjustmentsHorizontalIcon className="w-6 h-6" />
            </span>
            <span>مرتب سازی: </span>
         </div>
         {/* sort options */}
         <ul className=" flex items-center gap-x-2 lg:gap-x-4 text-slate-800 font-medium mr-2">
            <li
               className={`flex items-center justify-center px-4 lg:px-6 py-[18px]
               transition-all duration-100 cursor-pointer border-b-2 border-blue-600`}>
               جدید ترین
            </li>
            <li
               className={`flex items-center justify-center px-4 lg:px-6 py-[18px]
               transition-all duration-100 cursor-pointer`}>
               پر بازدید ترین
            </li>
            <li
               className={`flex items-center justify-center px-4 lg:px-6 py-[18px]
               transition-all duration-100 cursor-pointer`}>
               محبوب ترین
            </li>
         </ul>
      </div>
   );
};

export default DesktopSort;
