import { apiSlice } from "./apiSlice";



export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (values) => ({
        url: "/api/auth/login/user",
        method: 'POST',
        body: values,
      }),
    }),
  }),
});

export const { useLoginUserMutation } = usersApiSlice
