import baseApi from "../baseApi";

const subscriptionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    allSubscription: build.query({
      query: () => ({
        url: "/subscription-plan",
        method: "GET",
      }),
    }),
  }),
  overrideExisting: false, // Optional: if you want to keep existing endpoints
});

export const { useAllSubscriptionQuery } = subscriptionApi;
