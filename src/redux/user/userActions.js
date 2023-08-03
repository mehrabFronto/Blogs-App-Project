import http from "@/services/httpService";
import { toast } from "react-hot-toast";
import {
   SIGNIN_USER_FAILURE,
   SIGNIN_USER_REQUEST,
   SIGNIN_USER_SUCCESS,
   SIGNOUT_USER,
   SIGNUP_USER_FAILURE,
   SIGNUP_USER_REQUEST,
   SIGNUP_USER_SUCCESS,
} from "./userTypes";

export function signinUserRequest() {
   return {
      type: SIGNIN_USER_REQUEST,
   };
}

export function signinUserSuccess(users) {
   return {
      type: SIGNIN_USER_SUCCESS,
      payload: users,
   };
}

export function signinUserFailure(error) {
   return {
      type: SIGNIN_USER_FAILURE,
      payload: error,
   };
}

export function signupUserRequest() {
   return {
      type: SIGNUP_USER_REQUEST,
   };
}

export function signupUserSuccess(users) {
   return {
      type: SIGNUP_USER_SUCCESS,
      payload: users,
   };
}

export function signupUserFailure(error) {
   return {
      type: SIGNUP_USER_FAILURE,
      payload: error,
   };
}

export const signinUser = (data) => {
   return function (dispatch) {
      dispatch(signinUserRequest());
      http
         .post("/user/signin", data)
         .then((res) => {
            toast.success("با موفقیت وارد شدید");
            dispatch(signinUserSuccess(res.data));
            dispatch(signupUserSuccess(res.data));
         })
         .catch((err) => {
            toast.error(err?.response?.data?.message || err.message);
            dispatch(
               signinUserFailure(err?.response?.data?.message || err.message),
            );
         });
   };
};

export const signupUser = (data) => {
   return function (dispatch) {
      dispatch(signupUserRequest());
      http
         .post("/user/signup", data)
         .then((res) => {
            toast.success("با موفقیت ثبت نام شدید");
            dispatch(signupUserSuccess(res.data));
            dispatch(signinUserSuccess(res.data));
         })
         .catch((err) => {
            toast.error(err?.response?.data?.message || err.message);
            dispatch(
               signupUserFailure(err?.response?.data?.message || err.message),
            );
         });
   };
};

export const signoutUser = () => (dispatch) => {
   dispatch({ type: SIGNOUT_USER });

   http
      .get("/user/logout")
      .then((res) => {
         window.location.href = "/";
         toast.success("خارج شدید");
      })
      .catch((err) => toast.error(err?.response?.data?.message || err.message));
};

export const loadUserData = (store) => {
   http
      .get("/user/load")
      .then((res) => {
         store.dispatch(signinUserSuccess(res.data));
      })
      .catch((err) => {});
};
