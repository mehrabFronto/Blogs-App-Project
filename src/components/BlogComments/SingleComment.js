import toLocalDate from "@/utils/toLocalDate";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import CommentForm from "./CommentForm";

const SingleComment = ({ comment }) => {
   const [onReply, setOnReply] = useState(false);
   const [commentValue, setCommentValue] = useState("");

   return (
      <div
         className="w-full border border-gray-400 rounded-lg p-4 flex flex-col 
         items-start gap-y-4 bg-gray-200">
         {/* comment detail */}
         <div className="flex items-center gap-x-2 text-gray-600 text-sm">
            <UserCircleIcon className="w-12 h-12 stroke-[1px]" />
            <div className="flex flex-col items-start justify-between">
               <span>{comment.writer?.name}</span>
               <span>{toLocalDate(comment.createdAt)}</span>
            </div>
         </div>
         {/* comment content */}
         <p className="pr-2 font-medium text-slate-800">{comment.content}</p>
         <button
            onClick={() => setOnReply((prevState) => !prevState)}
            className="pr-4 text-blue-600 font-medium">
            {onReply ? "بیخیال" : "پاسخ به"}
         </button>
         {onReply && (
            <div className="w-full mt-4">
               <h3 className="text-lg font-bold mb-4">
                  در حال پاسخ به {comment.writer?.name}
               </h3>
               <CommentForm
                  comment={commentValue}
                  setComment={setCommentValue}
               />
            </div>
         )}
      </div>
   );
};

export default SingleComment;
