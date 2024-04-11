import { apiSlice } from "./adminApiSlice";

export const adminApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    loginAdmin: builder.mutation({
      query: (values) => ({
        url: "/api/auth/login/admin",
        method: "POST",
        body: values,
      }),
    }),
  }),
});

export const { useLoginAdminMutation } = adminApiSlice;
