"use client"

import { GlassButton } from '@/components/ui/glass-button'
import '@/app/globals2.css'
const GlassButtonDemo = () => {
  return (
       <div className="flex h-[2.5rem] w-[7.5rem]  align-middle absolute bottom-0 left-40 h-16 w-16">
    <div className='flex size-full items-center justify-center rounded-xl bg-gray-800'>
  <a
            href="https://tomaslonnblad.github.io/tl33666">
           
      <GlassButton>Gallery</GlassButton>
 </a>
    </div></div>
  )
}

export default GlassButtonDemo
