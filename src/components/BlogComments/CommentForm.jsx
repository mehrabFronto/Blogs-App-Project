import http from "@/services/httpService";
import { routerPush } from "@/utils/routerPush";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";

const CommentForm = ({ postId, responseTo, setOnReply = () => {} }) => {
   const [commentValue, setCommentValue] = useState("");

   const { user, loading } = useSelector((state) => state.userSignin);


   const router = useRouter();

   const submitHandler = async (e) => {
      e.preventDefault();

      if(!user && !loading)
         return toast.error("لطفا ابتدا لاگین کنید");

      const newComment = {
         content: commentValue,
         postId,
         responseTo,
      };

      try {
         const { data } = await http.post(
            `/post-comment/save-comment`,
            newComment,
         );
         toast.success(data.message);
         routerPush(router);
         setCommentValue("");
         setOnReply((open) => !open);
      } catch (err) {
         toast.error(err?.response?.data?.message || err.message);
      }
   };

   return (
      <form
         className="flex flex-col items-start w-full"
         onSubmit={(e) => submitHandler(e)}>
         <textarea
            value={commentValue}
            onChange={({ target }) => setCommentValue(target.value)}
            placeholder="نظرت رو برام بنویس..."
            className="border border-gray-500 rounded-lg w-full h-24 p-4 mb-8 resize-none
            focus:border-blue-600 focus:border-2 outline-none transition-all text-slate-800 bg-gray-100"></textarea>
         <button
            type="submit"
            className="bg-blue-600 text-blue-100 px-12 py-4 rounded-lg">
            ارسال نظر
         </button>
      </form>
   );
};

export default CommentForm;
