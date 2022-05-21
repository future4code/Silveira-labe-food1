import React, { useContext, useEffect, useState } from 'react'
import GlobalStateContext from '../../context/GlobalStateContext'
import { useParams, useNavigate } from 'react-router-dom'
import styled from "styled-components"
import { goToHomePage, goToCartPage } from "../../router/coordinator";
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { quantityNumbers } from '../../constants/urls';
import CenteredModal from '../../components/CenteredModal'
import CardProduct from '../../components/CardProducts';
import {EachProduct} from "./styled";

const IMG = styled.img`
width: 300px;
`
const DivProdutos = styled.div`
  word-wrap: break-word;
  width: 300px;
`

export default function DetailsPage() {
  const { states, setters, requests, values } = useContext(GlobalStateContext);
  const { restaurants, restaurantDetail, cart, qtd } = states;
  const { setRestaurants, setRestaurantDetail, setCart, setQtd } = setters;
  const { getRestaurants, getRestaurantDetail, addToCart, onChangeQuantity } = requests;
  const { token, headers } = values;
  const params = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    getRestaurants();
    getRestaurantDetail(params.id);
    
  }, [])

  useEffect(() => {
    getRestaurantDetail(params.id);    
  }, [])

  const productsMap = restaurantDetail.products && restaurantDetail.products.map((product) => {   
    return (
      <EachProduct>
        <CardProduct 
        product = {product}
        key={product.id}

        />
      </EachProduct>
     )
  })

  return (
    <div>
      <Button variant="outline-primary" onClick={() => goToHomePage(navigate)}>Voltar</Button>
      {productsMap}
      
      <Button variant="outline-primary" onClick={()=> goToCartPage(navigate)}>Ir para carrinho</Button>
    </div>
  )
}
