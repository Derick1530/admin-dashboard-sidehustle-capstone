import React, { useState } from 'react'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
// import logo from '../../asset/logo.png'
import { IoIosFlash } from 'react-icons/io'
import { MdSpaceDashboard } from 'react-icons/md'
import { BsFillTagsFill } from 'react-icons/bs'
import { FiUsers } from 'react-icons/fi'
import { SiAsana } from 'react-icons/si'
import { BsCartDash } from 'react-icons/bs'
import { BsBarChart } from 'react-icons/bs'
import { IoMdLogOut } from 'react-icons/io'
import { Link } from 'react-router-dom'

const SideBar = () => {

    const [open, setOpen] = useState(false)
    const Menue = [
        { title: 'Dashboard', src: <MdSpaceDashboard />, link: '/' },
        { title: 'Team Members', src: <BsFillTagsFill />, link: 'team-members' },
        { title: 'Clients', src: <FiUsers />, gap: true, link: 'clients' },
        { title: 'Products', src: <BsFillTagsFill />, link: 'products' },

    ]
    return (
        <div className='flex md:container'>
            <div className={`${open ? 'w-72' : 'w-20'}  p-5 pt-8 h-screen duration-300 relative bg-navy-blue font-semibold`}>
                < BsFillArrowLeftCircleFill
                    className={`absolute text-2xl text-yellow font-semibold cursor-pointer mr-marg duration-500 right-0 top-9 w-7 ${!open && 'rotate-180'}`}
                    onClick={() => setOpen(!open)}
                />
                <div className={`flex gap-x-4 items-center mb-2`}>
                    <div>
                        <IoIosFlash className={`text-yellow text-center cursor-pointer  duration-400 text-2xl`} />
                    </div>
                    <h1 className={`text-white duration-300 origin-left font-medium text-xl ${!open && 'scale-0'}`}>Logo</h1>
                </div>
                <ul className='pt-6'>
                    {/* Map through the Menue array to style each menu */}
                    {Menue.map((menu, i) => (
                        <Link to={menu.link}>
                            <li key={i} className={`text-white text-sm flex items-center gap-x-4 cursor-pointer
                            p-4 hover:bg-light-blue hover:text-navy-blue duration-400 rounded-md`}>
                                <h2>{menu.src}</h2>
                                <span className={`${!open && 'hidden'} origin-left duration-200`}>{menu.title}</span>
                            </li>
                        </Link>
                    ))}
                </ul>

                {/* The log out button was moved from adminContainer */}
                <div className={`mt-8 space-x-3 btn btn-error  justify-center p-3 flex items-center  rounded-md`} onClick={() => {
                    localStorage.removeItem('admin')
                    window.location.reload()
                }} >
                    <IoMdLogOut />
                    <button className={` font-bold ${!open && 'hidden'} ${open && <BsBarChart />}`} >
                        Logout
                    </button>
                </div>
            </div>

        </div>
    )
}

export default SideBar