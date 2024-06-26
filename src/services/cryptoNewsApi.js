import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Crypto API News Header
const cryptoNewsHeaders = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Key": process.env.c11fc2a321msha246bef7c743b39p1f0c65jsnfd8fa3cd84e8,
  "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
};

// Base URL
const baseUrl = "https://bing-news-search1.p.rapidapi.com";

// Make API Request
const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

// Crypto News API Redux Logic
export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    // get crypto News
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

// Export Crypto News API
export const { useGetCryptoNewsQuery } = cryptoNewsApi;
