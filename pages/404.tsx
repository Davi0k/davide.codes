import React from "react";
import { useRouter } from "next/router";
import type { NextRouter } from "next/router";

export default function NotFound() {
  const router: NextRouter = useRouter();

  React.useEffect(function() {
    router.replace("/");
  });

  return null;
}