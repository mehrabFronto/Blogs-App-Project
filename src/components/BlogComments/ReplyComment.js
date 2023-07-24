import SingleComment from "./SingleComment";

const ReplyComment = ({ comments, parentCommentId }) => {
   return comments.map((comment) => {
      return (
         parentCommentId === comment.responseTo && (
            <div className="mr-6 flex flex-col gap-y-4">
               <SingleComment comment={comment} />
               <ReplyComment
                  comments={comments}
                  parentCommentId={comment._id}
               />
            </div>
         )
      );
   });
};

export default ReplyComment;
