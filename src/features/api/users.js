import { apiSlice } from "./apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (values) => ({
        url: "/api/auth/login/user",
        method: "POST",
        body: values,
      }),
    }),
    signup: builder.mutation({
      query: (values) => ({
        url: "/api/auth/register/user",
        method: "POST",
        body: values,
      }),
    }),

    forgotPassword: builder.mutation({
      query: (values) => ({
        url: "/api/auth/forgot-password",
        method: "POST",
        body: values,
      }),
    }),

    verifyOtp: builder.mutation({
      query: (values) => ({
        url: "/api/auth/verify-otp",
        method: "POST",
        body: values,
      }),
    }),
  }),
});

export const {
  useLoginUserMutation,
  useSignupMutation,
  useForgotPasswordMutation,
  useVerifyOtpMutation,
} = usersApiSlice;
