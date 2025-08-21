import { JoinWorkspaceForm } from '@/components/join-workspace'
import MembersList from '@/components/members-list'
import React from 'react'

interface WorkspaceIdMembersPageProps{
  params:{
    workSpaceId:string
  }
}

const  WorkspaceIdMembersPage =async ({params}:WorkspaceIdMembersPageProps) => {
  const workspaceInfo={
    name:"harish"
  }
  
  return (
    <div className='w-full lg:max-w-xl'>
     <MembersList  />
    </div>
   
  )
}

export default WorkspaceIdMembersPage