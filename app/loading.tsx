import React from "react";

const LoadingSkeleton = () => {
  return (
    <div className="fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center bg-gray-200">
      <div className="flex space-x-4">
        <div className="w-8 h-8 bg-gray-400 rounded-full animate-bounce" />
        <div className="w-8 h-8 bg-gray-400 rounded-full animate-bounce" />
        <div className="w-8 h-8 bg-gray-400 rounded-full animate-bounce" />
      </div>
    </div>
  );
};

export default LoadingSkeleton;
