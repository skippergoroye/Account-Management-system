import { toastError, toastSuccess } from "../../components/Toast";
import parseError from "../../lib/ParseError";
import { setUser, setUsers } from "../users/userSlice";
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
    getSingleUser: builder.query({
      query: (id) => `/api/user/find/${id}`,
      providesTags: ["Auth"],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(setUser(result?.data?.data));
          return result;
        } catch (err) {
          const { errorMessage } = parseError(err);
          toastError(errorMessage);
        }
      },
    }),
    blockUser: builder.mutation({
      query: (id) => ({
        url: `/api/user/${id}/block`,
        method: "PUT",
        body: {},
        async onQueryStarted(arg, { queryFulfilled, dispatch }) {
          try {
            const result = await queryFulfilled;
            toastSuccess(result?.message);
            return result;
          } catch (err) {
            const { errorMessage } = parseError(err);
            toastError(errorMessage);
          }
        },
      }),
    }),
    unBlockUser: builder.mutation({
      query: (id) => ({
        url: `/api/user/${id}/unblock`,
        method: "PUT",
        body: {},
        async onQueryStarted(arg, { queryFulfilled, dispatch }) {
          try {
            const result = await queryFulfilled;
            toastSuccess(result?.message);
            return result;
          } catch (err) {
            const { errorMessage } = parseError(err);
            toastError(errorMessage);
          }
        },
      }),
    }),
    searchUser: builder.query({
      query: (query) => `/api/user/search?query=${query}`,
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
  useLoginAdminMutation,
  useGetAllUsersQuery,
  useLazyGetAllUsersQuery,
  useBlockUserMutation,
  useGetSingleUserQuery,
  useLazyGetSingleUserQuery,
  useLazySearchUserQuery,
  useSearchUserQuery,
  useUnBlockUserMutation,
} = adminApiSlice;
