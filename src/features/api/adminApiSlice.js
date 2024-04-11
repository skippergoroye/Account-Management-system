import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: async (headers, { getState, endpoint }) => {
      const token = getState()?.authAdmin?.token || null;
      if (token) {
        return headers.set("Authorization", `Bearer ${token}`);
        // window.pu
      }

      return headers;
    },
  }),

  tagTypes: ["admin"],
  endpoints: () => ({}),
});
