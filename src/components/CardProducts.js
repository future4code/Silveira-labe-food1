import React, { useState, useContext } from "react";
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CenteredModal from "../../src/components/CenteredModal"
import styled from "styled-components"
import { removeProduct } from "../context/GlobalState"
import GlobalStateContext from "../context/GlobalStateContext";

const IMG = styled.img`
width: 300px;
`
const DivProdutos = styled.div`
  word-wrap: break-word;
  width: 300px;
`

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
  return (
    <DivProdutos key={product.id}>

      <IMG src={product.photoUrl} alt={product.photoUrl} />
      <p>{product.name}</p>
      <span>{product.description}</span>
      <p><strong>Preço: </strong>R$ {product.price}</p>
      <CenteredModal
        show={modalShow}
        product={product}
        onHide={() => setModalShow(false)}
        setAddButton={()=> setAddButton(false)}
      />
      {
        addButton === true
          ?
          <Button variant="outline-primary" onClick={showModal}>Adicionar</Button>
          :
          <Button variant="outline-danger" onClick={()=>removeProduct(product, setRemoveButton)}>Remover</Button>
      }

    </DivProdutos>)
}

export default CardProduct