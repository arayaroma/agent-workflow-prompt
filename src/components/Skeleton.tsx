import React from "react";

const Skeleton = () => {
  return (
    <div className="py-2">
      <h1 className="text-2xl font-bold text-white pb-2">Result</h1>
      <div className="bg-neutral-800 h-32 rounded-md">
        <div className="animate-pulse flex space-x-4 p-4">
          <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-neutral-600 rounded w-3/4"></div>
            <div className="space-y-3">
              <div className="h-3 bg-neutral-600 rounded w-4/6"></div>
              <div className="h-3 bg-neutral-600 rounded w w-6/12"></div>
              <div className="h-3 bg-neutral-600 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skeleton;
