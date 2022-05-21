import React, { useEffect, useState } from 'react'
import DashboardContainer from '../../components/dashBoardContainer';

function DashBoard() {
    const [teamData, setTeamData] = useState();

    useEffect(() => {

        const fetchTeamData = async () => {
            try {
                const data = await axios.get(' https://fakerapi.it/api/v1/products?_quantity=3')
                setTeamData(data.data);
            } catch (error) {
                console.log("Error", error)
            }
        }
        fetchTeamData()


    }, [])

    return (
        <div className='p-5'>
            <DashboardContainer data={teamData} />
        </div>
    )
}

export default DashBoard