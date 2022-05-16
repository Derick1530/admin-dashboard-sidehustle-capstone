import React, { useState } from 'react'
import {BsArrowLeftCircle} from 'react-icons/bs'
import logo from '../../asset/logo.png'
import {IoFlashSharp} from 'react-icons/io'

const SideBar = () => {

    const [open,setOpen] = useState(true)
  return (
    <div className='flex'>
        <div className={`${open ? 'w-72' : 'w-20'} h-screen duration-300 relative bg-light-blue font-semibold`}>
            < BsArrowLeftCircle  
            className={`absolute cursor-pointer mr-marg right-0 text-lg top-9 w-7 ${!open && 'rotate-180'}`}
             onClick={() => setOpen(!open)}
             />
        </div>
        <div className='p-7 text-2x1 font-semibold flex-1 h-sreen'>
            <h2>Home Page</h2>
        </div>
    </div>
  )
}

export default SideBar