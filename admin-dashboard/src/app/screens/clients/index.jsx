import axios from 'axios'
import { useEffect, useState } from 'react'
import ClientsContainer from '../../components/ClientsContainer';
export const Clients = () => {
    const [teamData, setTeamData] = useState();
    useEffect(() => {

        const fetchTeamData = async () => {
            try {
                const data = await axios.get(' https://fakerapi.it/api/v1/companies?_quantity=10')
                setTeamData(data.data);
            } catch (error) {
                console.log("Error", error)
            }
        }
        fetchTeamData()


    }, [])
    return (
        <ClientsContainer data={teamData?.data} />
    )
}
