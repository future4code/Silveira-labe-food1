import React, { useState, useContext } from "react";
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CenteredModal from "../../src/components/CenteredModal"
import styled from "styled-components"
import { removeProduct } from "../context/GlobalState"
import GlobalStateContext from "../context/GlobalStateContext";
import { ButtonAdd, ButtonRem, IMG, CardProdutos, DivBody, DivQuant } from "./CardProductsStyled";
import { DivTitle, DivDesc, DivPrice } from "./CardProductsStyled";


const CardProduct = ({ product }) => {
  const [modalShow, setModalShow] = useState(false);
  const [addButton, setAddButton] = useState(true);

  const { states, setters, requests } = useContext(GlobalStateContext);
  const { cart } = states
  const { setCart } = setters;
  const {removeProduct} = requests;
  
  const showModal = () => {
    setModalShow(true);
  }

  const setRemoveButton = () => {
    setAddButton(true)
  }

  const findProduct = cart.find((item) => {
    return item.item.id === product.id
})

  return (
    <CardProdutos key={product.id}>

      <IMG src={product.photoUrl} alt={product.photoUrl} />

      <DivBody>
        <DivTitle><p>{product.name}</p></DivTitle>      
        <DivDesc><span>{product.description}</span>  </DivDesc>
        <DivPrice><p><strong> </strong>R$ {product.price}</p> </DivPrice>
      <CenteredModal
        show={modalShow}
        product={product}
        onHide={() => setModalShow(false)}
        setAddButton={()=> setAddButton(false)}
      />
       </DivBody>     

       {/* {
        findProduct.item.id === product.id && findProduct.item.quantity >=1
          &&
          <DivQuant>
          <p>{product.quantity}</p>
          </DivQuant>
          
        } */}
    
      {
        addButton === true
          ?
          <ButtonAdd  onClick={showModal}>Adicionar</ButtonAdd>
          :
          <ButtonRem onClick={()=>removeProduct(product, setRemoveButton)}>Remover</ButtonRem>
      }
      


    </CardProdutos>
    )
}

export default CardProduct