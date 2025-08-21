"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";

const ErrorPage = () => {
  return (
    <div className="h-screen text-muted-foreground flex flex-col gap-y-4 items-center justify-center">
      <AlertTriangle className="w-8 h-8 text-red-500" />
      <p className="text-sm text-muted-foreground">
        Something went wrong
      </p>
      <Link href="/" passHref>
        <Button variant="secondary" size={"sm"}>
          Back to home
        </Button>
      </Link>
    </div>
  );
};

export default ErrorPage;
