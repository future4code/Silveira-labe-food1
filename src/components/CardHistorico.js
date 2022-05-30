import React from 'react'
import styled from 'styled-components'
import { Typography } from "@mui/material";



const CardContainer = styled.div`
    border: 1px solid #D1D1D6;
    border-radius: 16px;
    width: 93vw;
    height: 15vh;
    margin: 0 0 10px;
    padding: 10px 0px 0px 15px;
`
const Subtotal = styled.p`
    position: relative;
    top: -15px;
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
            <Subtotal><strong>SUBTOTAL</strong>{totalPriceBRL}</Subtotal>
        </CardContainer>
    )
}
export default CardHistorico;