import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser } from 'models';
import { HYDRATE } from "next-redux-wrapper";

export const resultApi = createApi({
  reducerPath: 'result',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8080/api'}),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: [],
  endpoints: (build) => ({
    addResult: build.mutation<IUser, IUser>({
      query: (body) => ({
        url: '/result',
        method: 'POST',
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
        body
      }),
    }),
    getResult: build.query({
      query: (_id) => ({
        url: `/result`,
        params: {
          _id
        }
      })
    }),
    // TODO
    getResults: build.query<any, void>({
      query: () => '/results'
    }),
    getRecentResults: build.query({
      query: (limit) => ({
        url: `/recent`,
        params: {
          limit
        }
      })
    }),
    getTopResults: build.query({
      query: ({days, limit}) => ({
        url: `/top`,
        params: {
          days,
          limit
        }
      })
    }),
  })
});

export const { useAddResultMutation, useGetResultQuery, useGetResultsQuery, util: { getRunningOperationPromises }, } = resultApi;


// export endpoints for use in SSR
export const { getResults, getResult, getRecentResults, getTopResults } = resultApi.endpoints;
