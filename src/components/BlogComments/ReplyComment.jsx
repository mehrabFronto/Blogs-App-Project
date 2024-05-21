import SingleComment from "./SingleComment";

const ReplyComment = ({ comments, parentCommentId, postId }) => {
   return comments.map((comment) => {
      return (
         parentCommentId === comment.responseTo && (
            <div
               className="mr-6 flex flex-col gap-y-4"
               key={comment._id}>
               <SingleComment
                  comment={comment}
                  postId={postId}
               />
               <ReplyComment
                  comments={comments}
                  parentCommentId={comment._id}
                  postId={postId}
               />
            </div>
         )
      );
   });
};

export default ReplyComment;
