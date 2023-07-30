import http from "@/services/httpService";
import { useRouter } from "next/router";
import { createContext, useContext, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useReducerAsync } from "use-reducer-async";

const AuthContext = createContext();
const AuthContextDispatcher = createContext();

const reducer = (state, action) => {
   switch (action.type) {
      case "SIGNIN_PENDING":
         return { user: null, loading: true, error: null };
      case "SIGNIN_SUCCESS":
         return {
            loading: false,
            user: action.payload,
            error: null,
         };
      case "SIGNIN_FAILURE":
         return {
            loading: false,
            error: action.error,
            user: null,
         };
      default:
         return { ...state };
   }
};

const initialState = { user: null, loading: true, error: null };

const AuthProvider = ({ children }) => {
   const router = useRouter();

   const asyncActionHandlers = {
      SIGNIN:
         ({ dispatch }) =>
         async (action) => {
            dispatch({ type: "SIGNIN_PENDING" });
            try {
               const { data } = await http.post(
                  "/user/signin",
                  action.payload,
                  {
                     withCredentials: true,
                  },
               );
               toast.success("وارد شدید");
               dispatch({ type: "SIGNIN_SUCCESS", payload: data });
               router.push("/");
            } catch (err) {
               toast.error(err?.response?.data?.message || "خطا");
               dispatch({
                  type: "SIGNIN_FAILURE",
                  error: err?.response?.data?.message || "خطا",
               });
            }
         },
      SIGNUP:
         ({ dispatch }) =>
         async (action) => {
            dispatch({ type: "SIGNIN_PENDING" });
            try {
               const { data } = await http.post(
                  "/user/signup",
                  action.payload,
                  {
                     withCredentials: true,
                  },
               );
               toast.success("ثبت نام شدید");
               dispatch({ type: "SIGNIN_SUCCESS", payload: data });
               router.push("/");
            } catch (err) {
               toast.error(err?.response?.data?.message || "خطا");
               dispatch({
                  type: "SIGNIN_FAILURE",
                  error: err?.response?.data?.message || "خطا",
               });
            }
         },
      LOAD_USER:
         ({ dispatch }) =>
         async (action) => {
            dispatch({ type: "SIGNIN_PENDING" });
            try {
               const { data } = await http.get("/user/load", {
                  withCredentials: true,
               });
               dispatch({ type: "SIGNIN_SUCCESS", payload: data });
            } catch (err) {
               dispatch({
                  type: "SIGNIN_FAILURE",
                  error: err?.response?.data?.message || "خطا",
               });
            }
         },
      SIGNOUT:
         ({ dispatch }) =>
         async (action) => {
            try {
               await http.get("/user/logout", {
                  withCredentials: true,
               });
               window.location.pathname = "/";
               toast.success("خارج شدید");
            } catch (err) {}
         },
   };

   const [user, dispatch] = useReducerAsync(
      reducer,
      initialState,
      asyncActionHandlers,
   );

   useEffect(() => {
      dispatch({ type: "LOAD_USER" });
   }, []);

   return (
      <AuthContext.Provider value={user}>
         <AuthContextDispatcher.Provider value={dispatch}>
            {children}
         </AuthContextDispatcher.Provider>
      </AuthContext.Provider>
   );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
export const useAuthActions = () => useContext(AuthContextDispatcher);
