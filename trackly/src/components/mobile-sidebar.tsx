"use client";

import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "./sidebar";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const MobileSiderbar = () => {
    const [isOpen,setIsOpen]=useState<boolean>(false);
    const pathname=usePathname();

    useEffect(()=>{
     setIsOpen(false)
    },[pathname])
  return (
    <Sheet modal={false} open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button size={"icon"} variant={"secondary"} className="lg:hidden">
          <MenuIcon className="size-4 text-neutral-500" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSiderbar;
