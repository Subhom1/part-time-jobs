import React from "react";
import { useRouter } from "next/router";

export default function homePage() {
  const router = useRouter();
  const { user } = router.query;
  const handleClick = () => {
    router.push("/user-form");
  };
  return (
    <div className="flex-1 text-xs sm:text-sm flex flex-col justify-center items-center gap-2 sm:gap-4">
      <h1 className="text-4xl capitalize">Home page {`${user}`}</h1>

      <button
        onClick={handleClick}
        className="mt-4 px-4 py-2 bg-blue-800 text-white rounded  text-lg"
      >
        Job filter
      </button>
      <button
        onClick={handleClick}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded capitalize text-lg"
      >
        Add User Information
      </button>
    </div>
  );
}
