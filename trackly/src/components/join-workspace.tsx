"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import { Card,CardContent,CardDescription,CardHeader,CardTitle } from "./ui/card"

interface joinWorkSpaceProps{
    initialValues:{
        name:string
    }
}

export const JoinWorkspaceForm=({initialValues}:joinWorkSpaceProps)=>{
    return (
  <Card className="w-full h-full border-none shadow-none">
    <CardHeader className="p-7">
      <CardTitle className="text-xl font-bold">
        Join workspace
      </CardTitle>
      <CardDescription>
        You&apos;ve been invited to join <strong>{initialValues.name}</strong>
      </CardDescription>
    </CardHeader>
    <CardContent className="p-7">
        <div className="flex flex-col gap-2 lg:flex-row items-center justify-between">
            <Button variant={"secondary"} asChild size={"lg"} className="w-full lg:w-fit" type="button">
                <Link href={"/"}>
                Cancel
                </Link>
            </Button>
            <Button size={"lg"} type="button" className="w-full lg:w-fit">
                Join Workspace
            </Button>
        </div>
    </CardContent>
  </Card>
);

}