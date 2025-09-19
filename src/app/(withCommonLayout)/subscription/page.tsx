/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import SubscriptionCardSkelton from "@/components/skelaton/SubscriptionCardSkelton";
import SubscriptionCard from "@/components/subscriptionCard/SubscriptionCard";
import { useAllSubscriptionQuery } from "@/redux/api/subscriptionPlan/subscriptionPlanApi";

const Subscription = () => {
  const { data, isLoading } = useAllSubscriptionQuery(undefined);

  return (
    <div className="min-h-screen py-20 px-5">
      {/* Loading state → show skeleton */}
      {isLoading ? (
        <div className="max-w-7xl grid-cols-1  mx-auto grid md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <SubscriptionCardSkelton key={i} />
          ))}
        </div>
      ) : data?.data?.length > 0 ? (
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 grid-cols-1  gap-6">
          {data.data.map((item: any) => (
            <SubscriptionCard key={item.id} {...item} />
          ))}
        </div>
      ) : (
        <div className="container flex items-center justify-center h-[500px]">
          <h2 className="text-xl font-bold">No subscription plan found</h2>
        </div>
      )}
    </div>
  );
};

export default Subscription;
