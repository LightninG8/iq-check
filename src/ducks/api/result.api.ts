import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser } from 'models';

export const resultApi = createApi({
  reducerPath: 'result',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8080/api'}),
  endpoints: (build) => ({
    addResult: build.mutation<IUser, IUser>({
      query: (body) => ({
        url: 'result/register',
        method: 'POST',
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
        body
      }),
    }),
    getResult: build.query({
      query: (_id: string) => ({
        url: `/result`,
        params: {
          _id
        }
      })
    })
  })
});

export const { useAddResultMutation, useGetResultQuery } = resultApi;


