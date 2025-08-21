
import EditWorkspaceForm from '@/features/workspaces/components/edit-workspace-form'
import React from 'react'

interface WorkspaceIdSettingsProps{
  params:{
    workSpaceId:string
  }
}

const  SettingsPage =async ({params}:WorkspaceIdSettingsProps) => {
  
  return (
    <div className='w-full lg:max-w-xl'>
      <EditWorkspaceForm/>
    </div>
   
  )
}

export default SettingsPage