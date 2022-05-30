import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components';
import GlobalStateContext from "../context/GlobalStateContext"
import Relogio from "../assets/relogio.png"

const CardActive = styled.div`
  border-radius: 10px;
  border: solid 2px #b8b8b8;
  min-height:10vh;
  width: 365px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: #E86E5A;
  position: relative;
  margin-left: 5px;
`
const Paragraph = styled.div`
  word-wrap: break-word;
  font-size: 18px;
  padding-left: 100px;
  margin-bottom: 5px;
`
const IMG = styled.img `
left: 0;
height: 60px;
width: 60px;
/* padding-top: 10px; */
`
const PedidoEmAndamento = styled.p`
padding-left: 100px;
color: white;
font-size: 20px;
margin-top: -40px;
`


const ActiveOrderComponent = (props) => {
    const { states, setters, values, requests } = useContext(GlobalStateContext)
    const { restaurants, pedidoAtivo } = states;
    const { setRestaurants } = setters;
    const { token, headers } = values;
    const { getRestaurants, activeOrder } = requests;

    return (
        <CardActive>
            <IMG src={Relogio} /> 
            <PedidoEmAndamento>Pedido em andamento</PedidoEmAndamento>
            <Paragraph> {pedidoAtivo.restaurantName} </Paragraph>
            <Paragraph><strong>SUBTOTAL: R$ {pedidoAtivo.totalPrice} </strong></Paragraph>
        </CardActive>
    )
}

export default ActiveOrderComponent; 
