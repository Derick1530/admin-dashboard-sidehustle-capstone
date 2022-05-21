import axios from 'axios'
import { useEffect, useState } from 'react'
import TeamMemberContainer from '../../components/teamMemberContainer';
export const TeamMember = () => {
    const [teamData, setTeamData] = useState();
    useEffect(() => {

        const fetchTeamData = async () => {
            try {
                const data = await axios.get('https://fakerapi.it/api/v1/persons?_quantity=10')
                setTeamData(data.data);
            } catch (error) {
                console.log("Error", error)
            }
        }
        fetchTeamData()


    }, [])
    return (
        <TeamMemberContainer data={teamData?.data} />
    )
}
