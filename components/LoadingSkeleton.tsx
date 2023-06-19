import React from "react";

const LoadingSkeleton = () => {
  return (
    <div className="flex items-center space-x-4">
      {/* First product loading element */}
      <div className="h-40 w-40 bg-gray-200 animate-pulse"></div>

      {/* Second product loading element */}
      <div className="h-40 w-40 bg-gray-200 animate-pulse"></div>

      {/* Third product loading element */}
      <div className="h-40 w-40 bg-gray-200 animate-pulse"></div>
    </div>
  );
};

export default LoadingSkeleton;
