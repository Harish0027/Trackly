
import React from 'react'

interface WorkspaceIdSettingsProps{
  params:{
    workspaceId:string
  }
}

const  SettingsPage =async ({params}:WorkspaceIdSettingsProps) => {
  
  return (
    <div>settingsPage :{params?.workspaceId}</div>
  )
}

export default SettingsPage