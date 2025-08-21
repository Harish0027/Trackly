"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AlertTriangle, Loader } from "lucide-react";

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col gap-y-4 items-center justify-center">
        <Loader className=" text-muted-foreground
        size-6 animate-spin" />
    </div>
  );
};

export default ErrorPage;
