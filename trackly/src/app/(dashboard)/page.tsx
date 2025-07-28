"use client";

import UserButton from "@/features/auth/components/user-button";
import CreateWorkspace from "@/features/workspaces/components/create-work-space";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default  function Home() {

  const router=useRouter();

   const workspaces = [
    {
      id: "ws1",
      name: "Marketing Team",
    },
    {
      id: "ws2",
      name: "Engineering Team",
    },
    {
      id: "ws3",
      name: "Design Squad",
    },
    {
      id: "ws4",
      name: "Product Management",
    },
  ];

  useEffect(()=>{
   if(workspaces.length===0){
    router.push("/workspace/create")
  }else{
    router.push(`/workspace/${workspaces[0].id}`)
  }
  },[router])
  
  
  return (
    <div className="bg-neutral-500 p-4 h-full ">
      
    </div>
  );
}
