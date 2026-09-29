import Image from 'next/image'
import React from 'react'

const tabContent = ({src, title, text, list}) => {
  return (
    <div className='grid grid-cols-2 gap-6 p-7 my-9 rounded-[20px] border border-border items-center'>
        {/* Left - img */}
        <div>
            <Image src={src} width={570} height={496} alt='nothing'/>
        </div>
        {/* Right - content */}
        <div>
            <h3 className='text-primary! mb-[18px]'>{title}</h3>
            <p className='mb-[18px]'>{text}</p>
            <ul className='space-y-4'>
                {list}
            </ul>
        </div>
    </div>
  )
}

export default tabContent