import React from "react";

const SubscriptionCardSkelton = () => {
  return (
    <div className="bg-white py-7 px-7 relative flex flex-col min-h-[250px] rounded-lg border border-gray-300 animate-pulse">
      <div className="text-center mb-4">
        <div className="h-8 w-3/4 bg-gray-200 rounded"></div>
        <div className="h-6 w-1/2 bg-gray-200 rounded mt-2"></div>
      </div>

      <div className="text-gray-600 mb-6 flex-grow">
        <div className="h-20 bg-gray-200 rounded mb-4"></div>
        <div className="h-6 w-1/3 bg-gray-200 rounded mb-2"></div>
      </div>

      <div className="mt-auto">
        <div className="flex justify-center">
          <button className="bg-gray-200 rounded-full text-lg px-7 h-10 w-32"></button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCardSkelton;
