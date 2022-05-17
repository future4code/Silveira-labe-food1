import React from "react";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { goToDetailsPage } from "../router/coordinator";

const Card = styled.div`
  border-radius: 10px;
  border: solid 2px #b8b8b8;
  min-height:50vh;
  width: 250px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  img {
      height: 200px;
      width: 250px;
  }
`
const Paragraph = styled.div `
  word-wrap: break-word;
  line-height: 20.0px;
`

const CardsRestaurant = (props) => {
    const navigate = useNavigate()

    return(
        <Card>
            <img src={props.logoUrl} />
            <Paragraph> Nome: {props.name} </Paragraph>  
            <Paragraph> Descrição: {props.description} </Paragraph>
            <Paragraph> Tempo de Entrega: {props.deliveryTime} min </Paragraph>       
            <Paragraph> Frete: R${props.shipping},00 </Paragraph>
            <button onClick={() => goToDetailsPage(navigate, props.id)}>Ver detalhes</button>
        </Card>
    )
}

export default CardsRestaurant; 