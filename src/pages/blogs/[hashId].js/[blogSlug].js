import BlogComments from "@/components/BlogComments/BlogComments";
import BlogInteractions from "@/components/BlogInteractions/BlogInteractions";
import BlogsList from "@/components/BlogsList/BlogsList";
import Layout from "@/containers/Layout";
import toLocalDate from "@/utils/toLocalDate";
import { toPersianDigits } from "@/utils/toPersianDigits";
import { BookmarkIcon, LinkIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { BiCopy } from "react-icons/bi";
import { FaTelegram } from "react-icons/fa";
import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io";

const Blog = ({ data: blog }) => {
   const [isCopied, setIsCopied] = useState(false);

   const copyHandler = () => {
      setIsCopied(true);
      setTimeout(() => {
         setIsCopied(false);
      }, 1000);
   };

   return (
      <Layout>
         <div className="container mx-auto mt-4 px-2">
            <header
               className="flex flex-col md:flex-row md:justify-between items-start gap-y-8 mb-14
               mx-auto max-w-screen-md">
               {/* blog detail */}
               <div className="flex items-center gap-x-4">
                  {/* image */}
                  <div>
                     <img
                        src="/images/md.jpg"
                        alt="avatar"
                        className="w-20 h-20 rounded-full"
                     />
                  </div>
                  {/* detail*/}
                  <div className="flex flex-col items-start gap-y-2">
                     {/* author and category */}
                     <div className="flex items-center gap-x-2">
                        <h2 className="font-bold">{blog.author.name}</h2>
                        <Link
                           href={`/blogs/${blog.category.englishTitle}`}
                           className="text-sm font-medium border border-blue-400 text-blue-400 px-3 py-1 
                        rounded-2xl hover:bg-blue-600 hover:text-blue-200 hover:border-blue-600
                        transtion-all duration-200 cursor-pointer">
                           {blog.category.title}
                        </Link>
                     </div>
                     {/* job title */}
                     <span className="text-sm">{blog.author.biography}</span>
                     {/* data & reading time */}
                     <div className="flex items-center gap-x-2 text-sm">
                        <span>{toLocalDate(blog.createdAt)}</span>
                        <span>&bull;</span>
                        <div className="flex items-center gap-x-1">
                           <span>خواندن</span>
                           <span>{toPersianDigits(blog.readingTime)}</span>
                           <span>دقیقه</span>
                        </div>
                     </div>
                  </div>
               </div>
               {/* blog save and link */}
               <div className="flex items-center gap-x-4 text-gray-500">
                  {/* link */}
                  <span>
                     <LinkIcon className="w-6 h-6 cursor-pointer" />
                  </span>
                  {/* save */}
                  <div
                     className="flex items-center gap-x-2 border border-current
                     rounded-3xl px-3 py-1 cursor-pointer hover:bg-gray-200 transition-all">
                     <span>ذخیره</span>
                     <span>
                        <BookmarkIcon className="w-5 h-5" />
                     </span>
                  </div>
               </div>
            </header>
            <main
               className="prose prose-lg md:prose-xl prose-slate prose-h1:text-3xl prose-h1:font-black
               prose-h2:text-2xl prose-h2:font-bold prose-img:rounded-xl mb-8 mx-auto max-w-screen-md">
               <h1>{blog.title}</h1>
               <h2>عنوان تستی اول</h2>
               <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                  افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                  صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                  راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
                  حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای
                  موجود طراحی اساسا مورد استفاده قرار گیرد.
               </p>
               <img
                  src={blog.coverImage}
                  alt="blog"
                  className="w-full"
               />
               <h2>عنوان تستی دوم</h2>
               <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                  افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                  صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                  راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
                  حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای
                  موجود طراحی اساسا مورد استفاده قرار گیرد.
               </p>
            </main>
            {/* post tags - like and bookmark */}
            <section className="flex flex-col items-start gap-y-6 pb-8 mx-auto max-w-screen-md">
               {/* tags */}
               <ul className="flex items-center gap-x-4 flex-wrap gap-y-4">
                  {["جاوااسکریپت", "ریکت", "فرانت اند", "وب"].map(
                     (tag, index) => {
                        return (
                           <li
                              key={index}
                              className="text-gray-600 bg-gray-300 rounded-3xl px-3 py-1 cursor-pointer
                              hover:bg-gray-400 transition-all">
                              {tag}
                           </li>
                        );
                     },
                  )}
               </ul>
               {/* interactions - share btns */}
               <div
                  className="w-full flex flex-col md:flex-row items-start md:items-center gap-y-6 
                  md:justify-between">
                  {/* interaction */}
                  <BlogInteractions
                     blog={blog}
                     isSmall={false}
                  />
                  {/* share btns - copy */}
                  <div className="flex ic gap-x-4">
                     {/* share buttons */}
                     <div className="flex items-center gap-x-4">
                        <a
                           href={`https://www.linkedin.com/sharing/share-offsite/?url=${process.env.NEXT_PUBLIC_DOMAIN_URL}/blogs/${blog.hashId}/${blog.slug}`}
                           className="cursor-pointer text-gray-500 hover:text-gray-600 transition-all">
                           <IoLogoLinkedin className="w-7 h-7" />
                        </a>
                        <a
                           href={`http://www.twitter.com/share?text=${blog.title}&url=${process.env.NEXT_PUBLIC_DOMAIN_URL}/blogs/${blog.hashId}/${blog.slug}`}
                           className="cursor-pointer text-gray-500 hover:text-gray-600 transition-all">
                           <IoLogoTwitter className="w-7 h-7" />
                        </a>
                        <a
                           href={`https://telegram.me/share/url?text=${blog.title}&url=${process.env.NEXT_PUBLIC_DOMAIN_URL}/blogs/${blog.hashId}/${blog.slug}`}
                           className="cursor-pointer text-gray-500 hover:text-gray-600 transition-all">
                           <FaTelegram className="w-7 h-7" />
                        </a>
                     </div>
                     {/* copy */}
                     <CopyToClipboard
                        text={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/blogs/${blog.hashId}/${blog.slug}`}
                        onCopy={() => copyHandler()}>
                        <div
                           className="flex items-center justify-evenly border border-gray-500 text-gray-500
                           rounded-lg px-2 py-1 gap-x-2 cursor-pointer hover:bg-gray-200 transition-all">
                           {isCopied ? (
                              <span className="text-blue-600">کپی شد</span>
                           ) : (
                              <>
                                 <span>کپی&nbsp;لینک</span>
                                 <BiCopy />
                              </>
                           )}
                        </div>
                     </CopyToClipboard>
                  </div>
               </div>
            </section>
            {/* related blogs */}
            <section className="mx-auto max-w-screen-lg border-t-2 border-gray-500 mb-12">
               <h2 className="text-3xl font-black my-8">پست های مرتبط</h2>
               <div className="grid grid-cols-6 overflow-auto gap-8 pb-2">
                  <BlogsList blogs={blog.related} />
               </div>
            </section>
            {/* blog comments */}
            <BlogComments blog={blog} />
         </div>
      </Layout>
   );
};

export default Blog;

export async function getServerSideProps(ctx) {
   const { query, req } = ctx;
   const {
      data: { data },
   } = await axios.get(`http://localhost:5000/api/posts/${query.blogSlug}`, {
      withCredentials: true,
      headers: {
         Cookie: req.headers.cookie,
      },
   });
   return {
      props: {
         data,
      },
   };
}
