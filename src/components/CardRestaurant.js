import React from "react";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { goToDetailsPage } from "../router/coordinator";
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Card = styled.div`
  border-radius: 7px;
  border: solid 2px #b8b8b8;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  cursor: pointer;
  margin-top: 10px;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
  width: 340px;
  img {
    height: 170px;
    width: 335px;
    border-radius: 7px;
}
}
`
const Paragraph = styled.div `
  word-wrap: break-word;
  height: 30px;
`

const RestaurantName = styled.p `
  color: #E86E5A;
  font-size: 20px;
  padding: 10px;
`

const DivMainCards = styled.div`
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  box-sizing: border-box;
}
`
const DivP = styled.div`
  display: flex;
  justify-content: space-between;
  height: 30px;
  padding: 10px;
  margin-bottom: 10px;
`

const CardsRestaurant = (props) => {
    const navigate = useNavigate()

    return(
      <DivMainCards>

        <Card onClick={() => goToDetailsPage(navigate, props.id)}>
            <img src={props.logoUrl} />
            <Paragraph><RestaurantName>{props.name}</RestaurantName>  </Paragraph>  
            <DivP>
            <p> {props.deliveryTime} min </p>  
            <p> Frete: R${props.shipping} </p>    
            </DivP>   
        </Card>

        </DivMainCards>
    )
}

export default CardsRestaurant; 