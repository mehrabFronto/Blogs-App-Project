import { HeartIcon } from "@heroicons/react/24/solid";

const Footer = () => {
   return (
      <div className="relative bottom-0 left-0 right-0 w-full text-blue-600 font-semibold">
         <p
            className="flex items-center justify-center gap-x-1 flex-row-reverse text-lg bg-gray-200
         py-3">
            Made with <HeartIcon className="w-5 h-5 mb-1 fill-red-600" /> by
            Mehrab
         </p>
      </div>
   );
};

export default Footer;
