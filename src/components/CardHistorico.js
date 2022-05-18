import React from 'react'
import styled from 'styled-components'




const CardHistorico = (props) =>{

    const {restaurantName, totalPrice, createdAt } = props
    const convertDate = (otempo) => {
        let time = new Date(otempo)
        let day = time.getDate().toString().padStart(2, '0')
        let month = (time.getMonth() + 1).toString().padStart(2, '0')
        let year = time.getFullYear()

        return `${day}/${month}/${year}`;
    };
    
    const totalPriceBRL = totalPrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    const date = convertDate(createdAt)
    
    return(
        <div>
            <p>{restaurantName}</p>
            <p>{date}</p>
            <p>Subtotal {totalPriceBRL}</p>
        </div>
    )
}
export default CardHistorico;