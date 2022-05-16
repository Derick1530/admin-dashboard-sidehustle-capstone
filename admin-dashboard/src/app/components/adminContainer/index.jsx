import React from 'react'
import SideBar from '../SideBar/SideBar'


const AdminContainer = () => {
    return (
        <div className="drawer drawer-mobile">
            <SideBar />
            <button onClick={() => {
                localStorage.removeItem('admin')
                window.location.reload()
            }} className="btn">
                Logout
            </button>
        </div>
    )
}

export default AdminContainer