import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import AuthProvider from "src/contexts/AuthContext/AuthProvider";

export default function App({ Component, pageProps }) {
   return (
      <AuthProvider>
         <Component {...pageProps} />
         <Toaster />
      </AuthProvider>
   );
}
