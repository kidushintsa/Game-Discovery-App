// import React from 'react'

const GameCardSkeleton = () => {
  return (
    <div className="flex flex-col rounded-lg overflow-hidden max-h-fit bg-gray-800 animate-pulse">
      {/* Image Skeleton */}
      <div className="w-full h-[200px] bg-gray-700" />

      <section className="p-3 flex flex-col justify-center">
        {/* Header (Platforms + Critic Score) */}
        <div className="flex justify-between mb-3">
          <div className="w-24 h-5 bg-gray-700 rounded-md" />
          <div className="w-8 h-8 bg-gray-700 rounded-full" />
        </div>

        {/* Game Title Skeleton */}
        <div className="w-32 h-6 bg-gray-700 rounded-md mt-2" />
      </section>
    </div>
  );
};

export default GameCardSkeleton;
