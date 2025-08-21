"use client"

import { JoinWorkspaceForm } from '@/components/join-workspace'
import React, { Fragment } from 'react'

import Link from "next/link"
import { Button } from "./ui/button"
import { Card,CardContent,CardDescription,CardHeader,CardTitle } from "./ui/card"
import { ArrowLeftIcon, MoreVerticalIcon } from 'lucide-react'
import { DottedSeparator } from './dotted-separator'
import { Separator } from '@radix-ui/react-separator'
import { DropdownMenu,DropdownMenuContent,DropdownMenuItem,DropdownMenuTrigger } from './ui/dropdown-menu'
import { useConfirm } from '@/hooks/use-confim'

const  MembersList =async () => {
  const workspaceInfo={
    name:"harish"
  }

  const workspaceId="hello";
  const data=[{
    name:"harish"

  },{
    name:"kavish"

  }];

  const [Dialog,confirm]=useConfirm(
    "Remove member",
    "This member will be removed from the workspace",
    "destructive"
  )

  const handleDelete=async()=>{
    const ok=await confirm();
    if(!ok) return;
  }
  
  return (
    <div className='w-full lg:max-w-xl h-full border-none shadow-none'>
        <Dialog/>
        <CardHeader className='flex flex-col items-center gap-x-4 p-7 space-y-0'>
            <Button>
                <Link href={`/workspaces/${workspaceId}`}>
                 <ArrowLeftIcon className='size-4 mr-2' />
                Back
                </Link>
               
            </Button>
            <CardTitle className='text-xl font-bold' >
                Members List
            </CardTitle>
             
        </CardHeader>
        <div className='px-7'>
            <DottedSeparator />
        </div>
        <CardContent >
            {data.map((member,index)=>(
                <Fragment key={index}>
                    <div>
                        {member.name}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                        <Button className='ml-auto' variant={"secondary"} size={"icon"}>
                           <MoreVerticalIcon className='size-4 text-muted-foreground' />
                        </Button>
                                
                            </DropdownMenuTrigger>
                            <DropdownMenuContent side='bottom' align='end'>
                                <DropdownMenuItem className='font-medium' onClick={()=>{}} disabled={false}>
                                    Set as Member
                                </DropdownMenuItem>
                                 <DropdownMenuItem className='font-medium text-amber-700' onClick={handleDelete} disabled={false}>
                                    Remove {member.name}
                                </DropdownMenuItem>

                            </DropdownMenuContent>


                        </DropdownMenu>
                       
                    </div>
                    {
                        index<data.length-1&&(
                            <Separator className='my-2.5'/>
                        )
                    }
                </Fragment>
            ))}
        </CardContent>
    </div>
   
  )
}

export default MembersList