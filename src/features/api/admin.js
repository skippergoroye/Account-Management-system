import { toastError } from "../../components/Toast";
import parseError from "../../lib/ParseError";
import { apiSliceAdmin } from "./adminApiSlice";

export const adminApiSlice = apiSliceAdmin.injectEndpoints({
  endpoints: (builder) => ({
    loginAdmin: builder.mutation({
      query: (values) => ({
        url: "/api/auth/login/admin",
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
  }),
});

export const { useLoginAdminMutation } = adminApiSlice;
