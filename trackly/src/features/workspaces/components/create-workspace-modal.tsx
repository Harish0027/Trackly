"use client"
import ResponsiveModal from '@/components/responsive-modal'
import React from 'react'
import CreateWorkspace from './create-work-space'

const CreateWorkspaceModal = () => {
  return (
    <ResponsiveModal  open={false} onOpenChange={()=>{}}>
         <CreateWorkspace onCancel={()=>{}}/>
    </ResponsiveModal>
  )
}

export default CreateWorkspaceModal