import React, { useState, useContext } from "react";
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CenteredModal from "../../src/components/CenteredModal"
import styled from "styled-components"
import { removeProduct } from "../context/GlobalState"
import GlobalStateContext from "../context/GlobalStateContext";
import { ButtonAdd, ButtonRem, IMG, CardProdutos, DivBody, DivQuant } from "./CardProductsStyled";
import { DivTitle, DivDesc, DivPrice } from "./CardProductsStyled";


const CardProduct = (props) => {
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

  return (
    <CardProdutos key={props.product.id}>

      <IMG src={props.product.photoUrl} alt={props.product.photoUrl} />

      <DivBody>
        <DivTitle><p>{props.product.name}</p></DivTitle>      
        <DivDesc><span>{props.product.description}</span>  </DivDesc>
        <DivPrice><p><strong> </strong>R$ {props.product.price}</p> </DivPrice>
      <CenteredModal
        show={modalShow}
        product={props.product}
        onHide={() => setModalShow(false)}
        setAddButton={()=> setAddButton(false)}
      />
       </DivBody>     
    
      {
        addButton === true
          ?
          <ButtonAdd  onClick={showModal}>Adicionar</ButtonAdd>
          :
          <ButtonRem onClick={()=>removeProduct(props.product, setRemoveButton)}>Remover</ButtonRem>
      }
      


    </CardProdutos>
    )
}

export default CardProduct