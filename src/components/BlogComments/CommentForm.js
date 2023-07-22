const CommentForm = ({ comment, setComment }) => {
   return (
      <form
         className="flex flex-col items-start w-full"
         onSubmit={(e) => {
            e.preventDefault();
            setComment("");
         }}>
         <textarea
            value={comment}
            onChange={({ target }) => setComment(target.value)}
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
