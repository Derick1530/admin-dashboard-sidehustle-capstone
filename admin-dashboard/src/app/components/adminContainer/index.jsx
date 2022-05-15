import React from 'react'

const AdminContainer = () => {
    return (
        <div className="drawer drawer-mobile">
            Dashboard
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