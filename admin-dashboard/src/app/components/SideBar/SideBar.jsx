import React, { useState } from 'react'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
// import logo from '../../asset/logo.png'
import {IoIosFlash} from 'react-icons/io'
import {MdSpaceDashboard} from 'react-icons/md'
import {BsFillTagsFill} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
import {SiAsana} from 'react-icons/si'
import {BsCartDash} from 'react-icons/bs'
import {BsBarChart} from 'react-icons/bs'
import {IoMdLogOut} from 'react-icons/io'
import NavBar from '../NavBar/NavBar'

const SideBar = () => {

    const [open,setOpen] = useState(true)
    const Menue =[
        {title: 'Dashboard', src: <MdSpaceDashboard />},
        {title: 'Products', src: <BsFillTagsFill />},
        {title: 'Customers', src: <FiUsers />, gap: true},
        {title: 'Analytic', src: <SiAsana />},
        {title: 'Orders', src: <BsCartDash />},
        {title: 'Charts', src: <BsBarChart/>, gap: true},
    ]
  return (
    <div className='flex md:container'>
        <div className={`${open ? 'w-72' : 'w-20'} fixed p-5 pt-8 h-screen duration-300 relative bg-navy-blue font-semibold`}>
                < BsFillArrowLeftCircleFill  
                    className={`absolute text-2xl text-yellow font-semibold cursor-pointer mr-marg duration-500 right-0 top-9 w-7 ${!open && 'rotate-180'}`}
                    onClick={() => setOpen(!open)}
                />
             <div className={`flex gap-x-4 items-center mb-2`}>
                 <div>
                 <IoIosFlash className={`text-yellow text-center cursor-pointer  duration-400 text-2xl`}/>
                 </div>
                <h1 className={`text-white duration-300 origin-left font-medium text-xl ${!open && 'scale-0'}`}>Logo</h1>
             </div>
             <ul className='pt-6'>
                 {/* Map through the Menue array to style each menu */}
                 {Menue.map((menu, i) => (
                     <li key={i} className={`text-white text-sm flex items-center gap-x-4 cursor-pointer
                            p-4 hover:bg-light-blue hover:text-navy-blue duration-400 rounded-md`}>
                         <h2>{menu.src}</h2>
                         <span className={`${!open && 'hidden'} origin-left duration-200`}>{menu.title}</span>
                     </li>
                ))}
             </ul>

             {/* The log out button was moved from adminContainer */}
             <div className={`mt-8 bg-yellow p-3 text-center  rounded-md`}>
                 <IoMdLogOut className={`${open && 'hidden'}`} onClick={() => {
                    localStorage.removeItem('admin')
                    window.location.reload()
                }}/>
                <button className={`w-100 bg-yellow font-bold ${!open && 'hidden' } ${open && <BsBarChart />}`} onClick={() => {
                    localStorage.removeItem('admin')
                    window.location.reload()
                }} >
                    Logout
                </button>
             </div>
        </div>
        <div className=' text-2x1 font-semibold'>
            <NavBar />
            <h2>Home Page</h2>
        </div>
    </div>
  )
}

export default SideBar