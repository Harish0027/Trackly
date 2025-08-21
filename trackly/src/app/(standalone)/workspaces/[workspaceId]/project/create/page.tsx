
"use client"

import CreateProjectForm from '@/features/projects/components/create-project-form'
import React from 'react'

const page = () => {
  return (
    <div className='w-full lg:max-w-xl'>
        <CreateProjectForm onCancel={()=>{}} />
    </div>
  )
}

export default page