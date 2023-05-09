import React from "react";
import { useRouter } from "next/router";

export default function homePage() {
  const router = useRouter();
  const { user } = router.query;
  return (
    <div className="flex-1 text-xs sm:text-sm flex flex-col justify-center items-center gap-2 sm:gap-4">
      <h1 className="text-4xl capitalize">Home page {`${user}`}</h1>
    </div>
  );
}
