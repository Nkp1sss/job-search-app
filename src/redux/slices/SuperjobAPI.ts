import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '../../constants';

const superjobSlice = createApi({
  reducerPath: 'superjobSlice',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    getCatalogues: builder.query({
      query: () => `catalogues/`,
    }),
  }),
});

export const { useGetCataloguesQuery } = superjobSlice;
export default superjobSlice;
