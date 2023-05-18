import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '../../constants';

const cataloguesSlice = createApi({
  reducerPath: 'cataloguesSlice',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    getCatalogues: builder.query({
      query: () => `catalogues/`,
    }),
  }),
});

export const { useGetCataloguesQuery } = cataloguesSlice;
export default cataloguesSlice;
