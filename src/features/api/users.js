import { toastError } from "../../components/Toast";
import parseError from "../../lib/ParseError";
import { setUsers } from "../users/userSlice";
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
    adminLogin: builder.mutation({
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
    getAllUsers: builder.query({
      query: () => "/api/user",
      providesTags: ["Auth"],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(setUsers(result?.data?.data));
          return result;
        } catch (err) {
          // console.log({ err }, "getProfile");
          const { errorMessage } = parseError(err);
          toastError(errorMessage);
        }
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useGetAllUsersQuery,
  useLazyGetAllUsersQuery,
  useAdminLoginMutation,
} = usersApiSlice;
