const Input = ({ label, name, type = "text", placeholder, formik }) => {
   return (
      <div className="flex flex-col gap-y-2">
         <div className="w-full flex items-center justify-between">
            <label
               className="text-xl text-slate-800 font-semibold"
               htmlFor={name}>
               {label}
            </label>
            {formik.errors[name] && formik.touched[name] && (
               <p className="text-sm text-red-600 font-medium">
                  {formik.errors[name]}
               </p>
            )}
         </div>
         <input
            id={name}
            name={name}
            type={type}
            className="w-full outline-none border-b-2 border-gray-500 bg-transparent py-4
            focus:border-blue-600 transition-all focus:placeholder:text-gray-100 text-blue-600
             placeholder:transition-all"
            placeholder={placeholder}
            {...formik.getFieldProps(name)}
         />
      </div>
   );
};

export default Input;
