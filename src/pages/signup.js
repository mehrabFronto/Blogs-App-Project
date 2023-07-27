import Input from "@/components/FormInput/Input";
import Layout from "@/containers/Layout";
import axios from "axios";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import * as Yup from "yup";

const initialValues = {
   name: "",
   email: "",
   password: "",
   confirmPassword: "",
   phoneNumber: "",
};

const validationSchema = Yup.object({
   name: Yup.string().min(6).required("نام اجباری است"),
   email: Yup.string().email("ایمیل نا معتبر است").required("ایمیل اجباری است"),
   password: Yup.string()
      .min(8, "رمز عبور باید حداقل شامل 8 کاراکتر باشد")
      .required("رمز عبور اجباری است"),
   confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], " رمز عبور یکسان نیست")
      .required("تکرار رمز عبور اجباری است"),
   phoneNumber: Yup.string()
      .matches(/^[0-9]{11}$/, "شماره تلفن نا معتبر است")
      .required("شماره تلفن اجباری است"),
});

const SignupPage = () => {
   const router = useRouter();

   const onSubmit = async (values) => {
      await axios.post("http://localhost:5000/api/user/signup", values);
      router.push("/");
   };

   const formik = useFormik({
      initialValues,
      onSubmit,
      validationSchema,
      validateOnMount: true,
   });

   return (
      <Layout>
         <div className="container mx-auto max-w-[500px] px-2 mt-6">
            <form
               className="w-full flex flex-col items-start gap-y-8"
               onSubmit={formik.handleSubmit}>
               {/* Page title */}
               <h1 className="text-blue-600 text-3xl font-black">ثبت نام</h1>
               {/* inputs */}
               <div className="flex flex-col gap-y-6 w-full pr-2">
                  {/* name section */}
                  <Input
                     label="نام"
                     name="name"
                     formik={formik}
                     placeholder="نام..."
                  />
                  {/* email section */}
                  <Input
                     label="ایمیل"
                     name="email"
                     formik={formik}
                     placeholder="ایمیل..."
                  />
                  {/* phone number section */}
                  <Input
                     label="شماره تلفن"
                     name="phoneNumber"
                     formik={formik}
                     placeholder="شماره تلفن..."
                  />
                  {/* password section */}
                  <Input
                     label="رمز عبور"
                     name="password"
                     formik={formik}
                     placeholder="رمز عبور..."
                     type="password"
                  />
                  {/* confirm section */}
                  <Input
                     label="تایید رمز عبور"
                     name="confirmPassword"
                     formik={formik}
                     placeholder="تایید رمز عبور..."
                     type="password"
                  />

                  {/* submit btn */}
                  <button
                     className="w-full bg-blue-600 text-white py-3 rounded-lg mt-2 disabled:opacity-50"
                     type="submit"
                     disabled={!formik.isValid}>
                     ثبت نام
                  </button>
               </div>
               <Link
                  href="/signin"
                  className="pr-2 text-blue-600 font-medium text-base">
                  از قبل ثبت نام کرده اید؟
               </Link>
            </form>
         </div>
      </Layout>
   );
};

export default SignupPage;
