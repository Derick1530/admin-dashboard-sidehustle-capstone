import React from 'react'

const ProductContainer = ({ data }) => {
    if (!data) {
        return <div>Loading...</div>
    }
    const displayData = data.map((item, index) => {
        return (
            <div className=' bg-white items-center w-fit px-6 py-1 my-4 rounded-lg'>
                <p className='mb-3 mt-5'>{item.name}</p>
                <img src={item.image} alt="Product Image" />
                <div className=''>
                    <p className='  rounded-lg'>Net Price: {item.net_price}</p>
                    <p className=' '> Taxes: {item.taxes}</p> 
                    <p>Price: {item.price}</p>
                </div>
                


            </div>
        )
    })
    return (
        <div>
            {displayData}
        </div>
    )
}

export default ProductContainer