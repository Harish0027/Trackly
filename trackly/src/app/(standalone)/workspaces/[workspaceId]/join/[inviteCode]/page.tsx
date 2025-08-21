import { JoinWorkspaceForm } from '@/components/join-workspace'
import React from 'react'

interface joinPageProps{
  params:{
    workSpaceId:string
  }
}

const  JoinPage =async ({params}:joinPageProps) => {
  const workspaceInfo={
    name:"harish"
  }
  
  return (
    <div className='w-full lg:max-w-xl'>
     <JoinWorkspaceForm initialValues={workspaceInfo} />
    </div>
   
  )
}

export default JoinPage