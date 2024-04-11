import { apiSlice } from "./apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
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
  }),
});

export const { useLoginMutation, useSignupMutation } = usersApiSlice;
