import { HeartIcon } from "@heroicons/react/24/solid";

const Footer = () => {
   return (
      <div className="relative bottom-0 left-0 right-0 w-full text-blue-100 font-semibold bg-blue-600">
         <div
            className="flex items-center justify-center gap-x-1 flex-row-reverse text-lg 
         py-3">
            <span>Made with</span>
            <HeartIcon className="w-5 h-5 mb-1 fill-red-600 animate-bounce" />
            <span>by Mehrab</span>
         </div>
      </div>
   );
};

export default Footer;
