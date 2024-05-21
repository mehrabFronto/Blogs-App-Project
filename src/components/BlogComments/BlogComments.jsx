import { Fragment } from "react";
import CommentForm from "./CommentForm";
import ReplyComment from "./ReplyComment";
import SingleComment from "./SingleComment";

const BlogComments = ({ blog }) => {
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
                        <Fragment key={comment._id}>
                           <SingleComment
                              comment={comment}
                              postId={blog._id}
                           />
                           <ReplyComment
                              postId={blog._id}
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
                  postId={blog._id}
                  responseTo={null}
               />
            </div>
         </div>
      </section>
   );
};

export default BlogComments;
