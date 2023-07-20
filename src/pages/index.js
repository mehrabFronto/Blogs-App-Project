import Link from "next/link";

const Home = () => {
   return (
      <main className="h-screen flex flex-col gap-y-8 items-center justify-center bg-gray-200">
         <h1 className="font-bold text-[50px] text-slate-900">Home Page</h1>
         <Link
            href="/blogs"
            className="px-4 py-2 bg-blue-600 text-blue-100 rounded-md
            hover:tracking-wider transition-all">
            go to blogs page
         </Link>
      </main>
   );
};

export default Home;
