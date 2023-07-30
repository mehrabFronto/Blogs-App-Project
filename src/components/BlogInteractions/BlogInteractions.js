import http from "@/services/httpService";
import { routerPush } from "@/utils/routerPush";
import { toPersianDigits } from "@/utils/toPersianDigits";
import {
   BookmarkIcon,
   ChatBubbleBottomCenterTextIcon,
   HeartIcon,
} from "@heroicons/react/24/outline";

import {
   BookmarkIcon as SolidBookmarkIcon,
   HeartIcon as SolidHeartIcon,
} from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";

const BlogInteractions = ({ blog, isSmall }) => {
   const router = useRouter();

   const likeHandler = async () => {
      try {
         const { data } = await http.put(`/posts/like/${blog._id}`);
         routerPush(router);
         toast.success(data.message);
      } catch (err) {
         toast.error(err?.response?.data?.message);
      }
   };

   const bookmarkHandler = async () => {
      try {
         const { data } = await http.put(`/posts/bookmark/${blog._id}`);
         routerPush(router);
         toast.success(data.message);
      } catch (err) {
         toast.error(err?.response?.data?.message);
      }
   };

   return (
      <div className={`flex items-center ${isSmall ? "gap-x-2" : "gap-x-4"} `}>
         {/* like */}
         <button
            onClick={likeHandler}
            className={`${
               isSmall ? "p-0.5 gap-x-1 text-xs" : "p-1 gap-x-2 text-sm"
            } bg-red-200 text-red-600 rounded-md flex items-center  
            hover:bg-red-600 hover:text-red-200 transition-all duration-200`}>
            {blog.isLiked ? (
               <SolidHeartIcon
                  className={`${isSmall ? "w-4 h-4" : "w-6 h-6"}`}
               />
            ) : (
               <HeartIcon className={`${isSmall ? "w-4 h-4" : "w-6 h-6"}`} />
            )}
            <span>{toPersianDigits(blog.likesCount)}</span>
         </button>
         {/* comment */}
         <button
            className={`${
               isSmall ? "p-0.5 gap-x-1 text-xs" : "p-1 gap-x-2 text-sm"
            } bg-gray-300 text-gray-600 rounded-md flex items-center 
            hover:bg-gray-600 hover:text-gray-200 transition-all duration-200`}>
            <ChatBubbleBottomCenterTextIcon
               className={`${isSmall ? "w-4 h-4" : "w-6 h-6"}`}
            />
            <span>{toPersianDigits(blog.commentsCount)}</span>
         </button>
         {/* bookmark */}
         <button
            onClick={bookmarkHandler}
            className={`${
               isSmall ? "p-0.5" : "p-1"
            } bg-blue-200 text-blue-600 rounded-md
            hover:bg-blue-600 hover:text-blue-200 transition-all duration-200`}>
            {blog.isBookmarked ? (
               <SolidBookmarkIcon
                  className={`${isSmall ? "w-4 h-4" : "w-6 h-6"}`}
               />
            ) : (
               <BookmarkIcon className={`${isSmall ? "w-4 h-4" : "w-6 h-6"}`} />
            )}
         </button>
      </div>
   );
};

export default BlogInteractions;
