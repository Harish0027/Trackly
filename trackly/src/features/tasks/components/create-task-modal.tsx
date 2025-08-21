"use client"
import ResponsiveModal from "@/components/responsive-modal";
import { useState } from "react";
import { CreateTaskFormWrapper } from "./create-task-form-wrapper";

export const CreateTaskModal=()=>{
    const [isOpen,setIsOpen]=useState<boolean>(false);
    return (
       < ResponsiveModal open={isOpen} onOpenChange={setIsOpen} >
        <CreateTaskFormWrapper onCancel={()=>{}}/>
       </ResponsiveModal>
    )
}