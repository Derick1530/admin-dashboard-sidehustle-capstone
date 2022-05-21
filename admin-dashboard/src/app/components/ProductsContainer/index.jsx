import React from 'react'

const ProductContainer = ({ data }) => {
    if (!data) {
        return <div>Loading...</div>
    }
    const displayData = data.map((item, index) => {
        return (
            <div>
                <p>{item.name}</p>
                <img src={item.image} alt="Product Image" />

                <p>{item.net_price}</p>
                <p>{item.taxes}</p>
                <p>{item.price}</p>


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