import axios from 'axios'
import { useEffect, useState } from 'react'
import ClientsContainer from '../../components/ClientsContainer';
import ProductContainer from '../../components/ProductsContainer';
export const Products = () => {
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
        <ProductContainer data={teamData?.data} />
    )
}
