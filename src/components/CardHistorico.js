import React from 'react'
import styled from 'styled-components'
import { Typography } from "@mui/material";



const CardContainer = styled.div`
    border: 1px solid black;
    border-radius: 16px;
    width: 80vw;
    margin: 0 0 10px;
    padding: 10px;
`

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
        <CardContainer>
            <Typography sx={{color: "#E86E5A"}}>{restaurantName}</Typography>
            <p>{date}</p>
            <p><b>SUBTOTAL</b> {totalPriceBRL}</p>
        </CardContainer>
    )
}
export default CardHistorico;