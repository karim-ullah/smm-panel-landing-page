import React from 'react'

const processCard = ({number, title, description}) => {
  return (
    <div className='p-8 border border-border rounded-[16px]'>
        <h2 className='text-primary!'>{number}</h2>
        <h4 className='mt-2'>{title}</h4>
        <p className='mt-5'>{description}</p>
    </div>
  )
}

export default processCard