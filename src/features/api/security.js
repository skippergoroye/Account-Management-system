import { toastError } from "../../components/Toast";
import parseError from "../../lib/ParseError";
import { apiSlice } from "./apiSlice";

export const securityApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    changePassword: builder.mutation({
      query: (userId, values) => ({
        url: `/api/user/${userId}/password`,
        method: "PUT",
        body: values,
      }),
    }),
  }),
});

export const { useChangePasswordMutation } = securityApiSlice;
