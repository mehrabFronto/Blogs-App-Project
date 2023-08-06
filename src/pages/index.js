import SEO from "@/common/SEO";
import Layout from "@/containers/Layout/index";

const Home = () => {
   return (
      <>
         <SEO
            title="صفحه اصلی | بلاگ اپ"
            desc="صفحه اصلی"
         />
         <Layout>
            <h1 className="font-bold text-[50px] text-slate-900 w-full flex items-center justify-center h-screen">
               صفحه اصلی
            </h1>
         </Layout>
      </>
   );
};

export default Home;
