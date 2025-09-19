import React, { FC } from "react";
import { Button } from "../ui/button";

interface SubscriptionPlanCardProps {
  name: string;
  price: number;
  currency: "USD" | string;
  description: string;
  duration: "month" | "year" | "day" | "week";
  limitedJobPosts: number;
  isActive: boolean;
}

const SubscriptionPlanCard: FC<SubscriptionPlanCardProps> = ({
  name,
  price,
  currency,
  description,
  duration,
  limitedJobPosts,
  isActive,
}) => {
  return (
    <div
      className={`py-7 px-7 hover:scale-105 relative flex flex-col min-h-[250px] rounded-lg shadow-lg transition-all duration-300 ${
        isActive ? "" : "border-red-500"
      } border`}
    >
      <div className="text-center mb-4">
        <h2 className="text-2xl font-semibold">{name}</h2>
        <p className="text-xl font-medium text-gray-700">
          {currency} <span className="text-3xl">{price.toFixed(2)}</span> /{" "}
          {duration}
        </p>
      </div>

      <div className="text-gray-600 mb-6 flex-grow">
        <div
          className="mb-4"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <p className="text-base font-bold text-black">
          Limited Job Posts: {limitedJobPosts}
        </p>
        {/* <p className="text-sm">Created At: {formattedDate}</p> */}
      </div>

      {/* Button at the bottom */}
      <div className="mt-auto">
        <div className="flex justify-center">
          <Button className="bg-primary/80 hover:bg-primary rounded-full text-lg px-7">
            {isActive ? "Subscribe Now" : "Inactive"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlanCard;
