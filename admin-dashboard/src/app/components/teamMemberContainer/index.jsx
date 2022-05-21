import React from 'react'

const TeamMemberContainer = ({ data }) => {

    console.log('see ', data)
    if (!data) {
        return <div>Loading...</div>
    }

    const displayData = data.map((item, index) => {
        return (
            <div className='overflow-x-auto w-full p-4'>
                <table className='table w-full'>
                    <thead>
                        <tr>
                            <th>
                                Full name
                            </th>
                            <th>
                                Email
                            </th>
                            <th>
                                Phone Number
                            </th>
                            <th>
                                Gender
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className=''>
                            <td className=''>
                                <div className='flex items-center space-x-3'>
                                    <div className='avatar'>
                                        <div className='mask mask-squircle w-12 h-12'>
                                            <img src={item.image} alt={item.firstname} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className='font-bold'> {item.firstname}</div>
                                        <div> {item.lastname}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                @{item.email}
                            </td>
                            <td>
                                {item.phone}
                            </td>
                            <td>
                                <div className='flex items-center justify-center'>
                                    {item.gender}

                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>)

    })
    return (
        <div className=' bg-white'>
            {displayData}
        </div>
    )
}

export default TeamMemberContainer