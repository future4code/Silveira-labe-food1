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
  // const [addButton, setAddButton] = useState(quantidade === 0 ? "Adicionar" : "Remover") // CART
  const params = useParams();
  const navigate = useNavigate();
  // const [modalShow, setModalShow] = useState(false);


  useEffect(() => {
    getRestaurants();
    getRestaurantDetail(params.id);
  }, [])

  // const showModal = () => {
  //   setModalShow(true);
  // }

  console.log(cart);
 

  const productsMap = restaurantDetail.products && restaurantDetail.products.map((product) => {   
    return (
      <CardProduct 
      product = {product}
      key={product.id}
      />
      // <DivProdutos key={product.id}>

      //   <IMG src={product.photoUrl} alt={product.photoUrl} />
      //   <p>{product.name}</p>
      //   <span>{product.description}</span>
      //   <p><strong>Preço: </strong>R$ {product.price},00</p>
      //   <CenteredModal
      //     show={modalShow}
      //     product={product}
      //     onHide={()=>setModalShow(false)}
      //   />
          
      //   <Button variant="outline-primary" onClick={showModal}>Adicionar</Button>

      // </DivProdutos>
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
