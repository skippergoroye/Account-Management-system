import { toastError, toastSuccess } from "../../components/Toast";
import parseError from "../../lib/ParseError";
import { setUsers } from "../users/userSlice";
import { apiSlice } from "./apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (values) => ({
        url: "/api/auth/login/user",
        method: "POST",
        body: values,
        async onQueryStarted(arg, { queryFulfilled, dispatch }) {
          try {
            const result = await queryFulfilled;
            return result;
          } catch (err) {
            const { errorMessage } = parseError(err);
            toastError(errorMessage);
          }
        },
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
    resetPassword: builder.mutation({
      query: (values, id) => ({
        url: `/api/auth/reset-password/${id}`,
        method: "PUT",
        body: values,
      }),
    }),
    // adminLogin: builder.mutation({
    //   query: (values) => ({
    //     url: "/api/auth/login/admin",
    //     method: "POST",
    //     body: values,
    //     async onQueryStarted(arg, { queryFulfilled, dispatch }) {
    //       try {
    //         const result = await queryFulfilled;
    //         return result;
    //       } catch (err) {
    //         const { errorMessage } = parseError(err);
    //         toastError(errorMessage);
    //       }
    //     },
    //   }),
    // }),
    getAllUsers: builder.query({
      query: () => "/api/user",
      providesTags: ["Auth"],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          return result;
        } catch (err) {
          const { errorMessage } = parseError(err);
          toastError(errorMessage);
        }
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useLoginUserMutation,
  useSignupMutation,
  useForgotPasswordMutation,
  useVerifyOtpMutation,
  useAddFundMutation,
  useGetTransactionsUserIdQuery,
  useGetUserTransactionsQuery,
  useLazyGetTransactionsUserIdQuery,
  useLazyGetUserTransactionsQuery,
  useGetBalanceQuery,
  useResetPasswordMutation,
} = usersApiSlice;
