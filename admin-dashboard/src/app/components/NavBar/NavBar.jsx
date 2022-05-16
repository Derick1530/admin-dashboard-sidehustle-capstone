import React from 'react'
import {BiSearch} from 'react-icons/bi'
import {MdOutlineNotificationsActive} from 'react-icons/md'

const NavBar = () => {
  return (
    <nav className={`  w-screen bg-light-blue  px-12 py-4`}>
       <div className='  flex justify-between'>
            <div >
                <h1>Dashboard</h1>
            </div>
            <div className={`flex justify-end gap-x-4 absolute right-12 mt-1`}>
                <div >
                    <BiSearch />
                </div>
                <div>
                    <MdOutlineNotificationsActive />
                </div>
            </div>
       </div>
        
    </nav>
  )
}

export default NavBar