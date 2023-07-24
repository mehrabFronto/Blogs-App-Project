import { Fragment, useState } from "react";
import CommentForm from "./CommentForm";
import ReplyComment from "./ReplyComment";
import SingleComment from "./SingleComment";

const BlogComments = ({ blog }) => {
   const [comment, setComment] = useState("");

   return (
      <section className="max-w-screen-lg mx-auto border-t-2 border-gray-500 pt-8">
         <h2 className="text-3xl font-black mb-8">نظرات</h2>
         <div>
            {/* comments */}
            <div className="mb-8 flex flex-col gap-y-4">
               {blog.comments.map((comment) => {
                  return (
                     !comment.responseTo &&
                     comment.status === 2 && (
                        <Fragment>
                           <SingleComment comment={comment} />
                           <ReplyComment
                              comments={blog.comments}
                              parentCommentId={comment._id}
                           />
                        </Fragment>
                     )
                  );
               })}
            </div>
            {/* base form comment */}
            <div className="w-full">
               <h3 className="text-xl font-bold mb-4">ارسال نظر جدید</h3>
               <CommentForm
                  comment={comment}
                  setComment={setComment}
               />
            </div>
         </div>
      </section>
   );
};

export default BlogComments;
