import SEO from "@/common/SEO";
import Input from "@/components/FormInput/Input";
import Layout from "@/containers/Layout";
import { signinUser } from "@/redux/user/userActions";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

const initialValues = {
   email: "",
   password: "",
};

const validationSchema = Yup.object({
   email: Yup.string().email("ایمیل نا معتبر است").required("ایمیل اجباری است"),
   password: Yup.string()
      .min(8, "رمز عبور باید حداقل شامل 8 کاراکتر باشد")
      .required("رمز عبور اجباری است"),
});

const SigninPage = () => {
   const router = useRouter();
   const { user } = useSelector((state) => state.userSignin);
   const dispatch = useDispatch();

   const onSubmit = (values) => {
      dispatch(signinUser(values));
   };

   const formik = useFormik({
      initialValues,
      onSubmit,
      validationSchema,
      validateOnMount: true,
   });

   useEffect(() => {
      if (user) router.push("/");
   }, [user]);

   return (
      <>
         <SEO
            title="ورود به حساب کاربری"
            desc="صفحه ی ورود"
         />
         <Layout>
            <div className="container mx-auto max-w-[500px] px-2 mt-6">
               <form
                  className="w-full flex flex-col items-start gap-y-8"
                  onSubmit={formik.handleSubmit}>
                  {/* Page title */}
                  <h1 className="text-blue-600 text-3xl font-black">ورود</h1>
                  {/* inputs */}
                  <div className="flex flex-col gap-y-6 w-full pr-2">
                     {/* email section */}
                     <Input
                        label="ایمیل"
                        name="email"
                        formik={formik}
                        placeholder="ایمیل..."
                     />

                     {/* password section */}
                     <Input
                        label="رمز عبور"
                        name="password"
                        formik={formik}
                        placeholder="رمز عبور..."
                        type="password"
                     />

                     {/* submit btn */}
                     <button
                        className="w-full bg-blue-600 text-white py-3 rounded-lg mt-2 disabled:opacity-50 outline-none"
                        type="submit"
                        disabled={!formik.isValid}>
                        ورود
                     </button>
                  </div>
                  <Link
                     href="/signup"
                     className="pr-2 text-blue-600 font-medium text-base">
                     ثبت نام نکرده اید؟
                  </Link>
               </form>
            </div>
         </Layout>
      </>
   );
};

export default SigninPage;
