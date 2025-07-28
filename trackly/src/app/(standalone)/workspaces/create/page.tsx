
"use client"
import CreateWorkspace from '@/features/workspaces/components/create-work-space'
import React from 'react'

const page = () => {
  return (
    <div className='w-full lg:max-w-xl'>
        <CreateWorkspace onCancel={()=>{}} />
    </div>
  )
}

export default page