import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
   return (
      <>
         <Header />
         <main className="bg-gray-100 pt-[75px] lg:pt-24">{children}</main>
         <Footer />
      </>
   );
};

export default Layout;
