import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_BASE_URL, COUNT_VACANCY_OF_PAGE } from '../../constants';

type GetVacanciesQueryOptionsType = {
  page?: string;
  keyword?: string;
  catalogues?: string;
  payment_from?: string;
  payment_to?: string;
  [key: string]: number | string | undefined;
};

const superjobSlice = createApi({
  reducerPath: 'superjobSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    headers: {
      'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
      'X-Api-App-Id':
        'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
    },
  }),
  endpoints: (builder) => ({
    auth: builder.query({
      query: () =>
        `oauth2/password/?login=sergei.stralenia@gmail.com&password=paralect123&client_id=2356&client_secret=v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948&hr=0`,
    }),
    getCatalogues: builder.query({
      query: () => `catalogues/`,
    }),
    getVacancies: builder.query({
      query: (options: GetVacanciesQueryOptionsType) => {
        const queryParams: GetVacanciesQueryOptionsType = {
          count: COUNT_VACANCY_OF_PAGE,
        };

        // выбираем только свойства, которые true
        for (const prop in options) {
          if (options[prop]) {
            queryParams[prop] = options[prop];
          }
        }
        return {
          url: 'vacancies/',
          params: queryParams,
        };
      },
    }),
  }),
});

export const { useAuthQuery, useGetCataloguesQuery, useGetVacanciesQuery } = superjobSlice;
export default superjobSlice;
