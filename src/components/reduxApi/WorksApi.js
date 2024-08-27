import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const worksApi = createApi({
    reducerPath: 'worksApi',
    baseQuery: fetchBaseQuery({baseUrl:'https://localhost:7154/'}),
    endpoints:(build)=>({
        getWorks: build.query({
            query:(id)=>'api/User/WorksList/'+id
        }),
        getWorkStrings: build.query({
            query:()=>'api/User/Work/2'
        }),
    })
})
export const {useGetWorksQuery,useGetWorkStringsQuery} = worksApi;