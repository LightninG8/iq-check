import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser } from 'models';

export const resultApi = createApi({
  reducerPath: 'result',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8080/'}),
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
      query: (uuid: string) => ({
        url: `result/get_user?uuid=${uuid}`,
      })
    })
  })
});

export const { useAddResultMutation, useGetResultQuery } = resultApi;


