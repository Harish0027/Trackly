"use client"
import ResponsiveModal from '@/components/responsive-modal'
import React from 'react'
import CreateProjectForm from './create-project-form'

const CreateProjectModal = () => {
  return (
    <ResponsiveModal  open={true} onOpenChange={()=>{}}>
         <CreateProjectForm onCancel={()=>{}}/>
    </ResponsiveModal>
  )
}

export default CreateProjectModal